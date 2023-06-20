import { Component } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  EmployeeObj: Employee[] = [
    {empId: 10011, empName: "John", dept: "Dev"},
    {empId: 10012, empName: "Rose", dept: "QA"},
    {empId: 10013, empName: "Vijay", dept: "Dev"},
    {empId: 10014, empName: "Vikram", dept: "IT"},
    {empId: 10015, empName: "Ram", dept: "Dev"},
  ]

  empId = 10001;
  empName = "John";
  dept = "Development";
  show1!: boolean;

  show() {
    console.log("Employee Id: " + this.empId);
    console.log("Employee name: " + this.empName);
    console.log("Employee department: " + this.dept);
  }
}
