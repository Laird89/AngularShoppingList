import { Component } from '@angular/core';
import { Student } from './myClasses/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment3_Laird_Chris';
  bio: Student = {
    sid: 99124798,
    sname: 'Chris Laird',
    scampus: 'Trafalgar',
    slogin: 'lairdch',
  };
}
