import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-content-week2',
  templateUrl: './content-week2.component.html',
  styleUrl: './content-week2.component.css'
})
export class ContentWeek2Component {
  public form_login: FormGroup;
  public login_failed: boolean = false;

  constructor() {
    this.form_login = new FormGroup({
      user: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  public isloggedin(): boolean {
    return false;
  }

  public signin(): void {
    if (!this.form_login.valid)
      return;

    alert("ok");
  }

}
