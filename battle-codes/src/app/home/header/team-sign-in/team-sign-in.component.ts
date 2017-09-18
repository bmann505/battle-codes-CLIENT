import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-sign-in',
  templateUrl: './team-sign-in.component.html',
  styleUrls: ['./team-sign-in.component.css']
})
export class TeamSignInComponent implements OnInit {
@Input() onTeamSignIn: () => void;
  constructor() { }

  ngOnInit() {
  }

}
