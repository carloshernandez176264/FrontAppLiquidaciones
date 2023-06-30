import { Component, OnInit } from '@angular/core';
import { Employees } from '../../interfaces/employee.interface';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styles: [
  ]
})
export class EmployeePageComponent implements OnInit {

  public employee!: Employees  ;

  constructor(
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
     ){}


  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.employeeService.getEmployeeById(id)),
    ).subscribe({
      next: (employee) => {
        console.log("Aqui estoy");
        return this.router.navigate(['/employee']);
    }



    })

    // .subscribe({
    //   next: employees => {
    //     console.log(employees);
    //     this.employees = employees;
    //   },

  //   .subscribe(employee =>{
  //     if(employee) return this.router.navigate(['/employee']);
  //     this.employee = employee;
  //     console.log(this.employee);
  //     return;
  //   })
   }

  goBack():void{
    this.router.navigateByUrl('/employee/list');
  }

}
