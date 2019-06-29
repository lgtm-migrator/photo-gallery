import { IPhoto } from './photo.interface';

export interface IApi {
  getPhotos(): Promise<IPhoto[]>;
}
