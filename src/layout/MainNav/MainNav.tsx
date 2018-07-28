import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { translate, InjectedTranslateProps } from 'react-i18next';
import * as S from './styled';
import { compose } from 'recompose';
import { Auth } from 'practify/store';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { routes } from 'practify/common';

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
    <S.Nav>
      {loggedIn && <React.Fragment>
        
        <S.NavLink to={routes.start}>
          <S.IconStart size={15} /> Start
        </S.NavLink>

        <S.NavLink to={routes.practice}>
          <S.IconPractice size={14} /> Practice
        </S.NavLink>

        <S.NavLink to={routes.browse}>
          <S.IconBrowse /> Browse
        </S.NavLink>

           <S.NavLink to={routes.playlist}>
          <S.IconBrowse /> Playlist
        </S.NavLink>

        <a className="ml-auto mr-0" onClick={logout}>Logout</a>
      </React.Fragment>}
    </S.Nav>
  );
}

export default withRouter<any>(
  compose(
    translate(),
    connect<IStateProps, IDispatchProps>(mapState, mapDispatch),
  )(MainNav),
);
