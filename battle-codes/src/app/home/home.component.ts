import { Component, OnInit, Input } from '@angular/core';
import {AuthService } from 'app/auth.service'
// import * as io from 'socket.io-client'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newRoomName = '';
  adminSignIn = false;
  adminSignUp = false;
  teamSignIn = false;
  createRoom = false;
  aboutTrivia = false;
  // socket = null;
    constructor(private AuthService: AuthService) { }
    ngOnInit() {
    }

    onAdminSignIn() {
      this.adminSignIn = true;
      this.teamSignIn = false;
      this.createRoom = false;
      this.aboutTrivia = false;
      }

    onAdminSignUp() {
      this.adminSignUp = true;
      this.teamSignIn = false;
      this.createRoom = false;
      this.aboutTrivia = false;
      }

    onAdminSubmitSignIn(email, password) {
      if (email !== undefined || password !== undefined){
          this.createRoom = true;
      } else {
        this.createRoom = false;
      }
      this.aboutTrivia = false;
      this.adminSignIn = false;
      this.AuthService.signIn(email, password)
    }

    onAdminSubmitSignUp(name, email, password) {
      if (name !== undefined || email !== undefined || password !== undefined){
          this.createRoom = true;
      } else {
        this.createRoom = false;
      }
      this.aboutTrivia = false;
      this.adminSignIn = false;
      this.adminSignUp = false;
      this.AuthService.signUp(name , email , password)
    }

    onTeamSignIn() {
      this.teamSignIn = true;
      this.adminSignIn = false;
      this.adminSignUp = false;
      this.createRoom = false;
    }

    // createNewRoom(room) {
    //   this.newRoomName=room
    //   console.log(  this.newRoomName)
    //   this.socket = io('http://localhost:3000/')
    //   let data = {
    //     room: room,
    //     handle: '',
    //     message: ''
    //   }
    //   this.socket.emit('room', data)
    // }

  //  newRoomName (){
  //   console.log('passing from App')
  //  }
}
