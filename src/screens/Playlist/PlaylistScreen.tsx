import * as React from "react";
import * as S from "./styled";
import { lifecycle, compose } from "recompose";
import { connect, Dispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { Exercises } from "practify/store";
import {
  Container,
  ExercisesTable,
  HeroSection,
  Tag,
  H1,
  H3,
  Button,
} from "practify/components";
import { Box } from "grid-styled";
import { CoverCard } from "../../components/atoms/CoverCard";

const PlaylistScreen = ({ exercises }: any) => (
  <Container>
    <S.Hero>
      <S.Cover>
        <CoverCard coverUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcC4WcDWSt2dqUZl1jMIoblZymUljtjIppvuo8ILfBSK5MMAMw" />
      </S.Cover>

      <S.Infos>
        <H1>Playlist name</H1>
        by Peter Panflute
        <S.Tags>
          <Tag label="Guitar" color="color1" />
          <Tag label="Keys" color="color2" />
        </S.Tags>
       <S.Buttons> <Button label="Play"/> <Button label="Save" inverted/> </S.Buttons>
      </S.Infos>
      <S.Desc>Descriptive Text. What is this playlist about?</S.Desc>
    </S.Hero>

    <ExercisesTable exercises={exercises} />
    <ExercisesTable exercises={exercises} />
    <ExercisesTable exercises={exercises} />
  </Container>
);

const mapState = (state: IAppState) => ({
  exercises: Exercises.selectors.exercises(state),
});

const mapDispatch = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      loadExercises: Exercises.actions.loadExercisesRequest,
    },
    dispatch
  );

export default compose<any, any>(
  connect<any, any>(
    mapState,
    mapDispatch,
  ),
  lifecycle<any, any>({
    componentDidMount() {
      this.props.loadExercises();
    }
  })
)(PlaylistScreen);
