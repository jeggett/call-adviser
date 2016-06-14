import expect from 'expect';
import dialogTreesPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('dialogTreesPageReducer', () => {
  it('returns the initial state', () => {
    expect(dialogTreesPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
