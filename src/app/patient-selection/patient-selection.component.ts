import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-selection',
  templateUrl: './patient-selection.component.html',
  styleUrls: ['./patient-selection.component.css']
})
export class PatientSelectionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToIllnessDetails() {
    this.router.navigate(['/patient/illness-details']);
  }

  goToPersonalDetails() {
    this.router.navigate(['/patient/personal-details']);
  }

  goToTreatmentHistory() {
    this.router.navigate(['/patient/treatment-history']);
  }
}
