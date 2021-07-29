import { Component, OnInit, ViewChild } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../profile/profile.service';
import { MatStepper } from '@angular/material/stepper';
import { GuardianInfo, PersonalInfo } from '../profile/models/Models';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  @ViewChild('stepper') private stepper: MatStepper;

  personalInfoForm = new FormGroup({
    name: new FormControl(this.profileService.personalInfo.name || '', [Validators.required]),
    fatherName: new FormControl(this.profileService.personalInfo.fatherName || '', [Validators.required]),
    motherName: new FormControl(this.profileService.personalInfo.motherName || '', [Validators.required]),
    cnic: new FormControl(this.profileService.personalInfo.cnic || '', [Validators.required]),
    dob: new FormControl(this.profileService.personalInfo.dob || new Date(), [Validators.required]),
    gender: new FormControl(this.profileService.personalInfo.gender || 'Male', [Validators.required]),
    religion: new FormControl(this.profileService.personalInfo.religion || '', [Validators.required]),
    bloodGroup: new FormControl(this.profileService.personalInfo.bloodGroup || 'B+', [Validators.required]),
    passportNumber: new FormControl(this.profileService.personalInfo.passportNumber || '', [Validators.required]),
    maritalStatus: new FormControl(this.profileService.personalInfo.maritalStatus || 'Single', [Validators.required]),
    nameOfNextOfKin: new FormControl(this.profileService.personalInfo.nameOfNextOfKin || '', [Validators.required]),
    nextOfKinRelation: new FormControl(this.profileService.personalInfo.nextOfKinRelation || '', [Validators.required]),
  });

  gardianInfoForm = new FormGroup({
    guardianName: new FormControl(this.profileService.guardianInfo.guardianName || '', [Validators.required]),
    guardianRelation: new FormControl(this.profileService.guardianInfo.guardianRelation || 'Father', [Validators.required]),
    guardianMonIncome: new FormControl(this.profileService.guardianInfo.guardianMonIncome || '', [Validators.required]),
    guardianCellNo: new FormControl(this.profileService.guardianInfo.guardianCellNo || '', [Validators.required]),
    guardianOccupation: new FormControl(this.profileService.guardianInfo.guardianOccupation || '', [Validators.required]),
    guardianCNIC: new FormControl(this.profileService.guardianInfo.guardianCNIC || '', [Validators.required]),
    guardianNTN: new FormControl(this.profileService.guardianInfo.guardianNTN || '', [Validators.required]),
  });

  acadmicInfoForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
  });

  constructor(
    private profileService: ProfileService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void { }

  stepperNext(): any {
    this.stepper.next();
  }

  stepperPrevious(): any {
    this.stepper.previous();
  }

  submitPersonalInfo(): void {
    if (this.personalInfoForm.invalid) {
      this.snackBar.open('Please fill all required fields', 'Ok', {
        duration: 5000
      });
    }
    const personalInfo = this.personalInfoForm.getRawValue();
    this.profileService.personalInfo = new PersonalInfo(personalInfo);
    this.stepperNext();
    this.personalInfoForm.reset();
  }

  fromGuardianToPersonal(): void {
    this.updatePersonalInfoFormValues();
    this.stepperPrevious();
  }

  fromPersonalToGuardian(): void {
    const personalInfo = this.personalInfoForm.getRawValue();
    this.profileService.personalInfo = new PersonalInfo(personalInfo);
    this.stepperNext();
    this.updateGuardianInfoFormValues();
    this.personalInfoForm.reset();
  }

  updatePersonalInfoFormValues(): void {

    this.personalInfoForm.patchValue({

      name: this.profileService.personalInfo.name,
      fatherName: this.profileService.personalInfo.fatherName,
      motherName: this.profileService.personalInfo.motherName,
      cnic: this.profileService.personalInfo.cnic,
      dob: this.profileService.personalInfo.dob,
      gender: this.profileService.personalInfo.gender,
      religion: this.profileService.personalInfo.religion,
      bloodGroup: this.profileService.personalInfo.bloodGroup,
      passportNumber: this.profileService.personalInfo.passportNumber,
      maritalStatus: this.profileService.personalInfo.maritalStatus,
      nameOfNextOfKin: this.profileService.personalInfo.nameOfNextOfKin,
      nextOfKinRelation: this.profileService.personalInfo.nextOfKinRelation
    });

  }

  updateGuardianInfoFormValues(): void {

    this.gardianInfoForm.patchValue({

      guardianName: this.profileService.guardianInfo.guardianName,
      guardianCNIC: this.profileService.guardianInfo.guardianCNIC,
      guardianCellNo: this.profileService.guardianInfo.guardianCellNo,
      guardianMonIncome: this.profileService.guardianInfo.guardianMonIncome,
      guardianNTN: this.profileService.guardianInfo.guardianNTN,
      guardianOccupation: this.profileService.guardianInfo.guardianOccupation,
      guardianRelation: this.profileService.guardianInfo.guardianRelation
    });
  }

  submitGardianInfo(): void {

    if (this.gardianInfoForm.invalid) {
      this.snackBar.open('Please fill all required fields', 'Ok', {
        duration: 5000
      });
    }

    const formData = this.gardianInfoForm.getRawValue();
    this.profileService.guardianInfo = new GuardianInfo(formData);
    this.stepperNext();
    this.personalInfoForm.reset();
  }

  fromGuardianToAcdamic(): void {

    const formData = this.gardianInfoForm.getRawValue();
    this.profileService.guardianInfo = new GuardianInfo(formData);
    this.stepperNext();
    this.personalInfoForm.reset();

  }

  submitAcadmic(): void { }

  submitPrefAndCommenceApplying(): void { }

}
