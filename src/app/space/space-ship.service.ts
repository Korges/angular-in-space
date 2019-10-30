import { Injectable } from '@angular/core';
import { OrderFormValue } from './order-form-value';
import { interval, Observable } from 'rxjs';
import { SpaceShip } from './space-ship';
import { SpaceShipType } from './space-ship-type.enum';
import { FighterShip } from './fighter-ship';
import { JetBomberShip } from './jet-bomber-ship';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpaceShipService {
  static shipProductionTime = 2000;

  constructor() { }

  produceShips(formValues: OrderFormValue): Observable<SpaceShip> {
    const shipClass = formValues.shipType === SpaceShipType.Fighter ? FighterShip : JetBomberShip;
    return interval(SpaceShipService.shipProductionTime).pipe(
      map(() => new shipClass()),
      take(formValues.shipCount),
    );
  }
}
