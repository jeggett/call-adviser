import { createSelector } from 'reselect';

/**
 * Direct selector to the newCallPage state domain
 */
const selectNewCallPageDomain = () => state => state.get('newCallPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NewCallPage
 */

const selectNewCallPage = () => createSelector(
  selectNewCallPageDomain(),
  (substate) => substate.toJS()
);

export default selectNewCallPage;
export {
  selectNewCallPageDomain,
};
