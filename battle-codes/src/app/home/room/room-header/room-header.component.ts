import { Component, OnInit, Input } from '@angular/core';
import { roomService } from 'app/room.service';
@Component({
  selector: 'app-room-header',
  templateUrl: './room-header.component.html',
  styleUrls: ['./room-header.component.css']
})
export class RoomHeaderComponent implements OnInit {
   room  ="nn"

  constructor(private roomService: roomService) {
    this.roomService.roomCreated.subscribe(
    (status) => {
       this.room=status

  
    }
);

  }


  ngOnInit() {
    setTimeout(() => {
      this.room = "gggggg";
    }, 3000);

  }

}
