import { Injectable } from '@angular/core';
import { GuardianInfo, PersonalInfo } from './models/Models';

@Injectable()
export class ProfileService {

    personalInfo: PersonalInfo = new PersonalInfo({});
    guardianInfo: GuardianInfo = new GuardianInfo({});

    constructor() { }
}
