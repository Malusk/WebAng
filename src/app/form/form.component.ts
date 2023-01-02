import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { getDatabase, set, ref } from 'firebase/database';
import { getStorage, uploadBytesResumable } from "firebase/storage";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  states = ['Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche', 'Chiapas', 'Chihuahua', 'Coahuila', 'Colima', 'Durango', 'Guanajuato', 'Guerrero', 'Hidalgo', 'Jalisco', 'Mexico', 'Michoacan', 'Morelos', 'Nayarit', 'Nuevo Leon', 'Oaxaca', 'Puebla', 'Queretaro', 'Quintana Roo', 'San Luis Potosi', 'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatan', 'Zacatecas'];
  form: FormGroup;
  constructor(private afs: AngularFirestore, private fb: FormBuilder) {
    this.form = this.fb.group({
      nombres: new FormControl(''),
      primer_apellido: new FormControl(''),
      segundo_apellido: new FormControl(''),
      curp: new FormControl(''),
      Victima: new FormControl(''),
      fecha_nacimiento: new FormControl(''),
      sexo: new FormControl(''),
      nacionalidad: new FormControl(''),
      calle: new FormControl(''),
      delegacion: new FormControl(''),
      estado: new FormControl(''),
      zip: new FormControl(''),
      num_ext: new FormControl(''),
      num_int: new FormControl(''),
      colonia: new FormControl(''),
      phone: new FormControl('')
    });
    //this.messages = [];
    //firebase.initializeApp(environment);
  }
  onSubmit() {
    const formValues = this.form.value;
    const name = formValues.curp;
    firebase.database().ref(`form/${name}`).set(formValues);
  }
}