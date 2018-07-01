import * as React from 'react';
import { lifecycle, compose } from 'recompose';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Exercises, Playlists } from 'practify/store';
import { Container, CoverFlick } from 'practify/components';

const BrowseScreen = ({ exercises, playlists }: any) => {

  playlists = playlists.map((pl: IPlaylist) => ({ ...pl, coverUrl: 'https://i.scdn.co/image/859b7acb1389b23a300da985a74817b6c6273ff2' }));

  return (
    <Container>
      <h1>Overview</h1>

      <CoverFlick
        title="Recently Practiced"
        items={playlists}
      />

    </Container>
  );
}

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
