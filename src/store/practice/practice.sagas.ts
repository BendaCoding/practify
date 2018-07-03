import { selectedExerciseIndex, exercisesForPlaylist } from './practice.selectors';
import { finishExercise, selectExercise } from './practice.actions';
import { call, put, all, select, takeEvery } from 'redux-saga/effects';
import { rsFire } from 'practify/firebase';
import { getType } from 'typesafe-actions';

function * selectNextExerciseSaga() {
  const currentIndex = yield select(selectedExerciseIndex);
  const exercises = yield select(exercisesForPlaylist);

  console.log("currentIndex", currentIndex);
  console.log("count", exercises.length);
  const newIndex = currentIndex < exercises.length - 1
    ? currentIndex + 1
    : currentIndex;

  yield all([
    put(selectExercise(newIndex)),
  ]);
}

export function * practiceSaga () {
  yield all([
    takeEvery((getType(finishExercise) as any), selectNextExerciseSaga as any),
  ]);
}