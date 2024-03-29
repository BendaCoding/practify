import React from 'react';
import { lifecycle, compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Exercises, Playlists, AppState } from 'practify/store';
import { Container, CoverFlick, CoverGrid, CoverStack, H1 } from 'practify/components';
import { Flex } from 'grid-styled';

const StartScreen = ({ exercises, playlists }: any) => {

  return (
    <Container>
      
      <H1>Your current playlists</H1>

    

      <H1>How 'bout a little jam?</H1>

      <CoverFlick
        title="Recently Practiced"
        items={playlists}
      />
      <CoverGrid
        title="Instruments"
        items={playlists}
      />
      <Flex flexWrap="wrap" justifyContent="space-between">
      <CoverStack
       title="Top Lists"
       description="The most practiced exercises. See what others like to jam."
       items={playlists}
       />
       <CoverStack
       title="Summer Practice"
       description="Nice stuff you can do on your balcony, sippin a beer."
       items={playlists}
       />
       <CoverStack
       title="Insane Shit"
       description="Ye, yo gonna die trying this shit. Like Pretrucci level."
       items={playlists}
       />
       <CoverStack
       title="Dumsta Funk"
       description="Owww yeaa! Dis one all bout da funk!"
       items={playlists}
       />
       </Flex>
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
)(StartScreen)
