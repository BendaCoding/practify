import { selectedExerciseIndex, exercisesForPlaylist, selectedExerciseId, selectedPlaylistId } from './practice.selectors';
import { finishExercise, selectExercise, finishPlaylist } from './practice.actions';
import { delay } from 'redux-saga';
import { call, put, all, select, takeEvery } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';
import { findIndex } from 'lodash';
import { userId } from '../auth/auth.selectors';
import { rsf } from 'practify/firebase';

const getNextUnfinishedExerciseIndex = (exercises: ExerciseReferenceWithTracking[], currentIndex: number) => {
  const fromCurrentIndex = findIndex(exercises, (ex: ExerciseReferenceWithTracking) => !ex.finished, currentIndex);
  if (fromCurrentIndex > -1) {
    return fromCurrentIndex;
  } else {
    return findIndex(exercises, (ex: ExerciseReferenceWithTracking) => !ex.finished);
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

function * logExerciseSaga() {
  const exerciseId = yield select(selectedExerciseId);
  const instrument = 'drums'; // TODO: implement instrument selection

  try {
    const uid = yield select(userId);
    yield call(rsf.firestore.addDocument, `users/${uid}/exercises/${exerciseId}/logs`,
      { instrument }
    )
  } catch (error) {
    // console.log(error);
  }
}

function * logPlaylistSaga() {
  const playlistId = yield select(selectedPlaylistId);
  const instrument = 'drums'; // TODO: implement instrument selection
  try {
    const uid = yield select(userId);
    yield call(rsf.firestore.addDocument, `users/${uid}/playlists/${playlistId}/logs`,
      { instrument }
    )
  } catch (error) {
    // console.log(error);
  }
}

export function * practiceSaga () {
  yield all([
    takeEvery((getType(finishExercise) as any), selectNextExerciseSaga as any),
    takeEvery((getType(finishExercise) as any), logExerciseSaga as any),
    takeEvery((getType(finishPlaylist) as any), logPlaylistSaga as any),
  ]);
}
