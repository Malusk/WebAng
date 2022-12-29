import { Component, NgModule } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatDialogConfig } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ErrormessageComponent } from '../errormessage/errormessage.component';
@Component({
  selector: 'app-fud-pdf',
  templateUrl: './fud-pdf.component.html',
  styleUrls: ['./fud-pdf.component.css'],
})

export class FudPDFComponent {
email: any;
password: any;
htmlStr: string = 'Plain Text Example &amp; <strong>Bold Text Example</strong>';
constructor(private afAuth: AngularFireAuth, private dialog: MatDialog) {}
login(email: string, password: string) {
  this.afAuth.signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log("dang");
    })
    .catch((error) => {
      this.showError(error);
    });
}
showError(message: string) {
  const config = new MatDialogConfig();
  config.data = { message };
  this.dialog.open(ErrormessageComponent, config);
}

}
