import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Auth } from 'practify/store';
import { compose } from 'recompose';
import { withFormik, InjectedFormikProps } from 'formik';
import { translate, InjectedTranslateProps } from 'react-i18next';
import { RegisterForm } from './RegisterForm';
import * as Yup from 'yup';
import { users } from 'practify/firebase';

interface OwnProps extends InjectedTranslateProps {
  toggleForm: () => void;
  userRegisterRequest: (credentials: IAuthRegisterRequest) => void;
}

interface Values {
  email: string;
  password: string;
  passwordRepeat: string;
  nickname: string;
  firstname: string;
  lastname: string;
}

interface DispatchProps {
  userRegisterRequest: (credentials: IAuthRegisterRequest) => void;
}

// type IProps = IDispatchProps & IOwnProps & any;

const mapDispatch = (dispatch: Dispatch) =>
  bindActionCreators({
    userRegisterRequest: Auth.actions.userRegisterRequest,
  }, dispatch,
);

export type IRegisterFormProps = InjectedFormikProps<OwnProps, Values>

export const RegisterFormContainer = compose<any, any>(
  translate(),
  connect<{}, DispatchProps, OwnProps>(undefined, mapDispatch),
  withFormik<OwnProps, Values, any>({
    mapPropsToValues: ({ t }) => ({
      email: '',
      password: '',
      passwordRepeat: '',
      nickname: '',
      firstname: '',
      lastname: '',
    }),
    validationSchema: (props: any) => Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().min(5).required(),
      nickname: Yup.string().test(
        'nickname-unique',
        'Your Nickname is already taken :(', // TODO: introduce i18n for yup validations https://github.com/jquense/yup#using-a-custom-locale-dictionary
        (value: string): Promise<boolean> => users.nicknameIsAvailable(value),
      ),
    }),
    handleSubmit: ({
      email,
      password,
      passwordRepeat,
      nickname,
      firstname,
      lastname,
    }, {
      setErrors,
      setSubmitting,
      props: { userRegisterRequest, t },
    }) => {
      const translationNamespace = 'home.registerForm.errors';
      if (password !== passwordRepeat) {
        setErrors({ password: t(`${translationNamespace}.passwordsDoNotMatch`) });
        setSubmitting(false);
      } else {
        userRegisterRequest({ email, password, nickname, firstname, lastname });
      }
    },
  }),
)(RegisterForm);
