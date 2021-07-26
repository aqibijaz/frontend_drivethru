import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private cookieService: CookieService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }


  checkIsUserLogedIn(): boolean {

    const cookieExists = this.cookieService.check('token');

    if (cookieExists) {
      return true;
    } else {
      return false;
    }

  }

  logoutUser(): void {
    const cookieExists = this.cookieService.check('token');

    if (cookieExists) {
      this.cookieService.delete('token');
      this.router.navigateByUrl('/auth/signin');
    }
  }

}
