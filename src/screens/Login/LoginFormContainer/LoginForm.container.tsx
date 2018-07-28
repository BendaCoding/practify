import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Auth } from 'practify/store';
import { withFormik } from 'formik';
import { compose, withHandlers } from 'recompose';
import { LoginForm } from './LoginForm';
import { withLoader } from 'practify/hocs';

interface IStateProps {
  isLoading: boolean;
}

interface IDispatchProps {
  userLoginRequest: (credentials: IAuthLoginRequest) => void;
  userOAuthRequest: (provider: 'facebook' | 'google') => any;
}

interface IOwnProps {
  toggleForm: () => void;
  handleSubmit: () => void;
  oAuthLogin: (authProvider: string) => any;
}

interface IValues {
  email: string;
  password: string;
}


const mapState = (state: IAppState) => ({
  isLoading: Auth.selectors.getIsLoading(state),
});

const mapDispatch = (dispatch: Dispatch) => (
  bindActionCreators({
    userLoginRequest: Auth.actions.userLoginRequest,
    userOAuthRequest: Auth.actions.userOAuthRequest,
  }, dispatch)
);

export type ILoginFormProps = IStateProps & IDispatchProps & IValues & IOwnProps;

export const LoginFormContainer = compose<any, any>(
  connect<IStateProps, IDispatchProps, IOwnProps>(mapState, mapDispatch),
  withLoader({ minHeight: 340 }),
  withFormik<IOwnProps & IDispatchProps, IValues, any>({
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
