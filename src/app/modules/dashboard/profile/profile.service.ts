import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
    AcademicInterLevelInfo,
    AcademicMetricLevelInfo,
    GuardianInfo,
    PersonalInfo
} from './models/Models';

@Injectable()
export class ProfileService {

    personalInfo: PersonalInfo = new PersonalInfo({});
    guardianInfo: GuardianInfo = new GuardianInfo({});
    academicMetricLevelInfo: AcademicMetricLevelInfo = new AcademicMetricLevelInfo({});
    academicInterLevelInfo: AcademicInterLevelInfo = new AcademicInterLevelInfo({});

    constructor(
        private httpClient: HttpClient
    ) { }

    saveUserPersonalInfo(): Promise<any> {

        return new Promise((resolve, reject) => {
            this.httpClient.post(environment.apiURL + 'users/completeProfile',
                {
                    'nationalProfile.personalInformation': {
                        name: this.personalInfo.name,
                        fatherName: this.personalInfo.fatherName,
                        motherName: this.personalInfo.motherName,
                        cnic: this.personalInfo.cnic,
                        dob: this.personalInfo.dob,
                        gender: this.personalInfo.gender,
                        religion: this.personalInfo.religion,
                        bloodGroup: this.personalInfo.bloodGroup,
                        passportNumber: this.personalInfo.passportNumber,
                        maritalStatus: this.personalInfo.maritalStatus,
                        nameOfNextOfKin: this.personalInfo.nameOfNextOfKin,
                        nextOfKinRelation: this.personalInfo.nextOfKinRelation,
                    }
                }
            )
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    saveUserGuardianInfo(): Promise<any> {

        return new Promise((resolve, reject) => {
            this.httpClient.post(environment.apiURL + 'users/completeProfile',
                {
                    'nationalProfile.guardianInformation': {
                        guardianName: this.guardianInfo.guardianName,
                        guardianRelation: this.guardianInfo.guardianRelation,
                        guardianMonIncome: this.guardianInfo.guardianMonIncome,
                        guardianCellNo: this.guardianInfo.guardianCellNo,
                        guardianOccupation: this.guardianInfo.guardianOccupation,
                        guardianCNIC: this.guardianInfo.guardianCNIC,
                        guardianNTN: this.guardianInfo.guardianNTN,
                    }
                }
            )
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    saveUserAcademicInfo(): Promise<any> {

        return new Promise((resolve, reject) => {
            this.httpClient.post(environment.apiURL + 'users/completeProfile',
                {
                    'nationalProfile.academicInformation': {
                        metricLevel: {
                            examPassed: this.academicMetricLevelInfo.examPassed,
                            school: this.academicMetricLevelInfo.school,
                            board: this.academicMetricLevelInfo.board,
                            yearOfPassing: this.academicMetricLevelInfo.yearOfPassing,
                            serialNo: this.academicMetricLevelInfo.serialNo,
                            referenceNo: this.academicMetricLevelInfo.referenceNo,
                            marksObtained: this.academicMetricLevelInfo.marksObtained,
                            totalMarks: this.academicMetricLevelInfo.totalMarks,
                        },
                        interLevel: {
                            school: this.academicInterLevelInfo.school,
                            board: this.academicInterLevelInfo.board,
                            yearOfPassing: this.academicInterLevelInfo.yearOfPassing,
                            rollNo: this.academicInterLevelInfo.rollNo,
                            registrationNo: this.academicInterLevelInfo.registrationNo,
                            marksObtained: this.academicInterLevelInfo.marksObtained,
                            totalMarks: this.academicInterLevelInfo.totalMarks,
                        }
                    }
                }
            )
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

}
