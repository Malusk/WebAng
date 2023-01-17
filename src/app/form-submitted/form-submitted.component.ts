import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
@Component({
  selector: 'app-form-submitted',
  templateUrl: './form-submitted.component.html',
  styleUrls: ['./form-submitted.component.css']
})
export class FormSubmittedComponent {
  searchTerm : any;
  newAppointmentKey = Math.random().toString(36).slice(2);
  ngOnInit(){
  const newAppointment = {
    date: '2022-12-01',
    time: '13:00',
    location: 'New York',
    userId: this.newAppointmentKey
  };
  firebase.database().ref('appointments').push().set(newAppointment);
}
}
