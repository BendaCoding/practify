import * as React from 'react';
import { Route } from 'react-router-dom';
import { TransitionSwitch } from 'practify/components';
import { HomeScreen, PracticeScreen, ExerciseOverviewScreen } from 'practify/screens';
import { MainNav } from './MainNav';
import { withRouter } from 'react-router';
import { Practise, Exercises } from 'practify/store';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as S from './styled';

const selectors = (state: any) => state;

const actions = (dispatch: Dispatch) => 
  bindActionCreators({
    loadExercises: Exercises.actions.loadExercises,
    startExercise: Practise.actions.startExercise,
  },
  dispatch);

export class App extends React.Component<any> {

  componentWillMount() {
    this.props.loadExercises();
  }

  render() {
    const { location } = this.props;
    return (
      <div className="app">

        <S.Header>
          <h3>Practify</h3>

          <MainNav
            loggedIn
          />

        </S.Header>

        <main>
          <TransitionSwitch location={location}>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/practise" component={PracticeScreen} />
            <Route path="/overview" component={ExerciseOverviewScreen} />
          </TransitionSwitch>
        </main>

      </div>
    );
  }
}

export default connect(selectors, actions)(withRouter(App));
