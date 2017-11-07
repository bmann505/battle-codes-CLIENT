import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-finish-game',
  templateUrl: './finish-game.component.html',
  styleUrls: ['./finish-game.component.css']
})
export class FinishGameComponent implements OnInit {
  @Input() onFinishGame: () => void;
  constructor() { }

  ngOnInit() {}

}
