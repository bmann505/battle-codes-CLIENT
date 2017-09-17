import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
adminSignIn = false;
adminSignUp = false;
teamSignIn = false;

  ngOnInit() {
  }

  onAdminSignIn() {
    this.adminSignIn = true;
    this.teamSignIn = false;
    }

  onAdminSignUp() {
    this.adminSignUp = true;
    this.teamSignIn = false;
    }

  onTeamSignIn() {
    this.teamSignIn = true;
    this.adminSignIn = false;
    this.adminSignUp = false;
  }

  }
