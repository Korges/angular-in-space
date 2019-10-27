import { SpaceShip } from './space-ship';
import { Pilot } from './pilot';

export class JetBomberShip extends SpaceShip {

  constructor(pilot?: Pilot) {
    super('Arado', '/assets/Ar-234.png', pilot);
  }
}
