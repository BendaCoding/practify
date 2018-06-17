import * as React from 'react';
import { Form, Field } from 'formik';
import { TextInput, Button } from 'practify/components';
import { IRegisterFormProps } from './RegisterForm.container';
import { Flex } from 'grid-styled';

export const RegisterForm: React.SFC<IRegisterFormProps> = ({ t, values, handleChange, toggleForm }) => (
  <Form>
    <h1>Register</h1>

    <Field
      name="email"
      type="email"
      label={t('test')}
      component={TextInput}
    />

    <Field
      name="password"
      type="password"
      label="Password"
      component={TextInput}
    />

    <Field
      name="passwordRepeat"
      type="password"
      label="Repeat Password"
      component={TextInput}
    />
    
    <Field
      name="username"
      label="Username"
      component={TextInput}
    />

    <Field
      name="firstname"
      label="Firstname"
      component={TextInput}
    />

    <Field
      name="lastname"
      label="Lastname"
      component={TextInput}
    />

    <Flex justifyContent="space-between">
      <Button
        label="Register"
      />

      <Button
        label="Already registered? Sign in now."
        type="link"
        onClick={toggleForm}
        preventDefault
      />
    </Flex>
  </Form>
);