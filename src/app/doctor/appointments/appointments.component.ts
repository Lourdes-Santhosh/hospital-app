import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment.model'; // Assuming you have an Appointment model

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  appointments: Appointment[] = [
    { patientName: 'Alice Smith', time: '10:00 AM', reason: 'Checkup' },
    { patientName: 'Bob Johnson', time: '11:30 AM', reason: 'Consultation' },
    { patientName: 'Carol Williams', time: '2:00 PM', reason: 'Follow-up' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
