import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router';
import { routes } from 'practify/common';
import { connect } from 'react-redux';
import { Auth } from 'practify/store';

export interface IStateProps {
  loggedIn: boolean;
}

interface IRouteProps extends RouteProps {
 component: any;
}

type IProps = IStateProps & IRouteProps;

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

const mapState = (state: IAppState) => ({
  loggedIn: Auth.selectors.getLoggedIn(state),
})

export default connect(mapState, undefined)(AuthRoute);
