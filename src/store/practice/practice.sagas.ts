import { selectedExerciseIndex, exercisesForPlaylist } from './practice.selectors';
import { finishExercise, selectExercise, finishPlaylist } from './practice.actions';
import { delay } from 'redux-saga';
import { call, put, all, select, takeEvery } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';
import { findIndex } from 'lodash';

const getNextUnfinishedExerciseIndex = (exercises: IExerciseReferenceWithTracking[], currentIndex: number) => {
  const fromCurrentIndex = findIndex(exercises, (ex: IExerciseReferenceWithTracking) => !ex.finished, currentIndex);
  if (fromCurrentIndex > -1) {
    return fromCurrentIndex;
  } else {
    return findIndex(exercises, (ex: IExerciseReferenceWithTracking) => !ex.finished);
  }
}

function * selectNextExerciseSaga() {
  const currentIndex = yield select(selectedExerciseIndex);
  const exercises = yield select(exercisesForPlaylist);
  const newIndex = getNextUnfinishedExerciseIndex(exercises, currentIndex);

  yield call(delay, 3000)
  
  const indexAfterDelay = yield select(selectedExerciseIndex);

  if (newIndex === -1) {
    yield put(finishPlaylist());
  } else if (indexAfterDelay === currentIndex) {
    yield put(selectExercise(newIndex));
  }
}

export function * practiceSaga () {
  yield all([
    takeEvery((getType(finishExercise) as any), selectNextExerciseSaga as any),
  ]);
}
