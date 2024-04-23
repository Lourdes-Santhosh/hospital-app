import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './doctor.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { PrescribedMedicinesComponent } from './prescribed-medicines/prescribed-medicines.component';

// const routes: Routes = [{ path: '', component: DoctorComponent }];
const routes: Routes = [
  { path: 'doctor-details', component: DoctorDetailsComponent },
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'prescribed-medicines', component: PrescribedMedicinesComponent },
  { path: '', redirectTo: 'details', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
