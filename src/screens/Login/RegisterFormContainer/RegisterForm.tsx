import * as React from 'react';
import { Form, Field } from 'formik';
import { TextInput, Button } from 'practify/components';
import { IRegisterFormProps } from './RegisterForm.container';
import { Flex } from 'grid-styled';

export const RegisterForm: React.SFC<IRegisterFormProps> = ({
  t,
  values,
  errors,
  touched,
  isSubmitting,
  toggleForm,
}) => (
  <Form>
    <h1>Register</h1>

    <Field
      name="email"
      type="email"
      label={t('home.registerForm.email')}
      error={touched.email && errors.email}
      component={TextInput}
    />

    <Field
      name="password"
      type="password"
      label={t('home.registerForm.password')}
      error={touched.password && errors.password}
      component={TextInput}
    />

    <Field
      name="passwordRepeat"
      type="password"
      label={t('home.registerForm.repeatPassword')}
      error={touched.passwordRepeat && errors.passwordRepeat}
      component={TextInput}
    />
    
    <Field
      name="nickname"
      label={t('home.registerForm.nickname')}
      component={TextInput}
      error={touched.nickname && errors.nickname}
    />

    <Field
      name="firstname"
      label={t('home.registerForm.firstname')}
      component={TextInput}
    />

    <Field
      name="lastname"
      label={t('home.registerForm.lastname')}
      component={TextInput}
    />

    <Flex justifyContent="space-between">
      <Button
        disabled={isSubmitting}
        label={t('home.registerForm.register')}
      />

      <Button
        label={t('home.registerForm.alreadyRegistered')}
        type="link"
        onClick={toggleForm}
        preventDefault
      />
    </Flex>
  </Form>
);