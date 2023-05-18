import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EmployeesComponent } from './employees/employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { LeadEmployeeComponent } from './lead-employee/lead-employee.component';

const routes: Routes = [

//main content part laan content change chayyenddadd MainContentComponent ,  first  create 3 components create chayya dashboard,gallery,employees then set path
{
  //main page path
  path:'',component:MainContentComponent
},

{
  path:'gallery',component:GalleryComponent
},
{
  path:'employees',component:EmployeesComponent
},

{
  path:'add-employee',component:AddEmployeeComponent
},

{
  path:'lead-employee',component:LeadEmployeeComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
