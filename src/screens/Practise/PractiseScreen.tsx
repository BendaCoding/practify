import * as React from 'react';
import { ExerciseCard, Timer, Button } from 'practify/components';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Practise } from 'practify/store';
import * as S from './styled';

const mapState = (state: IAppState) => ({
  selectedExerciseId: Practise.selectors.getSelectedExerciseId(state),
  isRunning: Practise.selectors.getIsRunning(state),
});

const mapDispatch = (dispatch: Dispatch) =>
  bindActionCreators({
    startExercise: Practise.actions.startExercise,
    stopExercise: Practise.actions.stopExercise,
    finishExercise: Practise.actions.finishExercise,
    selectExercise: Practise.actions.selectExercise,
  },
  dispatch,
);

interface IPractiseScreenProps {
  selectedExerciseId: string;
  isRunning: boolean;
  startExercise: () => any;
  stopExercise: () => any;
  finishExercise: () => any;
  selectExercise: (exerciseId: string) => any;
}

export class PracticeScreen extends React.Component<IPractiseScreenProps, {}> {

  onClickExercise = (id: string) => {
    this.props.selectExercise(id);
  }

  toggleExercise = () => {
    const { isRunning, startExercise: start, stopExercise: stop }: any = this.props;
    if (isRunning) {
      stop();
    } else {
      start();
    }
  }

  onTimerFinish = () => {
    this.props.finishExercise();
  }

  render() {
    const { isRunning } = this.props;
    return (
      <S.Screen>

        <S.Content>
          <h1>Single Stroke Roll</h1>

          <Timer
            time={5}
            isRunning={isRunning}
            onFinish={this.onTimerFinish}
            onClick={this.toggleExercise}
          />

        </S.Content>

        <S.Aside>

          <ExerciseCard
            name="Single Stroke Roll"
            desc="a brief teaser"
            _id="1"
            active={true}
            onClick={this.onClickExercise}
          />

          <ExerciseCard
            name="Double Stroke Roll"
            desc="a brief teaser"
            _id="2"
            onClick={this.onClickExercise}
          />

          <Button type="success" onClick={this.props.startExercise}
          label="Start" />

          <Button type="warning" onClick={this.props.stopExercise} label="Stop" className="ml-2" />

        </S.Aside>

      </S.Screen>
    );
  }
}

export default connect(
  mapState,
  mapDispatch,
)(PracticeScreen);
