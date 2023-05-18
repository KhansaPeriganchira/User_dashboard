import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'userdashboard';

  //create a sidebar variable to hold true or  false  type boolean ,value set chayyam


sidebar:boolean=true

sidebarToggle(){//fun name defined in ts , to work toggle menu we required true or false ,   mode="side" [opened]="sidebar"
  
  this.sidebar = !this.sidebar //ie if we give sidebar true fun click time it will work opposite way !(not equal)implies  that 

} //mode="side" [opened]="true" evideek pass side bar mode="side" [opened]="sidebar"

}
