import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

@Input() onSubmitQuestion: () => void;
  constructor() { }

  ngOnInit() {
  }

}
