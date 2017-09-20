import { EventEmitter } from '@angular/core';
import * as io from 'socket.io-client'
export class roomService {


  room={
    name:''
  }
  team={
    name:''
  }

  teams=[]

  createNewRoom(room) {

    let socket
    socket = io('http://localhost:3000/')
    let data = {
      room: room,
      handle: '',
      message: '',
      question: '',
      score: 0
    }
    socket.emit('room', data)
    console.log(data)
  };

resRoom() {

  let socket = io('http://localhost:3000/');
  socket.on('message',  (data) =>{

    console.log(data)
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
let socket = io('http://localhost:3000/');
let data = {
  room: this.room.name,
  handle: '',
  message: '',
  question: question,
  score: 0
  }
  socket.emit('room', data)
  console.log(data)
}


resDataFromTeam(socket){
  let data = {
  room: this.room.name,
  handle: this.team.name,
  message:"",
  question: "",
  score :0
}
console.log(data);
socket.emit('room', data);
  socket.on('message', (data)=> {
 console.log(data);
 if ( data.message != "") {
// this.teams.push(data)
this.pushifNotExist(data,this.teams)
 }

})

}

pushifNotExist(data,teams){
 console.log(teams)
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
 if(!seen) teams.push(data)

 }

}
