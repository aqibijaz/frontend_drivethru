import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UniversityService } from 'src/app/services/university.service';

@Component({
  selector: 'app-international-universty',
  templateUrl: './international-universty.component.html',
  styleUrls: ['./international-universty.component.scss'],
})

export class InternationalUniverstyComponent implements OnInit {
  selectedUniversityRecord: any = [];
  findedUniversityRecord: any = [];
  counsellingRecord: any = [];
  email = null;
  universities: any = [];
  departments: any = [];
  locations: any = [];
  selectUniversty: FormGroup;
  findUniversity: FormGroup;
  counsellingSession: FormGroup;

  constructor(
    private universityService: UniversityService,
    private snackBar: MatSnackBar
  ) {
    this.selectUniversty = new FormGroup({
      universty: new FormControl('', [Validators.required]),
    });

    this.findUniversity = new FormGroup({
      universty: new FormControl('', [Validators.required]),
      department: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
    });

    this.counsellingSession = new FormGroup({
      wantHelp: new FormControl('', [Validators.required]),
      reason: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.universityService.getUniDepCity().then((data) => {
      if (data) {
        this.universities = data.data.universities;
        this.departments = data.data.departments;
        this.locations = data.data.cities;
      }
    });

    this.selectUniversty.get('universty').valueChanges.subscribe((el) => {
      this.selectUniverstySubmit(el);
    });

    this.universityService.getUser().then((data) => {
      this.email = data.data.email;
    });
  }

  scroll(id) {
    let el = document.getElementById(id);
    document.getElementById(id).style.background = 'red';
    setTimeout(() => {
      document.getElementById(id).style.background = '';
    }, 2000);
    el.scrollIntoView();
  }

  selectUniverstySubmit(data) {
    if (!data) this.selectedUniversityRecord = [];
    console.log('select Universty submit data', data);
    this.universityService
      .getUnvisity(data)
      .then((data) => {
        if (data) {
          this.selectedUniversityRecord = data.data;
        }
      })
      .catch((response) => {
        this.snackBar.open("Record Not Found", 'Ok', {
          duration: 5000,
        });
      });
  }

  findUniversitySubmit() {
    if (this.findUniversity.invalid) { return; }
    console.log('select Universty submit data', this.findUniversity.value);
  }

  selectCounsellingSessionSubmit() {
    if (this.counsellingSession.invalid) return;
    this.counsellingSession.value.email = this.email;

    this.universityService
      .postCounsellingSession(this.counsellingSession.value)
      .then((data) => {
        this.snackBar.open("Counselling Session Sumbit Successfully", 'Ok', {
          duration: 5000,
        });
        this.counsellingSession.reset();
      })
      .catch((response) => {
        this.snackBar.open(response.error.message, 'Ok', {
          duration: 5000,
        });
      });
  }
}
