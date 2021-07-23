import { Component, OnInit } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
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
export class InformationformComponent implements OnInit {
  constructor() {}

  ngOnInit() {
  }



  stepperNext(stepper){
    stepper.next()
  }

  stepperPrevious(stepper){
    stepper.previous()
  }


  submitPersonalInfo(){
    
  }

  submitGardianInfo(){

  }

  submitAcadmic(){

  }

  submitPrefAndCommenceApplying(){

  }


}
