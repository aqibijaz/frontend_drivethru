import { Component, OnInit } from '@angular/core';
import { UniversityService } from 'src/app/services/university.service';

@Component({
  selector: 'app-widgets-layout',
  templateUrl: './widgets-layout.component.html',
  styleUrls: ['./widgets-layout.component.scss'],
})
export class WidgetsLayoutComponent implements OnInit {
  switch = "national"
  constructor(public service: UniversityService) {}

  ngOnInit(): void {
    this.service.counterySwitch.subscribe(data=>{
       this.switch = data
    })
  }
}
