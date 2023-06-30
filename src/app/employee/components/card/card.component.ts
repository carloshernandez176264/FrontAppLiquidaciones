import { Component, Input, OnInit } from '@angular/core';
import { Employees } from '../../interfaces/employee.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {

  @Input() public employee!: Employees;
//@Input() public employee!: Employees ;

  ngOnInit(): void {
   // if (!this.employee) throw Error('Employee is required');
  }

}
