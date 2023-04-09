import { SideNavComponent } from './components/side-nav/side-nav.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'school-app';
  sideNavStatus: boolean = false;
}