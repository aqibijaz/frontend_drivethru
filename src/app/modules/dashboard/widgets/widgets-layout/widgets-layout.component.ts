import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-widgets-layout',
  templateUrl: './widgets-layout.component.html',
  styleUrls: ['./widgets-layout.component.scss']
})
export class WidgetsLayoutComponent implements OnInit {
  selectedUniversity = {};
  selectedPastPaper = {};

  profileForm = new FormGroup({
    field: new FormControl(''),
    department: new FormControl(''),
    location: new FormControl(''),
  });

  universities = [
    { id: 1, name: 'Punjab University' },
    { id: 2, name: 'UCP' },
    { id: 3, name: 'UMT' },
    { id: 4, name: 'Lams' },
    { id: 5, name: 'Nest' },
    { id: 6, name: 'Fast' },
    { id: 7, name: 'GIKI' },
  ];

  pastPapers = [
    { id: 1, name: 'PU' },
    { id: 2, name: 'UCP' },
    { id: 3, name: 'UMT' },
    { id: 4, name: 'Lams' },
    { id: 5, name: 'Nest' },
    { id: 6, name: 'Fast' },
    { id: 7, name: 'GIKI' },
  ];

  getUniversity() {
    console.log(this.selectedUniversity);
  }

  getPastPapers() {
    console.log(this.selectedPastPaper);
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
