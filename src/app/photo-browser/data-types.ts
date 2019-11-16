export interface PhotoResponse {
  photos: {
    photo: Photo[]
  };
}

export interface Photo {
  title: string;
  url_l: string;
}

export interface PhotoCredentials {
  apiKey: string;
  userId: string;
}
