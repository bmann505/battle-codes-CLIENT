import { Component, OnInit, Input } from '@angular/core';
import { questionsService } from 'app/questions.service';
@Component({
  selector: 'app-select-questions',
  templateUrl: './select-questions.component.html',
  styleUrls: ['./select-questions.component.css']
})
export class SelectQuestionsComponent implements OnInit {
  @Input() onSelectQuestion: () => void;
  questions
  constructor(private questionsService: questionsService) { }

  ngOnInit() {
    console.log(this.questionsService.questions.length)
    if (this.questionsService.questions.length !== 0 ) {
      this.questions = this.questionsService.questions
    }

  }

}
