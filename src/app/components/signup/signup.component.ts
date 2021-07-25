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
  constructor(private router: Router) { }

  ngOnInit() {
  }
  submitForm() {
    this.router.navigateByUrl('/signin')
  }
}
