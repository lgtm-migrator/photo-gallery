import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { IApi } from '../interfaces/api.interface';
import { IPhoto } from '../interfaces/photo.interface';

export interface ISetPhotos {
  type: 'SET_PHOTOS';
  payload: IPhoto[];
}
export const getPhotosSuccess = (photos: IPhoto[]): ISetPhotos => {
  return { type: 'SET_PHOTOS', payload: photos };
};
export const getPhotos = (): ThunkAction<void, {}, IApi, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState, api) => {
    const photos = await api.getPhotos();
    return dispatch(getPhotosSuccess(photos));
  };
};
