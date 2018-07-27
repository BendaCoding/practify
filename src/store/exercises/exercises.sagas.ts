import { firestore } from 'practify/firebase';
import { loadExercisesSuccess, loadExercisesFail, loadExercisesRequest } from './exercises.actions';
import { call, put, all, takeEvery, select } from 'redux-saga/effects';
import { rsf } from 'practify/firebase';
import { getType } from 'typesafe-actions';
import { userId } from '../auth/auth.selectors';
// import { push } from 'connected-react-router'

function * loadExercisesSaga() {
  try {
    const snapshot = yield call(rsf.firestore.getCollection, 'exercises');
    let exercises: any;
    snapshot.forEach((exercise: any) => {
      exercises = {
        ...exercises,
        [exercise.id]: {
          id: exercise.id,
          ...exercise.data(),
        },
      };
    })
    yield all([
      put(loadExercisesSuccess(exercises)),
    ]);
  } catch (error) {
    yield all([
      put(loadExercisesFail(error)),
    ]);
  }
}

export function * exercisesSaga () {
  yield all([
    takeEvery((getType(loadExercisesRequest) as any), loadExercisesSaga as any),
  ]);
}
