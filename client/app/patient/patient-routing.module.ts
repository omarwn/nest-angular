// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Services
import { AuthGuardLogin } from '../services/auth-guard-login.service';
import { AuthGuardAdmin } from '../services/auth-guard-admin.service';
import { PatientComponent } from './patient.component';
// Components


const routes: Routes = [
  { path: 'patient', component: PatientComponent, canActivate: [AuthGuardLogin]  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PatientRoutingModule {}
