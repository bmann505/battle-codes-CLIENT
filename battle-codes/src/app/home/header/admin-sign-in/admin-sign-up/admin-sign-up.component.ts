import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-sign-up',
  templateUrl: './admin-sign-up.component.html',
  styleUrls: ['./admin-sign-up.component.css']
})
export class AdminSignUpComponent implements OnInit {
@Input() onAdminSignUp: () => void;
@Input() onAdminSubmitSignUp: () => void;
  constructor() { }

  ngOnInit() {
  }

  OnSignup(form: NgForm){
    const name = form.value.adminSignUpName;
    const email = form.value.adminSignUpEmail;
    const password = form.value.adminSignUpPassword;
  }

}
