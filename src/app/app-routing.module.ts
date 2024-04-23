import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DoctorSelectionComponent } from './doctor-selection/doctor-selection.component';
import { PatientSelectionComponent } from './patient-selection/patient-selection.component';

const routes: Routes = [{ path: '', component: HomeComponent },
{ path: 'doctor-selection', component: DoctorSelectionComponent },
{ path: 'patient-selection', component: PatientSelectionComponent },
{ path: 'doctor', loadChildren: () => import('./doctor/doctor.module').then(m => m.DoctorModule) },
 { path: 'patient', loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
