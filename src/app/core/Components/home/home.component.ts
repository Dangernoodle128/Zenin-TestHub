import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  banner: AnimationOptions = {
    path: '/assets/homeUI.json'
  };
  section2: AnimationOptions = {
    path: '/assets/section2.json'
  };
  section3: AnimationOptions = {
    path: '/assets/section3.json'
  };
  section4: AnimationOptions = {
    path: '/assets/section4.json'
  };

  
}
