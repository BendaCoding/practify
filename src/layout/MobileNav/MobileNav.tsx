import * as React from 'react';
import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';
import { translate, InjectedTranslateProps } from 'react-i18next';
import * as S from './styled';
import { compose } from 'recompose';
import { Auth } from 'practify/store';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
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

export const MobileNav: React.SFC<IProps> = ({ t, loggedIn, userLogoutRequest }) => {

  return (
    <S.Nav>
      {loggedIn && <React.Fragment>
        
      
        <S.NavLink to={routes.start}>
          <S.IconStart size={16} /> <S.Label>Start</S.Label>
        </S.NavLink>

        <S.NavLink to={routes.practise}>
          <S.IconPractise size={14} /> <S.Label>Practice</S.Label>
        </S.NavLink>
      
        <S.NavLink to={routes.browse}>
          <S.IconBrowse /> <S.Label>Browse</S.Label>
        </S.NavLink>
      
        <S.NavLink to={routes.playlist}>
          <S.IconBrowse /> <S.Label>Playlist</S.Label>
        </S.NavLink>
        
      </React.Fragment>}
    </S.Nav>
  );
}

export default withRouter<any>(
  compose(
    translate(),
    connect<IStateProps, IDispatchProps>(mapState, mapDispatch),
  )(MobileNav),
);
