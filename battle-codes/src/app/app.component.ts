import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyB3G5bmscNmWf-HhChNOCs7ia8v95mpXuc",
      authDomain: "battle-code-royale.firebaseapp.com"
    })
  }


  }
