import * as actions from './metronome.actions';
import { metronomeReducer as reducer } from './metronome.reducer';
import * as selectors from './metronome.selectors';

export default reducer;

export const Metronome = {
  actions,
  reducer,
  selectors,
}
