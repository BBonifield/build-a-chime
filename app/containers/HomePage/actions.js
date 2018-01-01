/*
 *
 * HomePage actions
 *
 */

import {
  SET_CHIME_COUNT,
  SET_CHIME_STYLE,
} from './constants';

export function setChimeCount(count) {
  return {
    type: SET_CHIME_COUNT,
    count,
  };
}

export function setChimeStyle(chimeStyle, position) {
  return {
    type: SET_CHIME_STYLE,
    chimeStyle,
    position,
  };
}
