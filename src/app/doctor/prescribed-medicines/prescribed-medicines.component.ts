import { Component, OnInit } from '@angular/core';
import { Medicine } from '../medicine.model'; // Assuming you have a Medicine model

@Component({
  selector: 'app-prescribed-medicines',
  templateUrl: './prescribed-medicines.component.html',
  styleUrls: ['./prescribed-medicines.component.css']
})
export class PrescribedMedicinesComponent implements OnInit {
  medicines: Medicine[] = [
    { name: 'Aspirin', dosage: '500mg', frequency: 'Twice a day' },
    { name: 'Amoxicillin', dosage: '250mg', frequency: 'Three times a day' },
    { name: 'Lisinopril', dosage: '10mg', frequency: 'Once a day' }
    // Add more mock data as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
