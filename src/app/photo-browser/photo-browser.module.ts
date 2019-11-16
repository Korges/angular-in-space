import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoBrowserRoutingModule } from './photo-browser-routing.module';
import { PhotoBrowserComponent } from './photo-browser/photo-browser.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PhotoBrowserComponent, PhotoFormComponent, PhotoListComponent],
  imports: [
    CommonModule,
    PhotoBrowserRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class PhotoBrowserModule { }
