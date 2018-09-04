import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router';
import { routes } from 'practify/common';
import { connect } from 'react-redux';
import { Auth, AppState } from 'practify/store';

interface StateProps {
  loggedIn: boolean;
}

interface AuthRouteProps extends RouteProps {
 component: any;
}

type IProps = StateProps & AuthRouteProps;

export const AuthRoute: React.SFC<IProps> = ({ component: Component, loggedIn, ...rest }) => {
  const renderedComponent = (props: any) => (
    loggedIn
    ? <Component { ...props } />
    : <Redirect to={{
          pathname: routes.home,
          state: { from: props.location },
        }}
      />
  );
  return <Route {...rest} render={renderedComponent} />
}

const mapState = (state: AppState) => ({
  loggedIn: Auth.selectors.getLoggedIn(state),
})

export default connect(mapState, undefined)(AuthRoute);
