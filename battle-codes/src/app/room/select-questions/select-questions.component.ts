import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select-questions',
  templateUrl: './select-questions.component.html',
  styleUrls: ['./select-questions.component.css']
})
export class SelectQuestionsComponent implements OnInit {
  @Input() onSelectQuestion: () => void;
  constructor() { }

  ngOnInit() {
  }

}
