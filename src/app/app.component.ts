import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {
  title = "Wang";
  constructor(private router: Router) {
      }
      clickButton(path: string) {
        this.router.navigate([path]);
        }
        ngOnInit()
        {
          this.router.navigate(['welcome']);
        }
  }
