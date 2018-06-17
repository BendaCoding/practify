import * as React from 'react';
import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';
import { translate, InjectedTranslateProps } from 'react-i18next';
import { Nav } from './styled';
import { compose } from 'recompose';
import { Auth } from 'practify/store';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

interface IStateProps {
  loggedIn: boolean;
}

interface IDispatchProps {
  userLogoutRequest: () => void;
}

type IProps = IStateProps & IDispatchProps & InjectedTranslateProps & RouteComponentProps<any>;

const mapState = (state: IAppState) => ({
  loggedIn: Auth.selectors.getLoggedIn(state),
});

const mapDispatch = (dispatch: Dispatch) =>
  bindActionCreators({
    userLogoutRequest: Auth.actions.userLogoutRequest,
  },
  dispatch,
);

export const MainNav: React.SFC<IProps> = ({ t, loggedIn, userLogoutRequest }) => {
  const logout = () => {
    userLogoutRequest();
  };

  return (
    <Nav>
      {loggedIn && <React.Fragment>
        <NavLink to="/practise">Practice</NavLink>
        <NavLink to="/overview">Exercise Overview</NavLink>
        <a className="ml-auto mr-0" onClick={logout}>Logout</a>
      </React.Fragment>}
    </Nav>
  );
}

export default withRouter<any>(
  compose(
    translate(),
    connect<IStateProps, IDispatchProps>(mapState, mapDispatch),
  )(MainNav),
);
