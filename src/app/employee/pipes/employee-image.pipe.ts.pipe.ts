import { Pipe, PipeTransform } from '@angular/core';
import { Employees } from '../interfaces/employee.interface';

@Pipe({
  name: 'employeeImage'
})
export class EmployeeImagePipeTsPipe implements PipeTransform {

  transform(employee: Employees, ...args: unknown[]): string {
    if(employee.id && employee.photo) return 'assets/no-image.png';
    else if(employee.photo) return `assets/${employee.photo}`;
    else return `assets/${employee.id}.jpg `
  }

}
