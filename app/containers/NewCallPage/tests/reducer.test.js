import expect from 'expect';
import newCallPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('newCallPageReducer', () => {
  it('returns the initial state', () => {
    expect(newCallPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
