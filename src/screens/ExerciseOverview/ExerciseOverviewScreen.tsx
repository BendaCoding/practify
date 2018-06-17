import * as React from 'react';
import { lifecycle, compose } from 'recompose';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Exercises } from 'practify/store';

const ExerciseOverviewScreen = () => (
  <div>
    <h1>Overview</h1>
  </div>
);

const mapDispatch = (dispatch: Dispatch) =>
  bindActionCreators({
    loadExercises: Exercises.actions.loadExercisesRequest,
  }, dispatch,
);

export default compose<any, any>(
  connect<any, any>(undefined, mapDispatch),
  lifecycle<any, any>({
    componentDidMount() {
      this.props.loadExercises();
    },
  }),
)(ExerciseOverviewScreen)