import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
import { IllnessDetailsComponent } from './illness-details/illness-details.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { TreatmentHistoryComponent } from './treatment-history/treatment-history.component';


@NgModule({
  declarations: [
    PatientComponent,
    IllnessDetailsComponent,
    PersonalDetailsComponent,
    TreatmentHistoryComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
