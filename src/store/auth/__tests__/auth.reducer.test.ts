import { userLoginSync } from '../auth.actions';
import { userLoginFail, userLoginSuccess, userLoginRequest } from '../auth.actions';
import { authReducer, initialState } from '../auth.reducer';
import { userMock } from '../__mocks__/user.mock';
import { assign } from 'lodash';

describe('userReducer', () => {

  it('should exist and return the initialState', () => {
    const reducer = authReducer(undefined, { type: 'RANDOM'});
    expect(reducer).toBeDefined();
    expect(reducer).toEqual(initialState);
  });

  it('should handle USER_LOGIN_REQUEST', () => {
    const reducer = authReducer(undefined, userLoginRequest({ email: 'test@web.de', password: 'gädega' }));
    const expectedState = assign({}, initialState, {isLoading: true });
    expect(reducer).toEqual(expectedState);
  });

  it('should handle USER_LOGIN_SUCCESS', () => {
    const reducer = authReducer(undefined, userLoginSuccess());
    const updatedValues = { isLoading: false, loggedIn: true };
    const expectedState = assign({}, initialState, updatedValues);
    expect(reducer).toEqual(expectedState);
  });

  it('should handle USER_LOGIN_FAIL', () => {
    const error = { code: '500', message: 'random error' };
    const reducer = authReducer(undefined, userLoginFail(error));
    const updatedValues = { isLoading: false, error };
    const expectedState = assign({}, initialState, updatedValues);
    expect(reducer).toEqual(expectedState);
  });
  
  it('should handle USER_LOGIN_SYNC with user payload', () => {
    const reducer = authReducer(undefined, userLoginSync(userMock));
    const updatedValues = { isLoading: false, loggedIn: true, user: userMock };
    const expectedState = assign({}, initialState, updatedValues);
    expect(reducer).toEqual(expectedState);
  });

  it('should handle USER_LOGIN_SYNC with null payload', () => {
    const reducer = authReducer(undefined, userLoginSync(null));
    const updatedValues = { isLoading: false, user: null };
    const expectedState = assign({}, initialState, updatedValues);
    expect(reducer).toEqual(expectedState);
  });
});
