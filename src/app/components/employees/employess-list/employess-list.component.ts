import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employess-list',
  templateUrl: './employess-list.component.html',
  styleUrls: ['./employess-list.component.css'],
})
export class EmployessListComponent implements OnInit {
  constructor(private dialog: MatDialog) {}
  employees: Employee[] = [];

  ngOnInit(): void {
    console.log('mounted');
  }

  openEmployeeFormDialog() {
    console.log('openEmployeeFormDialog');
    const dialogRef = this.dialog.open(EmployeeFormComponent, {
      width: '50vw',
      data: 'hello',
    });

    dialogRef.afterClosed().subscribe((formValue) => {
      const { employee } = formValue;
      const newEmployee = new Employee(employee);
      this.employees.push(newEmployee);
    });
  }
}
