import expect from 'expect';
import headlineReducer from '../reducer';
import { fromJS } from 'immutable';

describe('headlineReducer', () => {
  it('returns the initial state', () => {
    expect(headlineReducer(undefined, {})).toEqual(fromJS({}));
  });
});
