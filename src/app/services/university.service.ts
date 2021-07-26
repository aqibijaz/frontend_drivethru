import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SignUpModel } from '../auth/signup/signup.component';

@Injectable({
    providedIn: 'root'
})
export class UniversityService {

    constructor(
        private httpClient: HttpClient
    ) { }

    getUniDepCity(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.httpClient.get(environment.apiURL + 'university/national/get_uni_dep_city')
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    getUnvisity(uniName): Promise<any> {
        return new Promise((resolve, reject) => {
            this.httpClient.get(environment.apiURL + 'university/national?name=' + uniName)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

}

