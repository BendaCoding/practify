import { loadPlaylist, selectExercise, startExercise, stopExercise, finishExercise } from '../practise.actions';
import { practiseReducer, initialState } from '../practise.reducer';

describe('practiseReducer', () => {

  it('should exist and return the initialState', () => {
    const reducer = practiseReducer(undefined, {});
    expect(reducer).toBeDefined();
    expect(reducer).toEqual(initialState);
  });

  it('should handle LOAD_PLAYLIST', () => {
    const playlist = [{ test: 'a' }];

    const reducer = practiseReducer({}, loadPlaylist(playlist));
    expect(reducer).toEqual({ playlist });
  });

  it('should handle SELECT_EXERCISE', () => {
    const selectedId = 'myID34';

    const reducer = practiseReducer({}, selectExercise(selectedId));
    expect(reducer).toEqual({ selectedExerciseId: selectedId });
  });

  it('should handle START_EXERCISE', () => {
    const reducer = practiseReducer({}, startExercise());
    expect(reducer).toEqual({
      isRunning: true,
    });
  });

  it('should handle STOP_EXERCISE', () => {
    const reducer = practiseReducer({}, stopExercise());
    expect(reducer).toEqual({
      isRunning: false,
    });
  });

  it('should handle FINISH_EXERCISE', () => {
    const reducer = practiseReducer({}, finishExercise());
    expect(reducer).toEqual({
      isRunning: false,
    });
  });
});
