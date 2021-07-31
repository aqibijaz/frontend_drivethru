import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable()
export class InterceptService implements HttpInterceptor {

    constructor(
        private router: Router,
        private cookieService: CookieService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const sessionTokenExclusionPathList = [
            environment.apiURL + 'auth/signin',
            environment.apiURL + 'auth/signup'
        ];

        const cookieExists = this.cookieService.check('token');

        if (!sessionTokenExclusionPathList.find(x => x === request.urlWithParams)) {

            if (request.headers.get('skip')) {
            }
            else if (cookieExists) {
                request = request.clone({
                    setHeaders: {
                        Authorization: this.cookieService.get('token')
                    }
                });
            }
        }

        return next.handle(request)
            .pipe(
                tap(() => {
                }, (error: any) => {
                    if (error instanceof HttpErrorResponse) {
                        if (error.status === 401) {
                            this.router.navigate(['auth/signin']);
                        }
                    }
                })
            );
    }
}
