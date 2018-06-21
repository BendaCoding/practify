import * as classnames from 'classnames';
import * as React from 'react';
import { Route, Redirect, RouteComponentProps, RouteProps } from 'react-router';
import { routes } from 'practify/common';
import { connect, ComponentClass } from 'react-redux';
import { Auth } from 'practify/store';

export interface IStateProps {
  loggedIn: boolean;
}

interface IRouteProps extends RouteProps {
 component: any;
}

type IProps = IStateProps & IRouteProps;

export const LoginRoute: React.SFC<IProps> = ({ component: Component, loggedIn, ...rest }) => {
  const renderedComponent = (props: any) => (
    !loggedIn
    ? <Component { ...props } />
    : <Redirect to={routes.browse} />
  );
  return <Route {...rest} render={renderedComponent} />
}

const mapState = (state: IAppState) => ({
  loggedIn: Auth.selectors.getLoggedIn(state),
})

export default connect(mapState, undefined)(LoginRoute);
