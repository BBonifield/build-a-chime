import { createSelector } from 'reselect';

/**
 * Direct selector to the chimeCountSelector state domain
 */
const selectChimesCountSelectorDomain = (state) => state.get('chimeCountSelector');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ChimesCountSelector
 */

const makeSelectChimesCountSelector = () => createSelector(
  selectChimesCountSelectorDomain,
  (substate) => substate.toJS()
);

export default makeSelectChimesCountSelector;
export {
  selectChimesCountSelectorDomain,
};
