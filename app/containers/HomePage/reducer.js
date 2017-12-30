import { fromJS } from 'immutable';

import {
  DEFAULT_CHIME_COUNT,
  DEFAULT_CHIME_STYLE
} from './constants';

// // The initial state of the App
const initialState = fromJS({
  chimeCount: DEFAULT_CHIME_COUNT,
  chimes: Array(DEFAULT_CHIME_COUNT).fill(DEFAULT_CHIME_STYLE)
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    // case CHANGE_USERNAME:

      // // Delete prefixed '@' from the github username
      // return state
        // .set('username', action.name.replace(/@/gi, ''));
    default:
      return state;
  }
}

export default homeReducer;
