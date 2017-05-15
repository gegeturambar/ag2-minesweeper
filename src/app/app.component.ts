import { Component, OnInit } from '@angular/core';
import { MinesweeperComponent } from "./minesweeper/minesweeper.component";
import { createGame } from "./game";
import * as Immutable from 'immutable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public game;

  ngOnInit() {
    this.startNewGame();
  }

  startNewGame(){
    this.game = createGame({cols:3, rows: 3, mines: 4});
  }
}
