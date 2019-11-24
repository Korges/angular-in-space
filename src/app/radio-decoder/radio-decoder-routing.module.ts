import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DecoderComponent } from './decoder/decoder.component';

const routes: Routes = [
  { path: 'form', component: DecoderComponent },
  { path: '', redirectTo: 'form' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RadioDecoderRoutingModule { }
