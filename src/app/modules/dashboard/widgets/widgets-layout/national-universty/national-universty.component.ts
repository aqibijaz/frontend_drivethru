import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UniversityService } from 'src/app/services/university.service';

@Component({
  selector: 'app-national-universty',
  templateUrl: './national-universty.component.html',
  styleUrls: ['./national-universty.component.scss'],
})
export class NationalUniverstyComponent implements OnInit {
  selectedUniversityRecord: any = [];
  selectedFieldRecord: any = [];
  counsellingRecord: any = [];

  universities: any = [{ id: 1, name: 'comsats' }];
  departments: any = [{ id: 1, name: 'cs' }];
  locations: any = [{ id: 1, name: 'lahore' }];

  selectUniversty: FormGroup;
  selectField: FormGroup;
  counsellingSession: FormGroup;

  constructor(private universityService: UniversityService) {
    this.selectUniversty = new FormGroup({
      universty: new FormControl('', [Validators.required]),
    });

    this.selectField = new FormGroup({
      universty: new FormControl('', [Validators.required]),
    });

    this.counsellingSession = new FormGroup({
      universty: new FormControl('', [Validators.required]),
      department: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  selectUniverstySubmit() {
    if (this.selectUniversty.invalid) return;

    console.log('select Universty submit data', this.selectUniversty.value);
  }

  selectFieldSubmit() {
    if (this.selectField.invalid) return;

    console.log('select Universty submit data', this.selectField.value);
  }

  selectCounsellingSessionSubmit() {
    if (this.counsellingSession.invalid) return;

    console.log('select Universty submit data', this.counsellingSession.value);
  }

  scroll(id) {
    let el = document.getElementById(id);
    document.getElementById(id).style.background = 'red';
    setTimeout(() => {
      document.getElementById(id).style.background = '';
    }, 2000);
    el.scrollIntoView();
  }
}
