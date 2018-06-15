import { createStandardAction } from 'typesafe-actions';

export const loadExercises = createStandardAction('SAGA_EVENT/loadExercises')();

// const ns = 'Exercises';

// export const LOAD_EXERCISES = `${ns} Load Exercises`;
// export interface ILoadExercisesAction extends Action { exercises: IExercise[]; }
// export const loadExercises = (): any => async (dispatch: Dispatch) => {
//   exercisesRef.on('value', snapshot => {
//     dispatch({
//       type: LOAD_EXERCISES,
//       exercises: (snapshot as firebase.database.DataSnapshot).val(),
//     });
//   })
// };

// export const SELECT_EXERCISE = `${ns} Select Exercise`;
// export interface ISelectExerciseAction extends Action { exerciseId: string; }
// export const selectExercise = (exerciseId: string): ISelectExerciseAction => ({
//   type: SELECT_EXERCISE,
//   exerciseId,
// });

// export const START_EXERCISE = `${ns} Start Exercise`;
// export const startExercise = (): Action => ({
//   type: START_EXERCISE,
// });

// export const STOP_EXERCISE = `${ns} Stop Exercise`;
// export const stopExercise = (): Action => ({
//   type: STOP_EXERCISE,
// });

// export const FINISH_EXERCISE = `${ns} Finish Exercise`;
// export const finishExercise = (): Action => ({
//   type: FINISH_EXERCISE,
// });
