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

  priceRanges = [
    {
      display: '10000-50000',
      value: {
        low: 10,
        high: 50
      }
    },
    {
      display: '50000-100000',
      value: {
        low: 50,
        high: 100
      }
    },
    {
      display: '100000-200000',
      value: {
        low: 100,
        high: 200
      }
    },
    {
      display: '200000-300000',
      value: {
        low: 200,
        high: 300
      }
    },
    {
      display: '300000-400000',
      value: {
        low: 300,
        high: 400
      }
    },
    {
      display: '400000-500000',
      value: {
        low: 400,
        high: 500
      }
    },
    {
      display: '500000-800000',
      value: {
        low: 500,
        high: 800
      }
    },
    {
      display: '800000-1100000',
      value: {
        low: 800,
        high: 1100
      }
    },
    // {
    //   display: '1100000-1500000',
    //   value: {
    //     low: 1100,
    //     high: 1500
    //   }
    // },
    // {
    //   display: '1500000-2500000',
    //   value: {
    //     low: 1500,
    //     high: 2500
    //   }
    // },
    // {
    //   display: '2500000-3500000',
    //   value: {
    //     low: 2500,
    //     high: 3500
    //   }
    // },
  ];

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
      priceRange: new FormControl('', [Validators.required]),
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

    // this.findUniversity.get('location').valueChanges.subscribe(() => {

    //   if (this.findUniversity.get('location').value !== null && this.findUniversity.get('location').value !== '' && this.findUniversity.get('location').value !== undefined) {

    //     this.findUniversity.get('department').clearValidators();
    //     this.findUniversity.get('priceRange').clearValidators();

    //   } else {

    //     this.findUniversity.get('department').setValidators([Validators.required]);
    //     this.findUniversity.get('priceRange').setValidators([Validators.required]);
    //   }

    //   this.findUniversity.get('department').updateValueAndValidity();
    //   this.findUniversity.get('priceRange').updateValueAndValidity();;


    // });
    // this.findUniversity.get('department').valueChanges.subscribe(() => {

    //   if (this.findUniversity.get('department').value !== null && this.findUniversity.get('department').value !== '' && this.findUniversity.get('department').value !== undefined) {

    //     this.findUniversity.get('location').clearValidators();
    //     this.findUniversity.get('priceRange').clearValidators();

    //   } else {

    //     this.findUniversity.get('location').setValidators([Validators.required]);
    //     this.findUniversity.get('priceRange').setValidators([Validators.required]);
    //   }

    //   this.findUniversity.get('location').updateValueAndValidity();
    //   this.findUniversity.get('priceRange').updateValueAndValidity();

    // });

    // this.findUniversity.get('priceRange').valueChanges.subscribe(() => {

    //   if (this.findUniversity.get('priceRange').value !== null && this.findUniversity.get('priceRange').value !== '' && this.findUniversity.get('priceRange').value !== undefined) {

    //     this.findUniversity.get('department').clearValidators();
    //     this.findUniversity.get('location').clearValidators();

    //   } else {

    //     this.findUniversity.get('department').setValidators([Validators.required]);
    //     this.findUniversity.get('location').setValidators([Validators.required]);

    //   }

    //   this.findUniversity.get('department').updateValueAndValidity();
    //   this.findUniversity.get('location').updateValueAndValidity();

    // });

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

  findUniOnRange(): void {
    this.universityService.findUniOnRange(this.createParams());
  }

  createParams(): string {
    let params = '';

    const data = this.findUniversity.getRawValue();

    if (data.department && data.department !== null && data.department !== undefined && data.department !== '') {
      params = params + 'department=' + data.department;
    }

    if (data.location && data.location !== null && data.location !== undefined && data.location !== '') {
      params = params + '&city=' + data.location;
    }

    // if (data.location && data.location !== null && data.location !== undefined && data.location !== '') {
    //   params = params + '&city=' + data.location;
    // }

    if (data.priceRange.low && data.priceRange.low && data.priceRange.low !== null && data.priceRange.low !== undefined && data.priceRange.low !== '') {
      params = params + '&low=' + data.priceRange.low;
    }

    if (data.priceRange.high && data.priceRange.high && data.priceRange.high !== null && data.priceRange.high !== undefined && data.priceRange.high !== '') {
      params = params + '&high=' + data.priceRange.high;
    }

    return params;
  }

}
