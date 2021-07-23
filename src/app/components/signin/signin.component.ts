import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  submitForm() {
    this.router.navigateByUrl('dashboard')
  }
}
