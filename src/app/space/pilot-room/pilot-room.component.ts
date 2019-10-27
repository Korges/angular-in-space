import { Component, OnInit } from '@angular/core';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.css']
})
export class PilotRoomComponent implements OnInit {
  pilots: Pilot[] = [];
  selectedPilot: Pilot = null;

  ngOnInit() {
    this.pilots.push(new Pilot('Bruce Lee', '/assets/bruce-lee.jpg'));
    this.pilots.push(new Pilot('Karl Agathon'));
  }

  select(pilot: Pilot): void {
    this.selectedPilot = pilot;
  }

}
