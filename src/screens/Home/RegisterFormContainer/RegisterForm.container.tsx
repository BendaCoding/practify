import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Auth } from 'practify/store';
import { compose } from 'recompose';
import { withFormik, InjectedFormikProps } from 'formik';
import { translate, InjectedTranslateProps } from 'react-i18next';
import { RegisterForm } from './RegisterForm';
// import Yup from 'yup';

interface IOwnProps {
  toggleForm: () => void;
  userRegisterRequest: (credentials: IAuthRegisterRequest) => void;
}

interface IValues {
  email: string;
  password: string;
  passwordRepeat: string;
  username: string;
  firstname: string;
  lastname: string;
}

interface IDispatchProps {
  userRegisterRequest: (credentials: IAuthRegisterRequest) => void;
}

// type IProps = IDispatchProps & IOwnProps & any;

const mapDispatch = (dispatch: Dispatch) =>
  bindActionCreators({
    userRegisterRequest: Auth.actions.userRegisterRequest,
  }, dispatch,
);

export type IRegisterFormProps = InjectedFormikProps<IOwnProps, IValues> & InjectedTranslateProps

export const RegisterFormContainer = compose<any, any>(
  translate(),
  connect<{}, IDispatchProps, IOwnProps>(undefined, mapDispatch),
  withFormik<IOwnProps, IValues, any>({
    mapPropsToValues: () => ({
      email: '',
      password: '',
      passwordRepeat: '',
      username: '',
      firstname: '',
      lastname: '',
    }),
    handleSubmit: ({ email, password}, { props: { userRegisterRequest } }) => {
      userRegisterRequest({ email, password });
    },
  }),
)(RegisterForm);
