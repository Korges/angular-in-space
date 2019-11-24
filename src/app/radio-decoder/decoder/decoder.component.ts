import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DecoderService } from '../decoder.service';
import { DecoderResult } from '../decoder-result';

@Component({
  selector: 'app-decoder',
  templateUrl: './decoder.component.html',
  styleUrls: ['./decoder.component.css']
})
export class DecoderComponent implements OnInit, OnDestroy {
  completed = false;
  private subscription: Subscription;
  private validSound = new Audio('/assets/decoder-valid.mp3');
  private invalidSound = new Audio('/assets/decoder-invalid.mp3');

  constructor(private decoder: DecoderService) {}

  ngOnInit() {
    this.subscription = this.decoder.decoderResults
      .subscribe(this.onResult.bind(this));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private onResult(result: DecoderResult) {
    if (result.valid) {
      this.completed = true;
      this.validSound.play();
    } else {
      this.invalidSound.play();
    }
  }
}


