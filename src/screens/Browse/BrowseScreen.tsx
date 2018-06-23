import * as React from 'react';
import { lifecycle, compose } from 'recompose';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Exercises, Playlists } from 'practify/store';
import { Container, ExercisesTable } from 'practify/components';

const BrowseScreen = ({ exercises, playlists }: any) => (
  <Container>
    <h1>Overview</h1>

    <ExercisesTable exercises={exercises} />

    {Object.keys(playlists).map((playlistId: string) => (
      <div key={playlistId}>
        {playlists[playlistId].name}
      </div>
    ))}
    
  </Container>
);

const mapState = (state: IAppState) => ({
  exercises: Exercises.selectors.exercises(state),
  playlists: Playlists.selectors.playlists(state),
})

const mapDispatch = (dispatch: Dispatch) =>
  bindActionCreators({
    loadExercises: Exercises.actions.loadExercisesRequest,
    loadPlaylists: Playlists.actions.loadPlaylistsRequest,
  }, dispatch,
);

export default compose<any, any>(
  connect<any, any>(mapState, mapDispatch),
  lifecycle<any, any>({
    componentDidMount() {
      this.props.loadExercises();
      this.props.loadPlaylists();
    },
  }),
)(BrowseScreen)
