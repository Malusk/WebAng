import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-error-message',
  template: `
    <h1 mat-dialog-title>Error</h1>
    <div mat-dialog-content>
      {{ data }}
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Close</button>
    </div>
  `
})
export class ErrormessageComponent {
  public data: string;
  constructor() {
    this.data = "Invalid username or password";}
}
