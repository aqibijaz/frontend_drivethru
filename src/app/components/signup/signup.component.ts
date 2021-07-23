import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
    formBuilder: FormBuilder,
    private router: Router
  ) {
    this.formGroup = formBuilder.group({
      email: '',
      password: '',
      mobile: '',
    });
  }

  ngOnInit(): void { }

  async signup() {
    
  }
}
