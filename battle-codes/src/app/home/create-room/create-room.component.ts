import { Component, OnInit, Input} from '@angular/core';

@Component({

  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {
room
@Input() createNewRoom: () => void;
@Input() newRoomName: () => void;
  constructor() { }

  ngOnInit() {
    // this.roomName=this.room

  }

}
