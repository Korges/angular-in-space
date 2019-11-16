import { Component } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent {
  photos = this.photoService.photos;
  canLoadMore = this.photoService.canLoadMore;

  constructor(private photoService: PhotoService) { }

  loadMore() {
    this.photoService.loadMore().subscribe({error: () => alert('Nie udało się pobrać zdjęć!')});
  }

}
