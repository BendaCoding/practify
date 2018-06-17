import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Auth } from 'practify/store';
import { withFormik } from 'formik';
import { compose } from 'recompose';
import { LoginForm } from './LoginForm';
import { withLoader } from 'practify/components';

interface IStateProps {
  isLoading: boolean;
}

interface IDispatchProps {
  userLoginRequest: (credentials: IAuthRegisterRequest) => void;
}

interface IOwnProps {
  toggleForm: () => void;
  userLoginRequest: (credentials: IAuthLoginRequest) => void;
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
  }, dispatch)
);

export type ILoginFormProps = IStateProps & IDispatchProps & IValues & IOwnProps;

export const LoginFormContainer = compose<any, any>(
  connect<IStateProps, IDispatchProps, IOwnProps>(mapState, mapDispatch),
  withLoader({ minHeight: 340 }),
  withFormik<IOwnProps, IValues, any>({
    mapPropsToValues: () => ({
      email: '',
      password: '',
    }),
    handleSubmit: ({ email, password }, { props: { userLoginRequest }}) => {
      userLoginRequest({ email, password });
    },
  }),
)(LoginForm);
