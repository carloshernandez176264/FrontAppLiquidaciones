import { Component, OnInit } from '@angular/core';
import { Employees } from '../../interfaces/employee.interface';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent implements OnInit{

  employees:Employees[] = [];

  constructor(private employeeService: EmployeeService){}


  ngOnInit(): void {

    this.employeeService.getEmployees()
    .subscribe({
      next: employees => {
        console.log(employees);
        this.employees = employees;
      },
      //error: err => console.log(err)
    });
  }


}
