import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FudPDFComponent } from './fud-pdf/fud-pdf.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: FudPDFComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ], exports: [RouterModule]
})
export class AppRoutingModule { }
