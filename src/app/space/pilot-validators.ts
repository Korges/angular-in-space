import { FormControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Pilot } from './pilot';

export class PilotValidators {
  static pilotName(formControl: FormControl): ValidationErrors {
    return !formControl.value || /^[A-Z]/.test(formControl.value) ? null : {pilotName: true};
  }

  static pilotForbidden(formControl: FormControl): Observable<ValidationErrors> {
    if (!formControl.value) { return of(null); }
    return ajax.getJSON<Pilot[]>(`${environment.apiUrl}/forbidden-names?name=${formControl.value}`).pipe(
      map((pilots) => pilots.length > 0 ? {pilotForbidden: true} : null)
    );
  }
}
