import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');
const selectRoute = (state) => state.get('route');

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

const makeSelectChimeCount = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('chimeCount')
);

const makeSelectChimes = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('chimes').toJS()
);

export {
  makeSelectChimeCount,
  makeSelectChimes,
  makeSelectLocation,
};
