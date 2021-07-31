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
      comment: new FormControl('', [Validators.required]),
      reason: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.selectUniversty.get('universty').valueChanges.subscribe((el) => {
      this.selectUniverstySubmit(el);
    });
  }

  selectUniverstySubmit(data) {
    console.log('select Universty submit data', data);
    // this.universityService.getUnvisity(data).then(data=>{
    //   console.log(data)
    // })
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
