import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  employeeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    position: new FormControl('', Validators.required),
    vacationsDaysUsed: new FormControl(0, Validators.required),
  });

  ngOnInit(): void {
    console.log('this.data: ', this.data);
  }
}
