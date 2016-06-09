import { createSelector } from 'reselect';

/**
 * Direct selector to the headline state domain
 */
const selectHeadlineDomain = () => state => state.get('headline');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Headline
 */

const selectHeadline = () => createSelector(
  selectHeadlineDomain(),
  (substate) => substate.toJS()
);

export default selectHeadline;
export {
  selectHeadlineDomain,
};
