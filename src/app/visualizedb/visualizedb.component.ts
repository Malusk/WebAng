import { Component } from '@angular/core';
import firebase from 'firebase/compat/app'
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-visualizedb',
  templateUrl: './visualizedb.component.html',
  styleUrls: ['./visualizedb.component.css']
})
export class VisualizedbComponent{
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
}
