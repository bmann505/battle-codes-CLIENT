import { EventEmitter } from '@angular/core';
import * as io from 'socket.io-client'
export class roomService {

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

    let socket
    socket = io('https://rocky-castle-86279.herokuapp.com/')
    let data = {
      room: room,
      handle: '',
      message: '',
      question: '',
      score: 0
    }
    socket.emit('room', data)
    // console.log(data)
  };

resRoom() {

  let socket = io('https://rocky-castle-86279.herokuapp.com/');
  socket.on('message',  (data) =>{
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
let socket = io('https://rocky-castle-86279.herokuapp.com/');
let data = {
  room: this.room.name,
  handle: '',
  message: '',
  question: question,
  score: 0
  }
  socket.emit('room', data)
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
     }
 }
 console.log(data)
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
