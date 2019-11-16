import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo, PhotoCredentials, PhotoResponse } from './data-types';
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  photos = new BehaviorSubject<Photo[]>([]);
  canLoadMore = this.photos.pipe(map((photos) => photos.length > 0));
  private queryParams = {
    user_id: 'xxxxxxxx@xxx',
    api_key: 'xxxxxxxxxxxxxxxxxxxxxxx',
    page: '1',
    per_page: '10',
    extras: 'url_l',
    method: 'flickr.people.getPhotos',
    format: 'json',
    nojsoncallback: '1'
  };

  constructor(private http: HttpClient) { }

  fetchPhotos(crendetials: PhotoCredentials): Observable<Photo[]> {
    this.queryParams.user_id = crendetials.userId;
    this.queryParams.api_key = crendetials.apiKey;
    return this.loadPhotos();
  }

  loadMore(): Observable<Photo[]> {
    this.queryParams.page = (parseInt(this.queryParams.page, 10) + 1).toString();
    return this.loadPhotos();
  }

  private loadPhotos(): Observable<Photo[]> {
    return this.http.get<PhotoResponse>('https://api.flickr.com/services/rest', {params: this.queryParams}).pipe(
      map((photoResponse) => photoResponse.photos.photo.filter((photo) => !!photo.url_l)),
      tap((photos) => this.photos.next([...this.photos.getValue(), ...photos]))
    );
  }
}
