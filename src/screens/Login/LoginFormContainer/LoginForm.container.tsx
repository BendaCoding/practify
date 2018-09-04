import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Auth, AppState, AuthLoginRequest } from 'practify/store';
import { withFormik } from 'formik';
import { compose, withHandlers } from 'recompose';
import { LoginForm } from './LoginForm';
import { withLoader } from 'practify/hocs';

interface StateProps {
  isLoading: boolean;
}

interface DispatchProps {
  userLoginRequest: (credentials: AuthLoginRequest) => void;
  userOAuthRequest: (provider: 'facebook' | 'google') => any;
}

interface OwnProps {
  toggleForm: () => void;
  handleSubmit: () => void;
  oAuthLogin: (authProvider: string) => any;
}

interface Values {
  email: string;
  password: string;
}


const mapState = (state: AppState) => ({
  isLoading: Auth.selectors.getIsLoading(state),
});

const mapDispatch = (dispatch: Dispatch) => (
  bindActionCreators({
    userLoginRequest: Auth.actions.userLoginRequest,
    userOAuthRequest: Auth.actions.userOAuthRequest,
  }, dispatch)
);

export type ILoginFormProps = StateProps & DispatchProps & Values & OwnProps;

export const LoginFormContainer = compose<any, any>(
  connect<StateProps, DispatchProps, OwnProps>(mapState, mapDispatch),
  withLoader({ minHeight: 340 }),
  withFormik<OwnProps & DispatchProps, Values, any>({
    mapPropsToValues: () => ({
      email: '',
      password: '',
    }),
    handleSubmit: ({ email, password }, { props: { userLoginRequest }}) => {
      userLoginRequest({ email, password });
    },
  }),
  withHandlers({
    oAuthLogin: ({ userOAuthRequest }) => (authProvider: string) => () => userOAuthRequest(authProvider),
  }),
)(LoginForm);
