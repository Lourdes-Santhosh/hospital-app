import { Component, OnInit } from '@angular/core';
import { PatientIllness } from '../patinet-illness.model'; // Assuming you have a PatientIllness model

@Component({
  selector: 'app-illness-details',
  templateUrl: './illness-details.component.html',
  styleUrls: ['./illness-details.component.css']
})
export class IllnessDetailsComponent implements OnInit {
  patientIllness: PatientIllness = {
    name: 'Pneumonia',
    symptoms: 'Fever, cough, shortness of breath',
    diagnosis: 'Chest X-ray showed lung inflammation',
    treatment: 'Antibiotics, rest, and plenty of fluids'
  };

  constructor() { }

  ngOnInit(): void {
    // If you need to fetch illness details from a service, you can call the service method here
    // and assign the retrieved data to patientIllness property.
  }
}
