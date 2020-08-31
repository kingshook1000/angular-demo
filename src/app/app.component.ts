import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  greetings = "Hello There";
  placeHolderText = "Enter your name";
  users = [
    {userId: 10, name: 'Jon'},
    {userId: 11, name: 'Steve'},
    {userId: 12, name: 'Bob'},
  ];
  todos = [
    {id: 1, content: "Buy milk"},
    {id: 2, content: "Buy Bread"},
  ];
  
  title = 'demo-angular';
  showMessage = true;
  myColor = 'red';
  readMe = () => {
    console.log('button clicked');
    this.title = "Changed Title to NOTHING";
  }
}
