import { Component, OnInit, Input } from '@angular/core';
import { roomService } from 'app/room.service';
import { questionsService } from 'app/questions.service'
import * as io from 'socket.io-client'
@Component({
  selector: 'app-posted-question',
  templateUrl: './posted-question.component.html',
  styleUrls: ['./posted-question.component.css']
})
export class PostedQuestionComponent implements OnInit {
  room = this.roomService.room.name
  question="hi i am aquestion"

    socket=io('http://localhost:3000')
  constructor(private roomService: roomService) {


  }


  ngOnInit() {
    let data = {
    room: this.room,
    handle: "",
    message:"",
    question: ""
  }
  // console.log(data);
  this.socket.emit('room', data);

    this.socket.on('message', (data)=> {
  //  console.log(this.questionsService.questions);
   this.question=data.question
 })
}

}
