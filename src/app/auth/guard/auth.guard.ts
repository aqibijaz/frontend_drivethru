import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private cookieService: CookieService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const cookieExists = this.cookieService.check('token');
        if (cookieExists) {
            return true;
        }
        this.router.navigate(['auth/signin'], { queryParams: { returnUrl: state.url } });
        return false;
    }

    getCookie(key: string): any {
        return this.cookieService.get(key);
    }
}
