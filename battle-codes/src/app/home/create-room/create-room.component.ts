import { Component, OnInit, Input} from '@angular/core';
import { roomService } from 'app/room.service';
@Component({

  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

// @Input() createNewRoom: () => {
//
// };
constructor(private roomService: roomService) {}
  ngOnInit() {
  }
createNewRoom(room){
  this.roomService.createNewRoom(room);
  this.roomService.roomCreated.emit(room);
}

// newRoomName = this.room
// console.log(this.newRoomName);
}
