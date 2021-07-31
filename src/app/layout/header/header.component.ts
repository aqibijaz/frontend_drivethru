import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UniversityService } from 'src/app/services/university.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isToken = null;
  countryCheck = true;
  constructor(
    private cookieService: CookieService,
    private router: Router,
    public service: UniversityService
  ) {
    this.service.counterySwitch.subscribe((data) => {
      if (data == 'national') {
        this.countryCheck = true;
      } else {
        this.countryCheck = false;
      }
    });
    this.service.logout.subscribe((data) => {
      this.isToken = this.cookieService.check('token');
    });
  }

  ngOnInit(): void {}

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
      this.service.logout.next(true)
      this.router.navigateByUrl('/auth/signin');
    }
  }

  switchInternational() {
    this.service.counterySwitch.next('international');
  }

  switchNational() {
    this.service.counterySwitch.next('national');
  }
}
