import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LocalAuthService } from 'src/app/services/auth.service';
import { UniversityService } from 'src/app/services/university.service';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular-6-social-login';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {

  //    let socialPlatformProvider;
  // if (socialPlatform == "facebook") {
  //   socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
  // } else if (socialPlatform == "google") {
  //   socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
  // } else if (socialPlatform == "linkedin") {
  //   socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
  // }

  singInForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private router: Router,
    private authService: LocalAuthService,
    private snackBar: MatSnackBar,
    private cookieService: CookieService,
    private service: UniversityService,
    private socialAuthService: AuthService
  ) { }

  ngOnInit(): void { }

  submitForm(): void {

    if (this.singInForm.invalid) {
      return;
    }

    this.authService.loginUser(this.singInForm.get('username').value, this.singInForm.get('password').value).
      then((response) => {
        this.cookieService.deleteAll();
        this.cookieService.set('token', response.data.token);
        this.router.navigateByUrl('dashboard');
        this.service.logout.next(false);
      }).catch((response) => {
        this.snackBar.open(response.error.message, 'Ok', { duration: 5000 });
      });
  }


  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        // console.log(socialPlatform + " sign in data : ", userData);
        const socialAuth = {
          "googleId": userData.id,
          "fullName": userData.name,
          "email": userData.email,
          "profileImage": userData.image
        }

        this.authService.loginWithGoogle(socialAuth).
          then((response) => {
            this.cookieService.deleteAll();
            this.cookieService.set('token', response.data.token);
            this.router.navigateByUrl('dashboard');
            this.service.logout.next(false);
          }).catch((response) => {
            this.snackBar.open(response.error.message, 'Ok', { duration: 5000 });
          });

      }
    );
  }
}
