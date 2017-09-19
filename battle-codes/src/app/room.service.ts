import { EventEmitter } from '@angular/core';
import * as io from 'socket.io-client'
export class roomService {


  room={
    name:''
  }

  createNewRoom(room) {
    // this.newRoomName=room
    // console.log(  this.newRoomName)
    let socket
    socket = io('http://localhost:3000/')
    let data = {
      room: room,
      handle: '',
      message: ''
    }
    socket.emit('room', data)
  };
  joinRoom(data) {
    let socket
      socket = io('http://localhost:3000/')
      socket.on('message',data)
      console.log('i am in room ',data.room)
  }

roomCreated(roomName) {
  this.room.name=roomName
}

}
