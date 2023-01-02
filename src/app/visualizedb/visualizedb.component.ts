import { Component } from '@angular/core';
import firebase from 'firebase/compat/app'
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-visualizedb',
  templateUrl: './visualizedb.component.html',
  styleUrls: ['./visualizedb.component.css']
})

export class VisualizedbComponent{
  constructor(private router: Router, private dataService: DataService) {}
  messages : any[] = [];
  ngOnInit(){
  firebase.database().ref('form').once('value').then(snapshot => {
    snapshot.forEach(childSnapshot => {
      const item = childSnapshot.val();
      item.key = childSnapshot.key;
      this.messages.push(item);
    });
    console.log(this.messages);
 });}
 selectedEntry: any;

  selectEntry(entry: any) {
    this.selectedEntry = entry;
    console.log(this.selectedEntry.nombres);
    this.dataService.setData(entry);
    this.router.navigate(['pdf']);
  }
}
