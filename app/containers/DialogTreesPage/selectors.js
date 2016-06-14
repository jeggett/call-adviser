import { createSelector } from 'reselect';

/**
 * Direct selector to the dialogTreesPage state domain
 */
const selectDialogTreesPageDomain = () => state => state.get('dialogTreesPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by DialogTreesPage
 */

const selectDialogTreesPage = () => createSelector(
  selectDialogTreesPageDomain(),
  (substate) => substate.toJS()
);

export default selectDialogTreesPage;
export {
  selectDialogTreesPageDomain,
};
