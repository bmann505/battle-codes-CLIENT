import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-sign-in',
  templateUrl: './admin-sign-in.component.html',
  styleUrls: ['./admin-sign-in.component.css']
})
export class AdminSignInComponent implements OnInit {
@Input() onAdminSignUp: () => void;
@Input() onAdminSubmitSignIn: () => void;
@Input() onAdminSignInComponent: () => void;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm){
    const email = form.value.adminSignInEmail;
    const password = form.value.adminSignInPassword;
    this.authService.signinAdmin(email, password);
  }
}
