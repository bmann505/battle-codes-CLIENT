import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-sign-in',
  templateUrl: './admin-sign-in.component.html',
  styleUrls: ['./admin-sign-in.component.css']
})
export class AdminSignInComponent implements OnInit {
@Input() onAdminSignUp: () => void;
@Input() onAdminSubmitSignIn: () => void;
@Input() onAdminSignInComponent: () => void;
  constructor() { }

  ngOnInit() {
  }

}
