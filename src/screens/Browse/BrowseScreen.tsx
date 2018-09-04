import React from 'react';
import { lifecycle, compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Exercises, Playlists } from 'practify/store';
import { Container, CoverFlick } from 'practify/components';

const BrowseScreen = ({ exercises, playlists }: any) => {

  const onPlaylistClick = (playlistId: string) => {
    // TODO: handle action
  }

  return (
    <Container>
      <h1>Overview</h1>

      <CoverFlick
        title="Recently Practiced"
        items={playlists}
        onClick={onPlaylistClick}
        mb={4}
      />
      
      <CoverFlick
        title="Similar to what you did"
        items={playlists.reverse()}
        onClick={onPlaylistClick}
      />

    </Container>
  );
}

const mapState = (state: AppState) => ({
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
