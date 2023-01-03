import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FudPDFComponent } from './fud-pdf/fud-pdf.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat/';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ErrormessageComponent } from './errormessage/errormessage.component';
import { FormComponent } from './form/form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { VisualizedbComponent } from './visualizedb/visualizedb.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from './auth.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { UploadComponent } from './upload/upload.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { FilterPipe } from '../FilterPipe';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { FormSubmittedComponent } from './form-submitted/form-submitted.component';
@NgModule({
  declarations: [
    AppComponent,
    FudPDFComponent,
    ErrormessageComponent,
    FormComponent,
    VisualizedbComponent,
    UploadComponent,
    FilterPipe,
    ConfirmDialogComponent,
    FormSubmittedComponent,
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    NgxExtendedPdfViewerModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [AngularFirestore, AuthService],
  bootstrap: [AppComponent],
  exports: [
    RouterModule
  ]
})
export class AppModule { }
