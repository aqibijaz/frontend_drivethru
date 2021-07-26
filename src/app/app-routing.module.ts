import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './layout/body/body.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './auth/guard/auth.guard';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', component: BodyComponent },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
