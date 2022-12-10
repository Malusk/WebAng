import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fud-pdf',
  templateUrl: './fud-pdf.component.html',
  styleUrls: ['./fud-pdf.component.css'],
})
export class FudPDFComponent {
  constructor(private router: Router) {
  }
  clickButton(path: string) {
    this.router.navigate([path]);
    }
}
