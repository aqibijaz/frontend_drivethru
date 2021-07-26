import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
    { path: '', component: SigninComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
];

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        MatSnackBarModule
    ],
    exports: [],
    declarations: [
        SigninComponent,
        SignupComponent,

    ],
    providers: [],
})
export class AuthModule { }
