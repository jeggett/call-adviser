import { createSelector } from 'reselect';

/**
 * Direct selector to the navPanel state domain
 */
const selectNavPanelDomain = () => state => state.get('navPanel');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NavPanel
 */

const selectNavPanel = () => createSelector(
  selectNavPanelDomain(),
  (substate) => substate.toJS()
);

export default selectNavPanel;
export {
  selectNavPanelDomain,
};
