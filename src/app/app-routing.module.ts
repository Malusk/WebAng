import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FudPDFComponent } from './fud-pdf/fud-pdf.component';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { VisualizedbComponent } from './visualizedb/visualizedb.component';
import { AuthService } from './auth.service';
import { UploadComponent } from './upload/upload.component';
import { WelcomeComponent } from './welcome/welcome.component';
const routes: Routes = [
  { path: 'login', component: FudPDFComponent },
  { path: 'form', component: FormComponent},
  { path: 'fill', component: VisualizedbComponent, canActivate : [AuthService]},
  { path : 'pdf', component: UploadComponent},
  { path : 'welcome', component: WelcomeComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ], exports: [RouterModule]
})
export class AppRoutingModule { }
