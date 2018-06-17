import * as actions from './practise.actions';
import { practiseReducer as reducer } from './practise.reducer';
import * as selectors from './practise.selectors';

export default reducer;

export const Practise = {
  actions,
  reducer,
  selectors,
}
