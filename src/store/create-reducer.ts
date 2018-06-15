import { getType } from 'typesafe-actions';
import { Action, Reducer } from 'redux';

export function createReducer<TState, T extends IActionCreators>(
  initialState: TState,
  actions: T,
) {
  return (handlers: TypeSafeHandlers<TState, T>): Reducer<TState> => {
    // key: ACTION_NAME -- value:
    const mappedHandlers = new Map();

    // map the redux action types (e.g. ACTION_NAME) to action creator name (e.g. actionName)
    Object.keys(handlers).forEach(actionCreatorName => {
      const actionType = getType(actions[actionCreatorName]);

      mappedHandlers.set(actionType, handlers[actionCreatorName]);
    });

    return function reducer(state = initialState, action: Action): TState {
      if (mappedHandlers.has(action.type)) {
        return mappedHandlers.get(action.type)(state, action);
      }

      return state;
    };
  }
}