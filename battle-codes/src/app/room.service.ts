import { EventEmitter } from '@angular/core';
import * as io from 'socket.io-client';

export class roomService {
 socket=io('https://rocky-castle-86279.herokuapp.com/');

  flag={
    stat:false
  }

  room={
    name:''
  }
  team={
    name:''
  }

  teams=[]

  createNewRoom(room) {
    let data = {
      room: room,
      handle: '',
      message: '',
      question: '',
      score: 0
    }
    this.socket.emit('room', data)
  };

  resRoom() {
    this.socket.on('message',  (data) =>{
      return data.message
    });
  }

  roomCreated(roomName) {
    this.room.name=roomName
  }
  teamCreated(teamName) {
    this.team.name=teamName
  }

  emitQuestions(question) {
    let data = {
      room: this.room.name,
      handle: '',
      message: '',
      question: question,
      score: 0
      }
    this.socket.emit('room', data)
  }


  resDataFromTeam(socket){
    let data = {
    room: this.room.name,
    handle: this.team.name,
    message:"",
    question: "",
    score :0
  }
  socket.emit('room', data);
  socket.on('message', (data)=> {
    if ( data.handle != "") {
  this.pushifNotExist(data,this.teams)
   }

  })

  }

  pushifNotExist(data, teams){
   var seen = false;
   for(var i = 0; i != teams.length; ++i) {
       if(teams[i].handle == data.handle) {
         seen = true;
         teams[i].message = data.message
       }
       if (teams[i].handle == data.handle && data.score !=0) {
             teams[i].score = data.score
             teams=teams.sort(function(a,b){
               return b.score - a.score
            })
       }
   }

  if(!seen && data.handle !== ""  && data.handle !== undefined ) teams.push(data)

   }

  submitTimer(socket, timerFlag){
    let data = {
    room: this.room.name,
    timerFlag:timerFlag
  }
  socket.emit('room', data);
  }
}
