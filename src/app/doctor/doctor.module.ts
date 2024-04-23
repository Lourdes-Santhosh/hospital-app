import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { PrescribedMedicinesComponent } from './prescribed-medicines/prescribed-medicines.component';


@NgModule({
  declarations: [
    DoctorComponent,
    DoctorDetailsComponent,
    AppointmentsComponent,
    PrescribedMedicinesComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
