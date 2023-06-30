import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Employees } from '../../interfaces/employee.interface';
import { EmployeeService } from '../../services/employee.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Area } from '../../interfaces/area.interface';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: [
  ]
})
export class SearchPageComponent {


  public searchInput = new FormControl('');
  public employees: Employees[] = [];
  public selectedEmployee?:Employees;


  constructor(
    private employeeService: EmployeeService,
  ){}

  searchEmployee(){
    console.log(this.searchInput.value);

    this



    // const value:string = this.searchInput.value ||'';
    // this.employeeService.getSuggestions(value)
    // .subscribe(suggestions => this.employees = suggestions);
  }

  optionSelected(event: MatAutocompleteSelectedEvent){

    if(!event.option.value){
    this.selectedEmployee = undefined;
    return;
  }

    const employee: Employees = event.option.value;
    this.searchInput.setValue(employee.name.value);

    this.employeeService.getEmployeeById(employee.id.value)

   this.selectedEmployee = employee;
  }


}
