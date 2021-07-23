import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { ProfileComponent } from './profile/profile.component';
import { GoalsAchievementsComponent } from './widgets/goals-achievements/goals-achievements.component';
import { CourseInProgressComponent } from './widgets/course-in-progress/course-in-progress.component';
import { SharingSpreeComponent } from './widgets/sharing-spree/sharing-spree.component';
import { WorkplacePersonalityComponent } from './widgets/workplace-personality/workplace-personality.component';
import { StudyRemindersComponent } from './widgets/study-reminders/study-reminders.component';
import { CompletedCoursesComponent } from './widgets/completed-courses/completed-courses.component';
import { MyCertificatesComponent } from './widgets/my-certificates/my-certificates.component';
import { RouterModule, Routes } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { WidgetsLayoutComponent } from './widgets/widgets-layout/widgets-layout.component';
import { AvatarModule } from 'ngx-avatar';
import { HttpClientModule } from '@angular/common/http';
import { MatRippleModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { InformationformComponent } from 'src/app/components/informationform/informationform.component';
import { MatStepperModule } from '@angular/material/stepper';
const routes: Routes = [
  { path: '', component: DashboardLayoutComponent },
  { path: 'form', component: InformationformComponent },
];
@NgModule({
  declarations: [
    DashboardLayoutComponent,
    ProfileComponent,
    GoalsAchievementsComponent,
    CourseInProgressComponent,
    SharingSpreeComponent,
    WorkplacePersonalityComponent,
    StudyRemindersComponent,
    CompletedCoursesComponent,
    MyCertificatesComponent,
    WidgetsLayoutComponent,
    InformationformComponent,
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
  ]
})
export class DashboardModule {}
