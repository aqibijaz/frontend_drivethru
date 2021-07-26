import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    signIn(value: any) {
        return this.http.get('' + value)
    }
    signUp(value: any) {
    }
}
