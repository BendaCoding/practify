import { loadPlaylist, selectExercise, startExercise, stopExercise, finishExercise } from '../practice.actions';
import { practiceReducer, initialState } from '../practice.reducer';

describe('practiceReducer', () => {

  it('should exist and return the initialState', () => {
    const reducer = practiceReducer(undefined, {});
    expect(reducer).toBeDefined();
    expect(reducer).toEqual(initialState);
  });

  it('should handle LOAD_PLAYLIST', () => {
    const playlist: IActivePlaylist = {
      name: 'TestPlaylist',
      description: 'yada yada',
      exercises: [{
        exerciseId: 'abcXZ',
        period: 120,
        elapsed: 0,
      }],
    };

    const reducer = practiceReducer({}, loadPlaylist(playlist));
    expect(reducer).toEqual({ playlist });
  });

  it('should handle SELECT_EXERCISE', () => {
    const selectedIndex = 1;

    const reducer = practiceReducer({}, selectExercise(selectedIndex));
    expect(reducer).toEqual({
      isRunning: false,
      isCountInRunning: false,
      selectedExerciseIndex: selectedIndex,
    });
  });

  it('should handle START_EXERCISE', () => {
    const reducer = practiceReducer({}, startExercise());
    expect(reducer).toEqual({
      isRunning: true,
      isCountInRunning: false,
    });
  });

  it('should handle STOP_EXERCISE', () => {
    const reducer = practiceReducer({}, stopExercise());
    expect(reducer).toEqual({
      isRunning: false,
    });
  });

  it('should handle FINISH_EXERCISE', () => {
    const reducer = practiceReducer({}, finishExercise());
    expect(reducer).toEqual({
      isRunning: false,
    });
  });
});
