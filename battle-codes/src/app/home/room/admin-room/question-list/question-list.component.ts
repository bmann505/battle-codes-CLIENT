import { Component, OnInit, Input } from '@angular/core';
import { questionsService } from 'app/questions.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
questions
@Input() onSubmitQuestion: () => void;
  constructor(private questionsService: questionsService )  { }

 selectedQ
  ngOnInit() {
    fetch('https://rocky-castle-86279.herokuapp.com/questions')
    .then((data) => {
     return data.json()
   })
   .then(res => {
     console.log(res)
     this.questions = res;
    //  console.log(this.questionsService.questions)
    this.questionsService.questions= this.questions
  })
  }


radioTest(question) {
  this.selectedQ = question.question_title
}
}
