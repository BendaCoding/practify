import * as actions from './auth.actions';
import { authReducer as reducer } from './auth.reducer';
import * as selectors from './auth.selectors';

export default reducer;

export * from './auth.sagas';

export * from './types';

export const Auth = {
  actions,
  reducer,
  selectors,
}
