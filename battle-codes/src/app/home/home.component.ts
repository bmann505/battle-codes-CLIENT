import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  adminSignIn = false;
  adminSignUp = false;
  teamSignIn = false;
  createRoom = false;
  aboutTrivia = false;

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

    onAdminSubmitSignIn() {
      this.createRoom = true;
      this.aboutTrivia = false;
      this.adminSignIn = false;
    }

    onAdminSubmitSignUp() {
      this.createRoom = true;
      this.aboutTrivia = false;
      this.adminSignIn = false;
      this.adminSignUp = false;
    }

    onTeamSignIn() {
      this.teamSignIn = true;
      this.adminSignIn = false;
      this.adminSignUp = false;
      this.createRoom = false;
    }

}
