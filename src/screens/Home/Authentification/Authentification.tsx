import * as React from 'react';

import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';

interface IAuthentificationState {
  showLoginForm: boolean;
}
export class Authentification extends React.Component<{}, IAuthentificationState> {

  constructor(props: any) {
    super(props);
    this.state = {
      showLoginForm: true,
    };
  }

  toggleLoginForm = () => {
    this.setState({ showLoginForm: !this.state.showLoginForm });
  }

  onLogin = () => {
    // action
  }

  onRegister = () => {
    // action
  }

  render() {
    const { showLoginForm } = this.state;

    return (
      <div>
        {
          showLoginForm
          ? <LoginForm
              toggleLoginForm={this.toggleLoginForm}
              />
          : <RegisterForm
              onRegister={this.onRegister}
              toggleLoginForm={this.toggleLoginForm}
            />
        }

      </div>
    );
  }
}
