import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit{
 

//copied code of table from angular material icon

displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);


@ViewChild(MatPaginator) paginator: any;//paginatot type : any kodukka

ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
}



}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Cell Phone Accident Avoidance System While Driving', weight: '2 year', symbol: 'Hardware Engineer'},
  {position: 2, name: 'Datamining for Marketing Using Deeplearning', weight:'2 year' , symbol: 'Software Developer'},
  {position: 3, name: 'Online Coffe Shop', weight:'1 month' , symbol: 'Software Developer'},
  {position: 4, name: 'Online Travel Vlog ', weight:'1 1/2 month' , symbol: 'Software Developer'},
  {position: 5, name: 'Budget Calculator', weight: '1 month', symbol: 'Software Developer'},
  {position: 6, name: 'Contact App', weight: '2 month', symbol: 'Software Developer'},
  {position: 7, name: 'Userdashboard', weight: '1 week', symbol: 'Software Developer'},
  {position: 8, name: 'Bankapp', weight: '4 week', symbol: 'Software Developer'},
  {position: 9, name: 'Shahamath shahana', weight: 'MEARN', symbol: 'F'},
  {position: 10, name: 'Neon', weight: 'MEARN', symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 'MEARN', symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 'MEARN', symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 'MEARN', symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 'MEARN', symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight:'MEARN' , symbol: 'P'},
  {position: 16, name: 'Sulfur', weight:'MEARN' , symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 'MEARN', symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 'MEARN', symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 'MEARN', symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 'MEARN', symbol: 'Ca'},
];
