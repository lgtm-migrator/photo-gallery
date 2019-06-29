import { IApi } from '../interfaces/api.interface';
import { IPhoto } from '../interfaces/photo.interface';
import { PHOTOS } from '../constants/resourcesUrls';

export const api: IApi = {
  getPhotos: () => fetch(PHOTOS).then(response => response.json() as Promise<IPhoto[]>),
};
