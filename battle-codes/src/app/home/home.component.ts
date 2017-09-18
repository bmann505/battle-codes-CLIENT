import { Component, OnInit, Input } from '@angular/core';
import * as io from 'socket.io-client'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
@Input() newRoomName: () => void;

  adminSignIn = false;
  adminSignUp = false;
  teamSignIn = false;
  createRoom = false;
  aboutTrivia = false;
  socket = null;

    ngOnInit() {
    }

    onAdminSignIn() {
      this.adminSignIn = true;
      this.teamSignIn = false;
      this.createRoom = false;
      }

    onAdminSignUp() {
      this.adminSignUp = true;
      this.teamSignIn = false;
      this.createRoom = false;
      }

    onAdminSubmitSignIn() {
      this.createRoom = true;
      this.aboutTrivia = true;
      this.adminSignIn = false;
    }

    onAdminSubmitSignUp() {
      this.createRoom = true;
      this.aboutTrivia = true;
      this.adminSignIn = false;
      this.adminSignUp = false;
    }

    onTeamSignIn() {
      this.teamSignIn = true;
      this.adminSignIn = false;
      this.adminSignUp = false;
      this.createRoom = false;
    }

    createNewRoom(room) {
      this.socket = io('http://localhost:3000/')
      let data = {
        room: room,
        handle: '',
        message: ''
      }
      this.socket.emit('room', data)
    }

}
