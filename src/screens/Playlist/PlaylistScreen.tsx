import * as React from 'react';
import * as S from "./styled";
import { lifecycle, compose } from 'recompose';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Exercises } from 'practify/store';
import { Container, ExercisesTable, HeroSection, Tag } from 'practify/components';
import { Box } from 'grid-styled';

const PlaylistScreen = ({ exercises }: any) => (
  <div>

    <HeroSection
      backgroundUrl="https://theproaudiofiles.com/wp-content/uploads/2017/11/mixing-drums-5-1.png"    
    >
      <Box p={20}>
        <h1>Hero</h1>
        <Tag label="Guitar" color="color1" />
        <Tag label="Keys" />
      </Box>
      
    </HeroSection>

    <Container> 
    <S.Desc>Descriptive Text. What is this playlist about?</S.Desc>
      <ExercisesTable exercises={exercises} />
    </Container>
  </div>
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
)(PlaylistScreen)
