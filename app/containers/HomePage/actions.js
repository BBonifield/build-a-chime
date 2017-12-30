/*
 *
 * HomePage actions
 *
 */

import {
  SET_CHIME_COUNT,
} from './constants';

export function setChimeCount(count) {
  return {
    type: SET_CHIME_COUNT,
    count,
  };
}
