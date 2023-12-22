import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public isLoggedIn: boolean = false;
  public form_login: FormGroup;
  public login_failed: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router) {

    this.authService.isLoggedIn().subscribe((isLoggedIn) => this.isLoggedIn = isLoggedIn);

    this.form_login = new FormGroup({
      user: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  
  }

  public signin(): void {
    if (!this.form_login.valid)
      return;

    const { user, password } = this.form_login.value;
    this.authService.login(user, password).subscribe({
      next: (data) => {
        console.log("logged in");
        this.login_failed = false;
        if (localStorage.getItem('redirect_after_login') !== null) { console.log("redirect");
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
