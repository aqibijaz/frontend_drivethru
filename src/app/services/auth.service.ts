import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SignUpModel } from '../auth/signup/signup.component';

@Injectable({
    providedIn: 'root'
})
export class LocalAuthService {

    constructor(
        private httpClient: HttpClient,
    ) { }

    loginUser(Contact: string, Password: string): Promise<any> {

        return new Promise((resolve, reject) => {
            this.httpClient.post(environment.apiURL + 'users/signIn',
                {
                    contact: Contact,
                    password: Password
                })
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    loginWithGoogle(socialAuth: any): Promise<any> {

        return new Promise((resolve, reject) => {
            this.httpClient.post(environment.apiURL + 'users/signIn',
                {
                    socialAuth
                })
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    signUpUser(data: SignUpModel): Promise<any> {

        return new Promise((resolve, reject) => {
            this.httpClient.post(environment.apiURL + 'users/signUp',
                {
                    fullName: data.fullName,
                    email: data.email,
                    contact: data.contact,
                    password: data.password
                })
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

}

