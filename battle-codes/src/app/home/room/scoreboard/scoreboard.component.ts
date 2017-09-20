import { Component, OnInit } from '@angular/core';
import { roomService } from 'app/room.service';
import * as io from 'socket.io-client'
@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
    socket=io('http://localhost:3000')
  constructor(private roomService: roomService) { }
teams=this.roomService.teams
  ngOnInit() {


this.roomService.resDataFromTeam(this.socket)
  }



}
