import { createSelector } from 'reselect';

/**
 * Direct selector to the signIn state domain
 */
const selectSignInDomain = () => state => state.get('signIn');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SignIn
 */

const selectSignIn = () => createSelector(
  selectSignInDomain(),
  (substate) => substate.toJS()
);

export default selectSignIn;
export {
  selectSignInDomain,
};
