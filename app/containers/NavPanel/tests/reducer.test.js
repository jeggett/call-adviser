import expect from 'expect';
import navPanelReducer from '../reducer';
import { fromJS } from 'immutable';

describe('navPanelReducer', () => {
  it('returns the initial state', () => {
    expect(navPanelReducer(undefined, {})).toEqual(fromJS({}));
  });
});
