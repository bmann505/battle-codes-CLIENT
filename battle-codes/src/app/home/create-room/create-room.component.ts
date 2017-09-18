import { Component, OnInit, Input} from '@angular/core';

@Component({

  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {
room
@Input() createNewRoom: () => void;
@Input() newRoomName;
  constructor() { }

  ngOnInit() {
    // this.newRoomName = this.room;
console.log(this.newRoomName);

  }
// newRoomName = this.room
// console.log(this.newRoomName);
}
