import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RadioDecoderRoutingModule } from './radio-decoder-routing.module';
import { DecoderComponent } from './decoder/decoder.component';
import { DecoderFormComponent } from './decoder-form/decoder-form.component';
import { DecoderFeedbackListComponent } from './decoder-feedback-list/decoder-feedback-list.component';
import { NumberToArrayPipe } from './number-to-array.pipe';
import { DecoderLightComponent } from './decoder-light/decoder-light.component';
import { DecoderService } from './decoder.service';
import { DecoderFeedbackItemComponent } from './decoder-feedback-item/decoder-feedback-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RadioDecoderRoutingModule
  ],
  declarations: [
    DecoderComponent,
    DecoderFormComponent,
    DecoderFeedbackListComponent,
    NumberToArrayPipe,
    DecoderLightComponent,
    DecoderFeedbackItemComponent
  ],
  providers: [DecoderService]
})
export class RadioDecoderModule { }
