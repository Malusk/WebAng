import { Component, NgModule } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-fud-pdf',
  templateUrl: './fud-pdf.component.html',
  styleUrls: ['./fud-pdf.component.css'],
})

export class FudPDFComponent {
email: any;
password: any;
htmlStr: string = 'Plain Text Example &amp; <strong>Bold Text Example</strong>';
constructor(private afAuth: AngularFireAuth) {}
login(email: string, password: string) {
  this.afAuth.signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log("yay");
    })
    .catch((error) => {
      console.error(error);
    });
}
}
