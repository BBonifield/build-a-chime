import { fromJS } from 'immutable';
import { isNull } from 'lodash';

import {
  DEFAULT_CHIME_COUNT,
  DEFAULT_CHIME_STYLE,
} from 'containers/App/constants';

import {
  SET_CHIME_COUNT,
  SET_CHIME_STYLE,
} from './constants';

// The initial state of the App
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

      return state
        .set('chimeCount', action.count)
        .set('chimes', fromJS(newChimes));

    case SET_CHIME_STYLE:
      const chimes = state.get('chimes').toJS();

      chimes[action.position] = action.chimeStyle;

      return state
        .set('chimes', fromJS(chimes));
    default:
      return state;
  }
}

function buildChimes(size) {
  return Array(size).fill(DEFAULT_CHIME_STYLE);
}

export default homeReducer;
