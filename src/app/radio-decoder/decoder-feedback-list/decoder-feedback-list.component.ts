import { Component } from '@angular/core';
import { DecoderResult } from '../decoder-result';
import { DecoderService } from '../decoder.service';
import { pluck, scan, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-decoder-feedback-list',
  templateUrl: './decoder-feedback-list.component.html',
  styleUrls: ['./decoder-feedback-list.component.css']
})
export class DecoderFeedbackListComponent {
  decoderResults: Observable<DecoderResult[]> = this.decoder.decoderResults
    .pipe(
      scan<DecoderResult, DecoderResult[]>((acc, current) => [current, ...acc], []),
      startWith([])
    );
  decoderResultsCount: Observable<number> = this.decoderResults
    .pipe(
      pluck<DecoderResult[], number>('length')
    );

  constructor(private decoder: DecoderService) { }
}
