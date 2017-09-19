import { Component, OnInit, Input } from '@angular/core';
import { roomService } from 'app/room.service';
@Component({
  selector: 'app-room-header',
  templateUrl: './room-header.component.html',
  styleUrls: ['./room-header.component.css']
})
export class RoomHeaderComponent implements OnInit {
   room  =this.roomService.room.name

  constructor(private roomService: roomService) {

  }

  ngOnInit() {

  }

}
