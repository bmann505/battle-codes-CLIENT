import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from 'app/auth.service';



@Component({
  selector: 'app-admin-sign-up',
  templateUrl: './admin-sign-up.component.html',
  styleUrls: ['./admin-sign-up.component.css']
})
export class AdminSignUpComponent implements OnInit {
@Input() onAdminSignUp: () => void;
@Input() onAdminSubmitSignUp: () => void;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }


}
