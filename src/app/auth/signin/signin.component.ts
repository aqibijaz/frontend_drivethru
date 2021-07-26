import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {

  singInForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private cookieService: CookieService,
  ) { }

  ngOnInit(): void { }

  submitForm(): void {

    if (this.singInForm.invalid) {
      return;
    }

    this.authService.loginUser(this.singInForm.get('username').value, this.singInForm.get('password').value).
      then((response) => {
        this.cookieService.set('token', response.data.token);
        this.router.navigateByUrl('dashboard');
      }).catch((response) => {
        this.snackBar.open(response.error.message, 'Ok', {
          duration: 5000
        });
      });
  }
}
