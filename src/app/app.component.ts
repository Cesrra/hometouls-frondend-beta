import { Component, OnInit } from '@angular/core';
import { Employee } from './models/employee';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hometuls-beta';
  employees: Employee[] = [];

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    // this.employeeService.getAllEmployees()
    // .subscribe(data => {
    //   this.employees = data;
    // });
  }

}
