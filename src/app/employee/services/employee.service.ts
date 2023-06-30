import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employees } from '../interfaces/employee.interface';
import { Observable, catchError, map, of } from 'rxjs';
import { Id } from '../interfaces/id.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private baseUrl: string = 'http://localhost:8081';



  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employees[]>{
    return this.http.get<Employees[]>(`${this.baseUrl}/employees`)
    .pipe(map(response => {
      console.log(response);
      return response;
    }));
  }

  getEmployeeById(id: number):Observable<Employees> {
    return this.http.get<Employees>(`${this.baseUrl}/employees/${id}`);
  }

  createEmployee(employee: Employees):Observable<Employees> {
    return this.http.post<Employees>(`${this.baseUrl}/employees`, employee);
  }

  updateEmployee(employee: Employees):Observable<Employees> {
    return this.http.put<Employees>(`${this.baseUrl}/employees/${employee.id}`, employee);
  }

  deleteEmployee(id: number):Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/employees/${id}`)
    .pipe(
      map(resp => true),
      catchError(err => of (false) )
      );

      }

      getSuggestions(query:string):Observable<Employees[]>{
        return this.http.get<Employees[]>(`${this.baseUrl}/employees/suggestions/${query}`);

      }

  }

