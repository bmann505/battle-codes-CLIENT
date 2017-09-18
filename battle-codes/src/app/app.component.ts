import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  roomName="hh"
 newRoomName (){
  console.log('passing from App')
 }
  ngOnInit() {
  }


  }
