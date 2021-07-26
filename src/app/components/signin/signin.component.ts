import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  singIn = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }
  submitForm() {
    console.log("Form", this.singIn.value)
    this.auth.signIn(this.singIn.value).subscribe((res: any) => {
      if (res && res.status == 200) {
        // this.router.navigateByUrl('dashboard')
      } else {
        console.log("Some error")
      }
    });
    // this.router.navigateByUrl('dashboard')
  }
}
