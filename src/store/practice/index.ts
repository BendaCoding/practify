import * as actions from './practice.actions';
import { practiceReducer as reducer } from './practice.reducer';
import * as selectors from './practice.selectors';

export default reducer;

export const Practice = {
  actions,
  reducer,
  selectors,
}
