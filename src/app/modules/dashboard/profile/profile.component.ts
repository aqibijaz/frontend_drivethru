import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  loggedInUser: any;

  imageSourcePath: any;

  ngOnInit(): void {

    this.loggedInUser = JSON.parse(localStorage.getItem('loginUser'));

    this.loggedInUser !== null ? this.imageSourcePath = this.loggedInUser.data.profileImage : this.imageSourcePath = 'assets/img/profile-img.jpg';
  }
}
