import { IPhoto } from '../../interfaces/photo.interface';
import { Action, SET_PHOTOS } from './actions';

export interface IState {
  list: IPhoto[];
}

const initialState: IState = {
  list: [],
};

const sortPhotos = (a: IPhoto, b: IPhoto) => {
  if (a.title.length > b.title.length) {
    return -1;
  }
  if (a.title.length < b.title.length) {
    return 1;
  }
  return 0;
};

export default function photos(state = initialState, action: Action) {
  switch (action.type) {
    case SET_PHOTOS:
      return {
        ...state,
        list: action.payload.sort(sortPhotos),
      };

    default:
      return state;
  }
}
