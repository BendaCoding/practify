import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router';
import { routes } from 'practify/common';
import { connect } from 'react-redux';
import { Auth } from 'practify/store';

export interface StateProps {
  loggedIn: boolean;
}

interface LoginRouteProps extends RouteProps {
 component: any;
}

type IProps = StateProps & LoginRouteProps;

export const LoginRoute: React.SFC<IProps> = ({ component: Component, loggedIn, ...rest }) => {
  const renderedComponent = (props: any) => (
    !loggedIn
    ? <Component { ...props } />
    : <Redirect to={routes.practice} />
  );
  return <Route {...rest} render={renderedComponent} />
}

const mapState = (state: AppState) => ({
  loggedIn: Auth.selectors.getLoggedIn(state),
})

export default connect(mapState, undefined)(LoginRoute);
