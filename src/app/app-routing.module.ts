import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authority/Components/login/login.component';
import { SignupComponent } from './authority/Components/signup/signup.component';
import { HomeComponent } from './core/Components/home/home.component';
import { DashboardComponent } from './core/Components/dashboard/dashboard.component';

const routes: Routes = [
  {path: '',redirectTo: 'home',pathMatch: 'full'},
  {path: 'login',component: LoginComponent},
  {path: 'signup',component: SignupComponent},
  {path: 'home',component: HomeComponent},
  {path: 'dashboard',component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
