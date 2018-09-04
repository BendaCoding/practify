import { loadPlaylist, selectExercise, startExercise, stopExercise, finishExercise } from '../practice.actions';
import { practiceReducer, initialState } from '../practice.reducer';
import { PracticeState, ActivePlaylist } from '../types';

export const mockState: PracticeState = {
  selectedExerciseIndex: 0,
  isRunning: false,
  isCountInRunning: false,
  playlist: {
    name: 'Phil\'s Phrygian Phantasies',
    description: 'Don\'t even ask ....',
    id: 'FA2eAS',
    coverUrl: 'https://firebasestorage.googleapis.com/v0/b/practify-b68c5.appspot.com/o/images%2Fplaylists%2FYTTyp9B05det6VWulM0l%2Fcover.jpg?alt=media&token=ecca62c5-808e-4f45-83c9-d2d3826f019f',
    finished: false,
    ratings: {
      average: 4.5,
      count: 14,
    },
    exercises: [
      { exerciseId: 'A9iFOgEKRjLJEDAhbBgv', period: 5, elapsed: 0, finished: false },
      { exerciseId: 'RF1hijgMHZS163iK6Iq3', period: 4, elapsed: 0, finished: false },
      { exerciseId: 'GDuZrgmhGDzHyiLpfrvA', period: 4, elapsed: 0, finished: false },
    ],
  },
};

describe('practiceReducer', () => {

  it('should exist and return the initialState', () => {
    const reducer = practiceReducer(undefined, {});
    expect(reducer).toBeDefined();
    expect(reducer).toEqual(initialState);
  });

  it('should handle LOAD_PLAYLIST', () => {
    const reducer = practiceReducer({}, loadPlaylist(mockState.playlist as ActivePlaylist));
    expect(reducer).toEqual({ playlist: mockState.playlist });
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

  it('should handle START_EXERCISE without playlist', () => {
    const reducer = practiceReducer({}, startExercise());
    expect(reducer).toEqual({});
  });

  it('should handle START_EXERCISE with playlist', () => {
    const reducer = practiceReducer(mockState, startExercise());
    expect(reducer).toEqual({
      ...mockState,
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
    const reducer = practiceReducer(mockState, finishExercise());
    expect(reducer).toEqual({
      ...mockState,
      isRunning: false,
      playlist: {
        ...mockState.playlist,
        exercises: [
          {
            ...mockState.playlist!.exercises[0],
            finished: true,
          },
          ...mockState.playlist!.exercises.slice(1),
        ]
      },
    });
  });
});
