import { Component, OnInit, Input } from '@angular/core';
import { questionsService } from 'app/questions.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

@Input() onSubmitQuestion: () => void;
  constructor(private questionsService: questionsService )  { }
  questions = this.questionsService.questions

  ngOnInit() {
    
  }
radioTest(question) {
  this.questionsService.selectedQuestion = question.question
}
}
