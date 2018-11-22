import deepFreeze from 'deep-freeze';
import reducer from './index';
import { actions } from '../container';
import { defaultState } from './index';

describe('reducer', () => {
  it('should provide the initial state', function() {
    expect(reducer(undefined, {})).toEqual(defaultState);
  });

  describe('GET_ITEMS action: ', () => {
    const { getItems } = actions;
    it('should return correct state', () => {
      const stateBefore = {
        items: []
      };

      const newItems = [1, 2, 3];

      const action = getItems(newItems);

      const stateAfter = {
        items: [1, 2, 3]
      };

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(action).toMatchObject({type: 'GET_ITEMS'});
      expect(reducer(stateBefore, action)).toEqual(stateAfter);
    });
  });
});