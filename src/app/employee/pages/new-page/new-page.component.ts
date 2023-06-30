import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap } from 'rxjs';
import { Employees } from '../../interfaces/employee.interface';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Id } from '../../interfaces/id.interface';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [],
})
export class NewPageComponent implements OnInit {
  employeeForm!: FormGroup;
  employee!: Employees;

  constructor(
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
    public fb: FormBuilder,

  ) {
    this.activatedRoute.params
    .pipe(switchMap(({ id }) => this.employeeService.getEmployeeById(id)))
    .subscribe({
      next: (employee) => {
        console.log(employee);
        this.employee = employee;
        this.employeeForm.patchValue({
          id:employee.id,
          name: employee.name,
          identification: employee.identification,
          salary: employee.salary,
          contractType: employee.contractType,
          contractStartDate: employee.contractStartDate,
          contractEndDate: employee.contractEndDate,
          role: employee.role,
          area: employee.area,
          photo: employee.photo,
        });
      }
    });
  }

  ngOnInit(): void {

    this.employeeForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      identification: new FormControl('', [Validators.required]),
      salary: new FormControl('', [Validators.required]),
      contractType: new FormControl('', [Validators.required]),
      contractStartDate: new FormControl('', [Validators.required]),
      contractEndDate: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required]),
      photo: new FormControl('', [Validators.required]),
    });

  }

  get currentEmployee(): Employees {
    const employee = this.employeeForm.value as Employees;
    return employee;
  }

  onSubmit(): void {
        this.employeeService.updateEmployee(this.employeeForm.value)
        .subscribe({
          next: () => {

            if(this.employeeForm.value.Id === this.employeeForm.value.id)
            {
              this.snackbar.open('Employee updated', 'Close', {
                duration: 3000,
              });

            }

            console.log('Employee updated');

          this.employeeForm.reset();
          }
        });


    // if (this.employeeForm.invalid) return;

    // if (this.employee.id) {
    //   this.employeeService
    //     .updateEmployee(this.currentEmployee)
    //     .subscribe((employee) => {
    //       this.router.navigateByUrl('/employee');
    //     });
    //   return;
    // }

    // this.employeeService
    //   .createEmployee(this.currentEmployee)
    //   .subscribe((employee) => {
    //     this.router.navigate(['/employee/edit', employee.id]);
    //   });
    }


  deleteEmployee(): void {
    this.employeeService.deleteEmployee(this.employee.id.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/employee');
      }
    })



    // if (!this.employee.id) throw Error('Employee is required');

    // const dialogRef = this.dialog.open(DialogComponent, {
    //   data: this.employeeForm,
    // });

    // dialogRef
    //   .afterClosed()
    //   .pipe(
    //     filter((result: boolean) => result),
    //     switchMap((id) =>
    //       this.employeeService.deleteEmployee(this.employee.id.value)
    //     ),
    //     filter((wasDelete: boolean) => wasDelete)
    //   )

    //   .subscribe((result) => {
    //     this.router.navigate(['/employees']);
    //   });
  }

  showSnackbar(message: string): void {
    this.snackbar.open(message, 'ok!', {
      duration: 2500,
    });
  }
}
