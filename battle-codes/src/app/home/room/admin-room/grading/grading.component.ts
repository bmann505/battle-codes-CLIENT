import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grading',
  templateUrl: './grading.component.html',
  styleUrls: ['./grading.component.css']
})
export class GradingComponent implements OnInit {
@Input() onStartNewRound: () => void;
  constructor() { }

  ngOnInit() {
  }

}
