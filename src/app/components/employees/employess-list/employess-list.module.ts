import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Material Modules
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
// Components
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { EmployessListComponent } from './employess-list.component';

@NgModule({
  declarations: [
    EmployessListComponent,
    EmployeeFormComponent,
    EmployeeCardComponent,
  ],
  exports: [EmployessListComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
  ],
})
export class EmployessListModule {}
