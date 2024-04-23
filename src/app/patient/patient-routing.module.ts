import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient.component';
import { IllnessDetailsComponent } from './illness-details/illness-details.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { TreatmentHistoryComponent } from './treatment-history/treatment-history.component';

const routes: Routes = [
  { path: 'illness-details', component: IllnessDetailsComponent },
  { path: 'personal-details', component: PersonalDetailsComponent },
  { path: 'treatment-history', component: TreatmentHistoryComponent },
  { path: '', redirectTo: 'personal-details', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
