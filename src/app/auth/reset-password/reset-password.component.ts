import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private loginService: LoginService, private router: Router, formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      username: '',
    });
  }

  ngOnInit(): void {
  }

  async getLink() {
    const { username } = this.formGroup.value;
    if (await this.loginService.getResetLink(username)) {
      this.router.navigate([`/verify/${username}`]);
    }
  }
}
