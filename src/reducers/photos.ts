import {
  ADD_PHOTO,
} from '../constants/ActionTypes';

interface IPhoto {

}

interface IState {
  list: IPhoto[];
}

const initialState: IState = {
  list: [],
};

export default function photos(state = initialState, action: any) {
  switch (action.type) {
    case ADD_PHOTO:
      return {
        ...state,
        list: state.list.concat([action.payload]),
      };

    default:
      return state
  }
}
