import * as React from 'react';
import { withRouter, NavLink, RouteComponentProps } from 'react-router-dom';
import { translate, InjectedTranslateProps } from 'react-i18next';
import { Nav } from './styled';
import { fire } from 'practify/firebase';

interface IMainNavProps extends RouteComponentProps<any>, InjectedTranslateProps {
  loggedIn: boolean;
}

export const MainNav: React.SFC<IMainNavProps> = ({ t, loggedIn }) => {
  const logout = () => {
    fire.auth().signOut();
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

export default translate()(withRouter(MainNav));
