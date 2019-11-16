import { Component } from '@angular/core';
import { PhotoService } from '../photo.service';
import { PhotoCredentials } from '../data-types';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent {
  constructor(private photoService: PhotoService) { }

  orderPhotos(crendetials: PhotoCredentials) {
    this.photoService.fetchPhotos(crendetials).subscribe({error: () => alert('Nie udało się pobrać zdjęć!')});
  }
}
