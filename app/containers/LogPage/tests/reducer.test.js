import expect from 'expect';
import logPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('logPageReducer', () => {
  it('returns the initial state', () => {
    expect(logPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
