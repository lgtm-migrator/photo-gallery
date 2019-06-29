import { IPhoto } from '../../interfaces/photo.interface';
import { Action, SET_PHOTOS } from './actions';

export interface IState {
  list: IPhoto[];
}

const initialState: IState = {
  list: [],
};

export default function photos(state = initialState, action: Action) {
  switch (action.type) {
    case SET_PHOTOS:
      return {
        ...state,
        list: action.payload,
      };

    default:
      return state;
  }
}
