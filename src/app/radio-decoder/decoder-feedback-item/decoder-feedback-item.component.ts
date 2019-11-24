import { Component, Input } from '@angular/core';
import { DecoderResult } from '../decoder-result';

@Component({
  selector: 'app-decoder-feedback-item',
  templateUrl: './decoder-feedback-item.component.html',
  styleUrls: ['./decoder-feedback-item.component.css']
})
export class DecoderFeedbackItemComponent {
  @Input() result: DecoderResult;
  @Input() index: number;
}
