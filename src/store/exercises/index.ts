import * as actions from './exercises.actions';
import { exercisesReducer as reducer } from './exercises.reducer';
// export * from './exercises.selectors';

export default reducer;

export * from './exercises.sagas';

export const Exercises = {
  actions,
  reducer,
  // selectors,
}