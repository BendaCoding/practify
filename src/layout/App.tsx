import * as React from 'react';
import { Route } from 'react-router-dom';
import { TransitionSwitch, AuthRoute, PractifyTypo } from 'practify/components';
import { HomeScreen, PracticeScreen, BrowseScreen, NotFoundScreen } from 'practify/screens';
import { MainNav } from './MainNav';
import { withRouter, RouteComponentProps } from 'react-router';
import * as S from './styled';
import { routes } from 'practify/common';
import "typeface-roboto";

export class App extends React.Component<RouteComponentProps<any>> {

  render() {
    const { location } = this.props;

    return (
      <div className="app">

        <S.Header>
          <PractifyTypo />

          <MainNav />

        </S.Header>

        <main>
          <TransitionSwitch location={location}>
            <Route exact path={routes.home} component={HomeScreen} />
            <AuthRoute exact path={routes.practise} component={PracticeScreen} />
            <AuthRoute path={routes.browse} component={BrowseScreen} />
            <Route component={NotFoundScreen} />
          </TransitionSwitch>
        </main>

      </div>
    );
  }
}

export default withRouter(App);
