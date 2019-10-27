import { Component, OnInit } from '@angular/core';
import { SpaceShip } from '../space-ship';
import { FighterShip } from '../fighter-ship';
import { JetBomberShip } from '../jet-bomber-ship';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css']
})
export class HangarComponent implements OnInit {

  spaceShips: SpaceShip[] = [];

  constructor() { }

  ngOnInit() {
      this.spaceShips.push(new FighterShip(new Pilot('Bruce Lee', '/assets/bruce-lee.jpg')));
      this.spaceShips.push(new JetBomberShip());
  }

}
