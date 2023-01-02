import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  entry: any;
  pdfUrl = "/assets/Resume (3).pdf";
  constructor(private dataService: DataService) {
    this.entry = this.dataService.getData();

  }
}
