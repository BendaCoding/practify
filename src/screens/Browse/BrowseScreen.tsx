import * as React from 'react';
import { lifecycle, compose } from 'recompose';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Exercises } from 'practify/store';
import { Container, ExercisesTable } from 'practify/components';

const BrowseScreen = ({ exercises }: any) => (
  <Container>
    <h1>Overview</h1>

    <ExercisesTable exercises={exercises} />
  </Container>
);

const mapState = (state: IAppState) => ({
  exercises: Exercises.selectors.exercises(state),
})

const mapDispatch = (dispatch: Dispatch) =>
  bindActionCreators({
    loadExercises: Exercises.actions.loadExercisesRequest,
  }, dispatch,
);

export default compose<any, any>(
  connect<any, any>(mapState, mapDispatch),
  lifecycle<any, any>({
    componentDidMount() {
      this.props.loadExercises();
    },
  }),
)(BrowseScreen)
