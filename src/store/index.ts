import { createStore, combineReducers, applyMiddleware } from 'redux';
import photos, { IState as PhotosState } from './photos/reducer';
import thunk from 'redux-thunk';
import { api } from '../api';

export interface IRootState {
  photos: PhotosState;
}

export const store = createStore(
  combineReducers<IRootState>({
    photos,
  }),
  applyMiddleware(thunk.withExtraArgument(api)),
);
