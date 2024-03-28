import { Component } from '@angular/core';
import { Iobject } from './shared/modules/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firstApp';
  skills: string[] = ["HTML", "CSS", "JAVASCRIPT", "TYPESCRIPT", "ANGULAR"]
  object: Array<Iobject> = [
    {
      fname: "Jhon",
      lname: "Doe",
      email: "jdoe@gmail.com",
      contact: 123123
    },
    {
      fname: "Rohan",
      lname: "Panchal",
      email: "rohanp@gmail.com",
      contact: 123234
    },
    {
      fname: "James",
      lname: "Bond",
      email: "jbond@gmail.com",
      contact: 123234
    },
    {
      fname: "Jun",
      lname: "Doe",
      email: "jdoe@gmail.com",
      contact: 12789
    }
  ]
}
