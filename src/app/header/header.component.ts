import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  ngOnInit(): void {
    
  }



//  menuIconClick() fun-> fun to generate an event
//object here is created to create an event
//using  that object event is generated, vaue will come in toogle , value will pass via method using  emit
//here toggle => generated event
//child to parent communication so  -> @Output() is required
//after that generated event(toggle) passed to app.component.html file




//userdefined Event   (what happens when btn click it's defined by user here)

@Output() toggle=new EventEmitter// EventEmitter class veenam user nn bevent generate chayyan   @Output()  child to parent  toggle enne object create chaydu...object creation  ...........object name=new classname.........btn click ll toggle varunna event nee
 
menuIconClick(){// event de  action  define in ts ,that present  in html (event aayittulladine ts define chaydu)

   this.toggle.emit()//toggle le nammal generate chayda event  nee appcomponet html file call chayyanam pass chyayyanm fo that method emit() is used
    

   //is a call back fun
   setTimeout(()=>{
   
   //to display chart in entire screen  set window.dispatchEvent
   
   window.dispatchEvent(
     new Event('resize')
     )
   },100)

 }


}
