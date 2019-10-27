import { Component, OnInit, ViewChild } from '@angular/core';
import { SpaceShip } from '../space-ship';
import { FighterShip } from '../fighter-ship';
import { JetBomberShip } from '../jet-bomber-ship';
import { Pilot } from '../pilot';
import { PilotRoomComponent } from '../pilot-room/pilot-room.component';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css']
})
export class HangarComponent implements OnInit {
  @ViewChild(PilotRoomComponent, {static: false}) pilotRoom: PilotRoomComponent;
  spaceShips: SpaceShip[] = [];
  selectedPilot: Pilot = null;

  constructor() { }

  ngOnInit() {
      this.spaceShips.push(new FighterShip());
      this.spaceShips.push(new JetBomberShip());
  }

  assignPilot(spaceShip: SpaceShip): void {
    spaceShip.pilot = this.selectedPilot;
    this.pilotRoom.pilotLeave();
  }

  deassignPilot(spaceShip: SpaceShip): void {
    this.pilotRoom.pilotReturn(spaceShip.pilot);
    spaceShip.pilot = null;
  }

}
