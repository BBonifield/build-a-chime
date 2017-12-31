import { fromJS } from 'immutable';
import { isNull } from 'lodash';

import {
  DEFAULT_CHIME_COUNT,
  DEFAULT_CHIME_STYLE,
} from 'containers/App/constants';

import {
  SET_CHIME_COUNT,
} from './constants';

// // The initial state of the App
const initialState = fromJS({
  chimeCount: DEFAULT_CHIME_COUNT,
  chimes: buildChimes(DEFAULT_CHIME_COUNT)
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CHIME_COUNT:
      const oldChimes = state.get('chimes').toJS();

      const newChimes = buildChimes(action.count).map((style, idx) => {
        if (idx <= oldChimes.length - 1) {
          return oldChimes[idx];
        } else {
          return style;
        }
      });

      console.log(newChimes)

      return state
        .set('chimeCount', action.count)
        .set('chimes', fromJS(newChimes));
    default:
      return state;
  }
}

function buildChimes(size) {
  return Array(size).fill(DEFAULT_CHIME_STYLE);
}

export default homeReducer;
