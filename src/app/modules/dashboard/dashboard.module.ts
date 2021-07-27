import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { WidgetsLayoutComponent } from './widgets/widgets-layout/widgets-layout.component';
import { AvatarModule } from 'ngx-avatar';
import { HttpClientModule } from '@angular/common/http';
import { MatRippleModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { InformationFormComponent } from 'src/app/modules/dashboard/informationform/informationform.component';
import { MatStepperModule } from '@angular/material/stepper';
import { ProfileService } from './profile/profile.service';
const routes: Routes = [
  { path: '', component: DashboardLayoutComponent },
  { path: 'form', component: InformationFormComponent },
];
@NgModule({
  declarations: [
    DashboardLayoutComponent,
    ProfileComponent,
    WidgetsLayoutComponent,
    InformationFormComponent,
  ],
  imports: [
    HttpClientModule,
    RouterModule.forChild(routes),
    CommonModule,
    MatSidenavModule,
    AvatarModule,
    MatRippleModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    MatStepperModule,
  ],
  providers: [
    ProfileService
  ]
})
export class DashboardModule { }
