import { Component, OnInit } from '@angular/core';
import { PatientPersonalDetails } from '../patient-personal-details.model'; // Assuming you have a PatientPersonalDetails model

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  patientPersonalDetails: PatientPersonalDetails = {
    name: 'Alice Smith',
    age: 35,
    gender: 'Female',
    contactNumber: '+1234567890',
    email: 'alice@example.com',
    address: '123 Main Street, City, Country'
  };

  constructor() { }

  ngOnInit(): void {
    // If you need to fetch personal details from a service, you can call the service method here
    // and assign the retrieved data to patientPersonalDetails property.
  }
}
