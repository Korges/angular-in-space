import { TestBed } from '@angular/core/testing';

import { PhotoBrowserService } from './photo.service';

describe('PhotoBrowserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhotoBrowserService = TestBed.get(PhotoBrowserService);
    expect(service).toBeTruthy();
  });
});
