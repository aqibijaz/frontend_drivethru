import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class UniversityService {
  public counterySwitch: BehaviorSubject<string> = new BehaviorSubject<string>(
    'international'
  );
  public logout: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) {}

  get counterySwitchData(): string {
    return this.counterySwitch.value;
  }

  getUniDepCity(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient
        .get(environment.apiURL + 'university/national/get_uni_dep_city')
        .subscribe((response: any) => {
          resolve(response);
        }, reject);
    });
  }

  postCounsellingSession(body): Promise<any> {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.cookieService.get('token'),
      });
      this.httpClient
        .post(environment.apiURL + 'contactMail/counselling_session', body)
        .subscribe((response: any) => {
          resolve(response);
        }, reject);
    });
  }

  getUnvisity(uniName): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient
        .get(environment.apiURL + 'university/national?name=' + uniName)
        .subscribe((response: any) => {
          resolve(response);
        }, reject);
    });
  }

  getUser(): Promise<any> {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.cookieService.get('token'),
      });
      this.httpClient
        .get(environment.apiURL + '/users/getLoginUser', { headers })
        .subscribe((response: any) => {
          resolve(response);
        }, reject);
    });
  }
}
