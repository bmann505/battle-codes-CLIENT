import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
adminSignIn = false;
adminSignUp = false;
  ngOnInit() {
  }

  onAdminSignIn() {
    this.adminSignIn = true;
    }

  onAdminSignUp() {
    this.adminSignUp = true;
    }

  }
