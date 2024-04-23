import { Component, OnInit } from '@angular/core';
import { Treatment } from '../treatment.moodel'; // Assuming you have a Treatment model

@Component({
  selector: 'app-treatment-history',
  templateUrl: './treatment-history.component.html',
  styleUrls: ['./treatment-history.component.css']
})
export class TreatmentHistoryComponent implements OnInit {
  treatmentHistory: Treatment[] = [
    { date: new Date('2022-01-01'), doctor: 'Dr. John Doe', illness: 'Pneumonia', medication: 'Antibiotics', notes: 'Patient responded well to treatment.' },
    { date: new Date('2022-02-15'), doctor: 'Dr. Jane Smith', illness: 'Influenza', medication: 'Tamiflu', notes: 'Patient experienced mild side effects.' },
    { date: new Date('2022-03-20'), doctor: 'Dr. Michael Johnson', illness: 'Sinusitis', medication: 'Decongestants', notes: 'Patient advised to rest and stay hydrated.' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
