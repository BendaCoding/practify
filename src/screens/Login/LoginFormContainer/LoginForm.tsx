import * as React from 'react';
import { TextInput, Button } from 'practify/components';
import { Form, Field } from 'formik';
import { Flex } from 'grid-styled';
import { ILoginFormProps } from './LoginForm.container';
import { FaGoogle, FaFacebook } from 'react-icons/lib/fa';

export const LoginForm: React.SFC<ILoginFormProps> = ({ toggleForm, handleSubmit, oAuthLogin }: ILoginFormProps) => {

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
            onClick={handleSubmit}
            label="Login"
          />

          <Button
            label="Not a Member? Register now."
            type="link"
            onClick={toggleForm}
          />

        </Flex>
      </Form>

      <hr />

      <Button
        label="Sign in with Google"
        onClick={oAuthLogin('google')}
        type="secondary"
        mr={2}
      >
        <FaGoogle />
      </Button>

      <Button
        label="Sign in with Facebook"
        onClick={oAuthLogin('facebook')}
        type="secondary"
      >
        <FaFacebook />
      </Button>

    </div>
  );
}
