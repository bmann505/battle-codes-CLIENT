import { EventEmitter } from '@angular/core';
// import * as io from 'socket.io-client'
export class roomService {

  createNewRoom(room) {
    // this.newRoomName=room
    // console.log(  this.newRoomName)
    let socket
    // socket = io('http://localhost:3000/')
    let data = {
      room: room,
      handle: '',
      message: ''
    }
    socket.emit('room', data)
  }


roomCreated = new EventEmitter<string>();

}
