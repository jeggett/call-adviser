/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import { reducer as reduxFormReducer } from 'redux-form/immutable';


/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  locationBeforeTransitions: null,
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload,
      });
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
import signUpReducer from 'containers/SignUp/reducer';
import mainPageReducer from 'containers/MainPage/reducer';
import headlineReducer from 'containers/Headline/reducer';
import newCallPageReducer from 'containers/NewCallPage/reducer';
import settingsPageReducer from 'containers/SettingsPage/reducer';
import logPageReducer from 'containers/LogPage/reducer';
import dialogTreesPageReducer from 'containers/DialogTreesPage/reducer';
import signInReducer from 'containers/SignIn/reducer';
export default function createReducer(asyncReducers) {
  return combineReducers({
    route: routeReducer,
    form: reduxFormReducer,
    signUp: signUpReducer,
    mainPage: mainPageReducer,
    headline: headlineReducer,
    newCallPage: newCallPageReducer,
    settingsPage: settingsPageReducer,
    logPage: logPageReducer,
    dialogTreesPage: dialogTreesPageReducer,
    signIn: signInReducer,
    ...asyncReducers,
  });
}
