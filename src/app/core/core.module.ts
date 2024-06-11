import { NgModule } from '@angular/core';
import { AuthorityModule } from '../authority/authority.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../common/common.module';
import { HomeComponent } from './Components/home/home.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

export function playerFactory(): any {
  return import('lottie-web');
}



@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    AuthorityModule,
    LottieModule.forRoot({ player: playerFactory })
  ]
})
export class CoreModule { }
