/*
 *
 * ChimesCountSelector reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SET_CHIME_COUNT,
} from './constants';

const initialState = fromJS({});

function chimesCountSelectorReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_CHIME_COUNT:
      state.chimeCount = action.count;

      return state;
    default:
      return state;
  }
}

export default chimesCountSelectorReducer;
