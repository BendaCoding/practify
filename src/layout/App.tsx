import * as React from 'react';
import { Route } from 'react-router-dom';
import { TransitionSwitch, AuthRoute } from 'practify/components';
import { HomeScreen, PracticeScreen, ExerciseOverviewScreen, NotFoundScreen } from 'practify/screens';
import { MainNav } from './MainNav';
import { withRouter } from 'react-router';
import { Practise, Exercises } from 'practify/store';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as S from './styled';

const selectors = (state: any) => state;

const actions = (dispatch: Dispatch) => 
  bindActionCreators({
    startExercise: Practise.actions.startExercise,
  },
  dispatch);

export class App extends React.Component<any> {

  render() {
    const { location } = this.props;
    return (
      <div className="app">

        <S.Header>
          <h3>Practify</h3>

          <MainNav />

        </S.Header>

        <main>
          <TransitionSwitch location={location}>
            <Route exact path="/" component={HomeScreen} />
            <AuthRoute exact path="/practise" component={PracticeScreen} />
            <AuthRoute path="/overview" component={ExerciseOverviewScreen} />
            <Route component={NotFoundScreen} />
          </TransitionSwitch>
        </main>

      </div>
    );
  }
}

export default connect(selectors, actions)(withRouter(App));
