import { Component } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject, debounceTime, delay, distinctUntilChanged, filter, map, of, switchMap, timer } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public isLoggedIn: boolean = false;
  public form_login: FormGroup;
  public login_failed: boolean = false;

  private lastTypedUsername: string = '';

  constructor(
    private authService: AuthService,
    private router: Router) {

    this.authService.isLoggedIn().subscribe((isLoggedIn) => this.isLoggedIn = isLoggedIn);

    this.form_login = new FormGroup({
      user: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(16),
        this.noBlankCharsValidator(),
        this.noSpecialCharsValidator()
      ], [
        this.availableUserValidator()
      ]),
      password: new FormControl('', [Validators.required])
    });
  
  }

  private noBlankCharsValidator() : ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value)
        return null;

      return (/\s/).test(value) ? { blankChars: true } : null;
    }
  }

  private noSpecialCharsValidator() : ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value)
        return null;

      return (/[^A-Za-z0-9]/).test(value) ? { specialChars: true } : null;
    }
  }

  private availableUserValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {

      /*return this.authService.checkAvailableUsername(control.value).pipe(
        map(isTaken => {
          return isTaken ? { usernameExists: true } : null
        })
      );*/

      return of(control.value).pipe(
        filter((username) => username != this.lastTypedUsername),
        delay(500),
        map((username) => this.lastTypedUsername = username),
        switchMap((username) => this.authService.checkAvailableUsername(username).pipe(
          map(isTaken => {
            return isTaken ? { usernameExists: true } : null
          })
        ))
      );

    }
  }

  public asyncValidationIsTrigerred(form_login: FormGroup): boolean { //console.log("trigerred");
    const userValidationErrors = form_login.get('user')?.errors;
      if (!userValidationErrors)
        return true;

      if (userValidationErrors['required'] || userValidationErrors['minlength'] || userValidationErrors['maxlength'] || userValidationErrors['blankChars'] || userValidationErrors['specialChars'])
        return false;

      return true;
  }




  public signin(): void {
    if (!this.form_login.valid)
      return;

    const { user, password } = this.form_login.value;
    this.authService.login(user, password).subscribe({
      next: (data) => {
        console.log("logged in");
        this.login_failed = false;
        if (localStorage.getItem('redirect_after_login') !== null) {
          this.router.navigate([localStorage.getItem('redirect_after_login')]).then(() => window.location.reload());
        }
      },
      error: (err) => {
        console.log("login failed");
        this.login_failed = true;
      }
    });
  }
}
