import { Component, OnInit } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../profile/profile.service';
@Component({
  selector: 'app-informationform',
  templateUrl: './informationform.component.html',
  styleUrls: ['./informationform.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class InformationFormComponent implements OnInit {

  personalInfoForm = new FormGroup({
    name: new FormControl(this.profileService.personalInfo.name || '', [Validators.required]),
    fatherName: new FormControl(this.profileService.personalInfo.fatherName || '', [Validators.required]),
    motherName: new FormControl(this.profileService.personalInfo.motherName || '', [Validators.required]),
    cnic: new FormControl(this.profileService.personalInfo.cnic || '', [Validators.required]),
    dob: new FormControl(this.profileService.personalInfo.dob || new Date(), [Validators.required]),
    gender: new FormControl(this.profileService.personalInfo.gender || '', [Validators.required]),
    religion: new FormControl(this.profileService.personalInfo.religion || '', [Validators.required]),
    bloodGroup: new FormControl(this.profileService.personalInfo.bloodGroup || '', [Validators.required]),
    passportNumber: new FormControl(this.profileService.personalInfo.passportNumber || '', [Validators.required]),
    maritalStatus: new FormControl(this.profileService.personalInfo.maritalStatus || '', [Validators.required]),
    nameOfNextOfKin: new FormControl(this.profileService.personalInfo.nameOfNextOfKin || '', [Validators.required]),
    nextOfKinRelation: new FormControl(this.profileService.personalInfo.nextOfKinRelation || '', [Validators.required]),
  });

  gardianInfoForm = new FormGroup({
    guardianName: new FormControl(this.profileService.guardianInfo.guardianName || '', [Validators.required]),
    guardianRelation: new FormControl(this.profileService.guardianInfo.guardianRelation || '', [Validators.required]),
    guardianMonIncome: new FormControl(this.profileService.guardianInfo.guardianMonIncome || '', [Validators.required]),
    guardianCellNo: new FormControl(this.profileService.guardianInfo.guardianCellNo || '', [Validators.required]),
    guardianOccupation: new FormControl(this.profileService.guardianInfo.guardianOccupation || '', [Validators.required]),
    guardianCNIC: new FormControl(this.profileService.guardianInfo.guardianCNIC || '', [Validators.required]),
    guardianNTN: new FormControl(this.profileService.guardianInfo.guardianNTN || '', [Validators.required]),
  });

  acadmicInfoForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
  });

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void { }

  stepperNext(stepper): any {
    stepper.next();
  }

  stepperPrevious(stepper): any {
    stepper.previous();
  }

  submitPersonalInfo(): void { }

  submitGardianInfo(): void { }

  submitAcadmic(): void { }

  submitPrefAndCommenceApplying(): void {
  }

}
