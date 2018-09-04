import { firestore } from 'practify/firebase';
import { loadExercisesSuccess, loadExercisesFail, loadExercisesRequest } from './exercises.actions';
import { call, put, all, takeEvery, select } from 'redux-saga/effects';
import { rsf } from 'practify/firebase';
import { getType } from 'typesafe-actions';
import { userId } from '../auth/auth.selectors';
// import { push } from 'connected-react-router'
import { get } from 'lodash';

function * loadExercisesSaga() {
  try {
    const snapshot = yield call(rsf.firestore.getCollection, 'exercises');
    let exercises: any;
    const uid = yield select(userId);
    const exerciseSnapshots = yield call(rsf.firestore.getCollection, `users/${uid}/exercises`);
    let logs: any;
    exerciseSnapshots.forEach((exercise: any) => {
      logs = {
        ...logs,
        [exercise.id]: {
          ...exercise.data(),
        }
      }
    });
    
    snapshot.forEach((exercise: any) => {
      const playCount = get(logs, [exercise.id, 'count', 'drums']) || 0;
      exercises = {
        ...exercises,
        [exercise.id]: {
          id: exercise.id,
          playCount,
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
