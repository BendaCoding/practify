import * as actions from './exercises.actions';
import * as selectors from './exercises.selectors';
import { exercisesReducer as reducer } from './exercises.reducer';

export default reducer;

export * from './exercises.sagas';

export * from './types';

export const Exercises = {
  actions,
  reducer,
  selectors,
}
