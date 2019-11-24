import { Injectable } from '@angular/core';
import { DecoderResult } from './decoder-result';
import { Subject } from 'rxjs';
import * as mastermind from 'numeric-mastermind-solver-js';

export const KeyLength = 4;
export const KeyChars = ['1', '2', '3', '4', '5', '6'];
export const KeyPattern = `[${KeyChars.join()}]{${KeyLength}}`;

@Injectable()
export class DecoderService {
  key: string;
  decoderResults = new Subject<DecoderResult>();

  constructor() { }

  encode() {
    const keyArray = [];
    for (let i = 0; i < KeyLength; i++) {
      const index = Math.round(Math.random() * KeyLength);
      keyArray.push(KeyChars[index]);
    }
    this.key = keyArray.join('');
  }

  decode(key: string) {
    const result = mastermind.matchPins(+key, +this.key);
    this.decoderResults.next({
      key: key,
      valid: result.green === KeyLength,
      correctPositionCount: result.green,
      correctOccurrenceCount: result.blue,
      incorrectCount: KeyLength - result.green - result.blue
    });
  }
}
