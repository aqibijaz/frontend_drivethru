import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UniversityService } from 'src/app/services/university.service';


@Component({
  selector: 'app-widgets-layout',
  templateUrl: './widgets-layout.component.html',
  styleUrls: ['./widgets-layout.component.scss']
})
export class WidgetsLayoutComponent implements OnInit {
  selectedUniversity = {};
  selectedPastPaper = {};
  universities:any = [];

  profileForm = new FormGroup({
    field: new FormControl(''),
    department: new FormControl(''),
    location: new FormControl(''),
  });

  constructor(
    private universityService: UniversityService,
  ) { }

  ngOnInit(): void {
    this.universityService.getUniDepCity()
      .then((response) => {
        this.universities = response.data.universities;
      }).catch((excp) => {
        console.log('excp', excp)
      });
  }

  

  pastPapers = [
    { id: 1, name: 'PU' },
    { id: 2, name: 'UCP' },
    { id: 3, name: 'UMT' },
    { id: 4, name: 'Lams' },
    { id: 5, name: 'Nest' },
    { id: 6, name: 'Fast' },
    { id: 7, name: 'GIKI' },
  ];

  selectedUniversityRecord: any = []

  getUniversity() {
    console.log(this.selectedUniversity);
    if (typeof this.selectedUniversity !== 'object') {

      this.universityService.getUnvisity(this.selectedUniversity)
        .then((response) => {
          console.log('Iser uni => ', response)
          this.selectedUniversityRecord = response.data;
        }).catch((excp) => {
          console.log('excp', excp)
        });
    }
  }

  getPastPapers() {
    console.log(this.selectedPastPaper);
  }

  

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
