import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-selection',
  templateUrl: './doctor-selection.component.html',
  styleUrls: ['./doctor-selection.component.css']
})
export class DoctorSelectionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDoctorDetails() {
    this.router.navigate(['/doctor/details']);
  }

  goToAppointments() {
    this.router.navigate(['/doctor/appointments']);
  }

  goToPrescribedMedicines() {
    this.router.navigate(['/doctor/prescribed-medicines']);
  }
}
