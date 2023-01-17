import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { MatDialog } from '@angular/material/dialog';
import { PDFSubmitComponent } from '../pdfsubmit/pdfsubmit.component';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  entry: any;
  pdfUrl = "/assets/Resume (3).pdf";
  constructor(private dataService: DataService, private storage: AngularFireStorage, private dialog: MatDialog) {
    this.entry = this.dataService.getData();

}
uploadPDF(event: any) {
  const file = event.target.files[0];
  const filePath = `pdfs/${file.name}`;
  const fileRef = this.storage.ref(filePath);
  const task = fileRef.put(file);

  task.then(() => {
    console.log('PDF uploaded successfully');
    this.dialog.open(PDFSubmitComponent);
  }).catch(error => {
    console.error(error);
  });
}
}

