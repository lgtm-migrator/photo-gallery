import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { IPhoto } from '../../interfaces/photo.interface';
import { IApi } from '../../interfaces/api.interface';

export const SET_PHOTOS = 'SET_PHOTOS';
export interface ISetPhotos {
  type: 'SET_PHOTOS';
  payload: IPhoto[];
}
export interface IGetPhotos {
  type: 'GET_PHOTOS';
}
export type Action = ISetPhotos | IGetPhotos;

export const getPhotosSuccess = (photos: IPhoto[]): ISetPhotos => {
  return { type: SET_PHOTOS, payload: photos };
};
export const getPhotos = (): ThunkAction<void, {}, IApi, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState, api) => {
    const photos = await api.getPhotos();
    return dispatch(getPhotosSuccess(photos));
  };
};
