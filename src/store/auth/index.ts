import * as actions from './auth.actions';
import { authReducer as reducer } from './auth.reducer';
import * as selectors from './auth.selectors';

export default reducer;

export * from './auth.sagas';

export const Auth = {
  actions,
  reducer,
  selectors,
}
