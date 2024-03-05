import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title:string = 'Welcome 4BI1';
  color:string = '';



  alert(){
    alert('Hello ');
  }
}
