import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { partition } from "../util";
import { revealTile,isGameOver } from "../game";
import { RowComponent } from "../row/row.component";
import * as Immutable from 'immutable';

@Component({
  selector: 'minesweeper',
  templateUrl: './minesweeper.component.html',
  styleUrls: ['./minesweeper.component.css']
})
export class MinesweeperComponent implements OnInit, OnChanges {

  @Input() game: any;
  rows;
  history = Immutable.List();

  constructor() { }

  ngOnInit() {
    console.log('here i am and game is '+this.game);
  }

  handleTileClick(tile){
    if(!tile){
      return;
    }
    if(isGameOver(this.game)){
      return;
    }
    const newGame = revealTile(this.game, tile.get('id'));
    if(newGame !== this.game){
      this.game = newGame;
      this.updateGame();
    }

    if(isGameOver(this.game)){
      window.alert('GAME OVER !');
    }
  }

  ngOnChanges(changes){
    if(changes.hasOwnProperty('game')){
      this.updateGame();
    }
  }

  updateGame(updateHistory=true){
    console.log('before part rows => '+this.rows);
    this.rows = partition(this.game.get('cols'), this.game.get('tiles'));
    console.log('after part rows => '+this.rows);
    if(updateHistory){
      this.history = this.history.push(this.game);
    }
  }

  undo(){
    if(this.canUndo()){
      this.history = this.history.pop();
      this.game = this.history.last();
      this.updateGame(false);
    }
  }

  canUndo(){
    return this.history.size > 1;
  }

}
