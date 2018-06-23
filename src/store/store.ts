import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import authReducer from './auth';
import practiseReducer from './practise';
import playlistsReducer from './playlists';
import exercisesReducer from './exercises';
import { metronomeReducer } from './../modules/Metronome/store/metronome.reducer';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';

export const rootReducer = combineReducers({
  auth: authReducer,
  practise: practiseReducer,
  exercises: exercisesReducer,
  playlists: playlistsReducer,
  metronome: metronomeReducer,
});

/* tslint:disable-next-line */
const composeEnhancers = (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

/* tslint: disable */
export const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancers(
    applyMiddleware(
      sagaMiddleware,
      routerMiddleware(history),
    ),
  ),
);

sagaMiddleware.run(rootSaga);
