import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient.component';
import { PatientService } from '../services/patient.service';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'patient', component: PatientComponent },
];

@NgModule({
  declarations: [PatientComponent],
  providers: [PatientService],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PatientModule { }
