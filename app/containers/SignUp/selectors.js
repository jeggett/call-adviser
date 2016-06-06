import { createSelector } from 'reselect';

/**
 * Direct selector to the signUp state domain
 */
const selectSignUpDomain = () => state => state.get('signUp');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SignUp
 */

const selectSignUp = () => createSelector(
  selectSignUpDomain(),
  (substate) => substate.toJS()
);

export default selectSignUp;
export {
  selectSignUpDomain,
};
