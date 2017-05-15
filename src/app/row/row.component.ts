import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TileComponent } from "../tile/tile.component";

@Component({
  selector: 'row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  @Input() row: any;
  @Output() tileClick: EventEmitter<TileComponent> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleTileClick(tile){
    console.log('clic');
    this.tileClick.next(tile);
    //this.tileClick.emit(tile);
  }
}
