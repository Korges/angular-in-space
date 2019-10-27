import { SpaceShip } from './space-ship';
import { Pilot } from './pilot';

export class FighterShip extends SpaceShip {

  constructor(pilot?: Pilot) {
    super('Me 262', '/assets/me-262.png', pilot);
  }
}
