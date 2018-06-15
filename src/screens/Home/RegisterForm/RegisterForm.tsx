import * as React from 'react';
import { TextInput, Button } from 'practify/components';
import { withRouter, RouteComponentProps } from 'react-router';
import { fire } from 'practify/firebase';

interface IRegisterFormProps extends RouteComponentProps<any> {
  onRegister: () => void;
  toggleLoginForm: () => void;
}

interface IRegisterFormState {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  passwordRepeat: string;
  [x: string]: any;
}

export class RegisterForm extends React.Component<IRegisterFormProps, IRegisterFormState> {

  constructor(props: IRegisterFormProps) {
    super(props);
    this.state = {
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      passwordRepeat: '',
    };
  }

  handleChange = (e: any): void => {
    this.setState({
      [e.target.name as any]: e.target.value,
    });
  }

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username,  password } = this.state; // firstname, lastname, email,
    fire.auth().createUserWithEmailAndPassword(username, password).then((u) => {
      console.log(u)
    }).catch((error: any) => {
      console.log(error);
    });
  }

  toggleForm = (e: any) => {
    e.preventDefault();
    this.props.toggleLoginForm();
  }

  render() {
    const { username, firstname, lastname, email, password, passwordRepeat } = this.state;

    return (
      <form onSubmit={this.onSubmit}>

        <h1>Register</h1>

        <TextInput
          name="email"
          value={email}
          onChange={this.handleChange}
          label="Email"
          type="email"
        />

        <TextInput
          name="password"
          value={password}
          onChange={this.handleChange}
          type="password"
          label="Password"
        />

        <TextInput
          name="passwordRepeat"
          value={passwordRepeat}
          onChange={this.handleChange}
          type="password"
          label="Repeat Password"
        />
        
        <TextInput
          name="username"
          value={username}
          onChange={this.handleChange}
          label="Username"
        />

        <TextInput
          name="firstname"
          value={firstname}
          onChange={this.handleChange}
          label="Firstname"
        />

        <TextInput
          name="lastname"
          value={lastname}
          onChange={this.handleChange}
          label="Lastname"
        />

        <div className="d-flex justify-content-between">
          <Button
            label="Register"
            onClick={this.onSubmit}
          />

          <Button
            label="Already registered? Sign in now."
            type="link"
            onClick={this.toggleForm}
          />
        </div>

      </form>
    );
  }
}

export default withRouter(RegisterForm);
