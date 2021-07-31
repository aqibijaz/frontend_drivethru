import { Component, OnInit, ViewChild } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../profile/profile.service';
import { MatStepper } from '@angular/material/stepper';
import { AcademicInterLevelInfo, AcademicMetricLevelInfo, GuardianInfo, PersonalInfo } from '../profile/models/Models';
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

  acadmicMetricInfoForm = new FormGroup({
    examPassed: new FormControl(this.profileService.academicMetricLevelInfo.examPassed || 'O-Levels', [Validators.required]),
    school: new FormControl(this.profileService.academicMetricLevelInfo.school || '', [Validators.required]),
    board: new FormControl(this.profileService.academicMetricLevelInfo.board || 'Punjab', [Validators.required]),
    yearOfPassing: new FormControl(this.profileService.academicMetricLevelInfo.yearOfPassing || '', [Validators.required]),
    serialNo: new FormControl(this.profileService.academicMetricLevelInfo.serialNo || '', [Validators.required]),
    referenceNo: new FormControl(this.profileService.academicMetricLevelInfo.referenceNo || '', [Validators.required]),
    marksObtained: new FormControl(this.profileService.academicMetricLevelInfo.marksObtained || 0, [Validators.required, Validators.min(0)]),
    totalMarks: new FormControl(this.profileService.academicMetricLevelInfo.totalMarks || 0, [Validators.required, Validators.min(0)]),
  });

  acadmicInterInfoForm = new FormGroup({
    school: new FormControl(this.profileService.academicInterLevelInfo.school || '', [Validators.required]),
    board: new FormControl(this.profileService.academicInterLevelInfo.board || '', [Validators.required]),
    yearOfPassing: new FormControl(this.profileService.academicInterLevelInfo.yearOfPassing || '', [Validators.required]),
    rollNo: new FormControl(this.profileService.academicInterLevelInfo.rollNo || '', [Validators.required]),
    registrationNo: new FormControl(this.profileService.academicInterLevelInfo.registrationNo || '', [Validators.required]),
    marksObtained: new FormControl(this.profileService.academicInterLevelInfo.marksObtained || 0, [Validators.required]),
    totalMarks: new FormControl(this.profileService.academicInterLevelInfo.totalMarks || 0, [Validators.required]),
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
      this.snackBar.open('Please fill all required fields', 'Ok', { duration: 5000 });
    }
    const personalInfo = this.personalInfoForm.getRawValue();
    this.profileService.personalInfo = new PersonalInfo(personalInfo);

    this.profileService.saveUserPersonalInfo().then((response) => {

      this.stepperNext();
      this.personalInfoForm.reset();

    }).catch((error) => {

      this.snackBar.open('An error occured please try again', 'Ok', { duration: 5000 });

    });
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
      this.snackBar.open('Please fill all required fields', 'Ok', { duration: 5000 });
    }

    const formData = this.gardianInfoForm.getRawValue();
    this.profileService.guardianInfo = new GuardianInfo(formData);

    this.profileService.saveUserGuardianInfo().then((response) => {

      this.stepperNext();
      this.personalInfoForm.reset();

    }).catch((error) => {
      this.snackBar.open('An error occured please try again', 'Ok', { duration: 5000 });
    });
  }

  fromGuardianToAcdamic(): void {

    const formData = this.gardianInfoForm.getRawValue();
    this.profileService.guardianInfo = new GuardianInfo(formData);
    this.stepperNext();
  }

  saveAcadmicInfo(): void {

    if (this.acadmicMetricInfoForm.invalid || this.acadmicInterInfoForm.invalid) {
      return;
    }

    const metricInfoForm = this.acadmicMetricInfoForm.getRawValue();
    const interInfoForm = this.acadmicInterInfoForm.getRawValue();

    this.profileService.academicMetricLevelInfo = new AcademicMetricLevelInfo({ metricInfoForm });
    this.profileService.academicInterLevelInfo = new AcademicInterLevelInfo({ interInfoForm });

    this.profileService.saveUserAcademicInfo().then((response) => {
      this.stepperNext();
    }).catch((e) => {

      this.snackBar.open('An error occured please try again', 'Ok', { duration: 5000 });

    });

  }

  updateAcademicMetricLevelInfoFormValues(): void {

    this.acadmicMetricInfoForm.patchValue({

      examPassed: this.profileService.academicMetricLevelInfo.examPassed,
      school: this.profileService.academicMetricLevelInfo.school,
      board: this.profileService.academicMetricLevelInfo.board,
      yearOfPassing: this.profileService.academicMetricLevelInfo.yearOfPassing,
      serialNo: this.profileService.academicMetricLevelInfo.serialNo,
      referenceNo: this.profileService.academicMetricLevelInfo.referenceNo,
      marksObtained: Number(this.profileService.academicMetricLevelInfo.marksObtained),
      totalMarks: Number(this.profileService.academicMetricLevelInfo.totalMarks),
    });

  }

  updateAcademicInterLevelInfoFormValues(): void {

    this.acadmicInterInfoForm.patchValue({

      school: this.profileService.academicInterLevelInfo.school,
      board: this.profileService.academicInterLevelInfo.board,
      yearOfPassing: this.profileService.academicInterLevelInfo.yearOfPassing,
      rollNo: this.profileService.academicInterLevelInfo.rollNo,
      registrationNo: this.profileService.academicInterLevelInfo.registrationNo,
      marksObtained: Number(this.profileService.academicInterLevelInfo.marksObtained),
      totalMarks: Number(this.profileService.academicInterLevelInfo.totalMarks)

    });

  }

  submitPrefAndCommenceApplying(): void { }

}
