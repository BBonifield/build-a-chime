
import { fromJS } from 'immutable';
import chimeCountSelectorReducer from '../reducer';

describe('chimeCountSelectorReducer', () => {
  it('returns the initial state', () => {
    expect(chimeCountSelectorReducer(undefined, {})).toEqual(fromJS({}));
  });
});
