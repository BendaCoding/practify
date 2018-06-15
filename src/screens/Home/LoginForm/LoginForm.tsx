import * as React from 'react';
import { TextInput, Button } from 'practify/components';
import { withRouter, RouteComponentProps } from 'react-router';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userLoginRequest } from 'practify/store';

interface ILoginFormProps extends RouteComponentProps<any> {
  toggleLoginForm: () => void;
  userLoginRequest: any;
}

interface ILoginFormState {
  email: string;
  password: string;
  [x: string]: any;
}

const noop = (e: any) => {
  e.preventDefault();
}

const mapDispatch = (dispatch: Dispatch) => (
  bindActionCreators({
    userLoginRequest,
  }, dispatch)
);

export class LoginForm extends React.Component<ILoginFormProps, ILoginFormState> {

  constructor(props: ILoginFormProps) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = ({ target }: any): void => {
    this.setState({
      [target.name]: target.value,
    });
  }

  onLoginWithEmail = (e: any) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.userLoginRequest({ email, password });
  }

  onLoginWithFacebook = () => {
    // a
  };

  toggleLoginForm = (e: any) => {
    e.preventDefault();
    this.props.toggleLoginForm();
  }

  render() {
    const { email, password } = this.state;

    return (
    <form onSubmit={this.onLoginWithEmail}>

      <h1>Login</h1>

      <TextInput
        name="email"
        label="Email"
        placeholder="Username"
        value={email}
        onChange={this.handleChange}
      />

      <TextInput
        type="password"
        label="Password"
        placeholder=""
        name="password"
        value={password}
        warning="dudam"
        onChange={this.handleChange}
      />

      <div className="d-flex justify-content-between">
        <Button
          label="Login"
          onClick={this.onLoginWithEmail}
        />

        <Button
          label="Not a Member? Register now."
          type="link"
          onClick={this.toggleLoginForm}
        />

      </div>

      <hr />

      <Button
        label="Sign in with Google"
        onClick={noop}
        type="dark"
        className="mr-2"
      />

      <Button
        label="Sign in with Facebook"
        onClick={this.onLoginWithFacebook}
        type="dark"
      />

    </form>
    );
  }
}

export default connect(undefined, mapDispatch)(withRouter(LoginForm));
