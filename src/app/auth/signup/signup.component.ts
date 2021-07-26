import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signUpModel: SignUpModel;

  singUpForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    contact: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar,
  ) {
    this.signUpModel = new SignUpModel({});
  }

  ngOnInit(): void { }

  submitForm(): void {

    if (this.singUpForm.invalid) {
      return;
    }

    const formData = this.singUpForm.getRawValue();

    this.signUpModel.fullName = formData.fullName;
    this.signUpModel.email = formData.email;
    this.signUpModel.contact = formData.contact;
    this.signUpModel.password = formData.password;
    this.authService.signUpUser(this.signUpModel)
      .then((response) => {
        this.snackBar.open('SignUp success! Please signin to your account.', 'Ok', {
          duration: 5000
        });

        this.router.navigateByUrl('/auth/signin');

      }).catch((excp) => {
        this.snackBar.open('An error occured. Please try again', 'Ok', {
          duration: 5000
        });
      });
  }
}

export class SignUpModel {
  fullName: string;
  email: string;
  contact: string;
  password: string;

  constructor(data?) {
    data = data || {};
    this.fullName = data.fullName || '';
    this.email = data.email || '';
    this.contact = data.contact || '';
    this.password = data.password || '';
  }
}
