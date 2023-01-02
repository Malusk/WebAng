import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FudPDFComponent } from './fud-pdf/fud-pdf.component';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { VisualizedbComponent } from './visualizedb/visualizedb.component';
import { AuthService } from './auth.service';
const routes: Routes = [
  { path: 'login', component: FudPDFComponent },
  { path: 'form', component: FormComponent},
  { path: 'fill', component: VisualizedbComponent, canActivate : [AuthService]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ], exports: [RouterModule]
})
export class AppRoutingModule { }
