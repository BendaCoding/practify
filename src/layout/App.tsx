import * as React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { TransitionSwitch, AuthRoute, LoginRoute, PractifyTypo } from 'practify/components';
import { LoginScreen, PracticeScreen, BrowseScreen, PlaylistScreen, NotFoundScreen, StartScreen } from 'practify/screens';
import { MainNav } from './MainNav';
import { MobileNav } from "./MobileNav";
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
          <S.NavLarge>
            <NavLink to={routes.browse}>
              <PractifyTypo />
            </NavLink>
            <MainNav />
          </S.NavLarge>
          <S.NavMobile>Current Page</S.NavMobile>
        </S.Header>

        <main>
          <TransitionSwitch location={location}>
            <LoginRoute exact path={routes.home} component={LoginScreen} />
            <AuthRoute exact path={routes.start} component={StartScreen} />
            <AuthRoute exact path={routes.practise} component={PracticeScreen} />
            <AuthRoute path={routes.browse} component={BrowseScreen} />
            <AuthRoute path={routes.playlist} component={PlaylistScreen} />
            <Route component={NotFoundScreen} />
          </TransitionSwitch>
        </main>

        <S.Footer>
          <MobileNav />
        </S.Footer>
        
      </div>
    );
  }
}

export default withRouter(App);
