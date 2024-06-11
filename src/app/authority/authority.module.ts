import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../common/common.module';
import { LoginComponent } from './Components/login/login.component';
import { InputComponent } from '../common/Components/input/input.component';
import { SignupComponent } from './Components/signup/signup.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class AuthorityModule { }
