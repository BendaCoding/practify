import * as React from 'react';
import { TextInput, Button } from 'practify/components';
import { Form, Field } from 'formik';
import { Flex } from 'grid-styled';
import { ILoginFormProps } from './LoginForm.container';

export const LoginForm: React.SFC<ILoginFormProps> = ({ email, password, toggleForm, userLoginRequest }: ILoginFormProps) => {

  const onLoginWithFacebook = () => {
    // a
  };

  return (
    <div>
      <Form>

        <h1>Login</h1>

        <Field
          name="email"
          label="Email"
          placeholder="Email"
          component={TextInput}
        />

        <Field
          name="password"
          type="password"
          label="Password"
          component={TextInput}
        />

        <Flex justifyContent="space-between">
          <Button
            label="Login"
          />

          <Button
            label="Not a Member? Register now."
            type="link"
            onClick={toggleForm}
            preventDefault
          />

        </Flex>
      </Form>

      <hr />

      <Button
        label="Sign in with Google"
        type="dark"
        className="mr-2"
      />

      <Button
        label="Sign in with Facebook"
        onClick={onLoginWithFacebook}
        type="dark"
      />

    </div>
  );
}
