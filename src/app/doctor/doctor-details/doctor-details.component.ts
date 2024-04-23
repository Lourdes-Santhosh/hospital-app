// doctor-details.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { Doctor } from '../doctor.model'; 

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
  @Input() doctor: Doctor = {
    name: 'Dr. John Doe',
    specialization: 'Cardiologist',
    location: 'Hospital Main Building, Room 301'
  };

  constructor() { }

  ngOnInit(): void {
  }
}
