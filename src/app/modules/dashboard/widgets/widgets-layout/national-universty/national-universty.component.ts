import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UniversityService } from 'src/app/services/university.service';

@Component({
  selector: 'app-national-universty',
  templateUrl: './national-universty.component.html',
  styleUrls: ['./national-universty.component.scss'],
})
export class NationalUniverstyComponent implements OnInit {
  universities: any = [{id:1 , name: "comsats"}];
  departments: any = [{id:1 , name: "cs"}];
  locations: any = [{id:1 , name: "lahore"}];
  selectedUniversityRecord: any = [];

  selectUniversty: FormGroup;
  selectField: FormGroup;
  counsellingSession: FormGroup;

  constructor(private universityService: UniversityService) {
    this.selectUniversty = new FormGroup({
      universty: new FormControl(''),
    });

    this.selectField = new FormGroup({
      universty: new FormControl(''),
    });

    this.counsellingSession = new FormGroup({
      universty: new FormControl(''),
      department: new FormControl(''),
      location: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  selectUniverstySubmit() {
    console.log('select Universty submit data', this.selectUniversty.value);
  }

  selectFieldSubmit() {
    console.log('select Universty submit data', this.selectField.value);
  }

  selectCounsellingSessionSubmit() {
    console.log('select Universty submit data', this.counsellingSession.value);
  }

}
