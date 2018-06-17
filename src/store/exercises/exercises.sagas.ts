import { loadExercisesSuccess, loadExercisesFail, loadExercisesRequest } from './exercises.actions';
import { call, put, all, takeEvery } from 'redux-saga/effects';
import { rsFire } from 'practify/firebase';
import { getType } from 'typesafe-actions';
// import { push } from 'connected-react-router'

function * loadExercisesSaga() {
  try {
    const snapshot = yield call(rsFire.firestore.getCollection, 'exercises');
    let exercises: any; snapshot.forEach((exercise: any) => { exercises = { ...exercises, [exercise.id]: exercise.data() }})
    yield [
      put(loadExercisesSuccess(exercises)),
    ];
  } catch (error) {
    yield [
      put(loadExercisesFail(error)),
    ]
  }
}

export function * exercisesSaga () {
  yield all([
    takeEvery((getType(loadExercisesRequest) as any), loadExercisesSaga as any),
  ]);
}