import { Component, OnInit } from '@angular/core';
import { DecoderService, KeyChars, KeyLength, KeyPattern } from '../decoder.service';

@Component({
  selector: 'app-decoder-form',
  templateUrl: './decoder-form.component.html',
  styleUrls: ['./decoder-form.component.css']
})
export class DecoderFormComponent implements OnInit {
  keyLength = KeyLength;
  keyChars = KeyChars.join(', ');
  keyPattern = KeyPattern;

  constructor(private decoder: DecoderService) { }

  ngOnInit() {
    this.decoder.encode();
  }

  decode(key: string) {
    this.decoder.decode(key);
  }
}
