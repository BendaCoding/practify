import React from 'react';
import { Container, Fade } from 'practify/components';
import { LoginFormContainer } from './LoginFormContainer';
import { RegisterFormContainer } from './RegisterFormContainer';
import { withState, withHandlers, compose } from 'recompose';

interface HomeScreenProps {
  showLoginForm: boolean;
  toggleForm: () => boolean;
}

export const HomeScreen: React.SFC<HomeScreenProps> = ({ showLoginForm, toggleForm }) => (
  <Container>
    <Fade trigger={showLoginForm}>
      {showLoginForm ? (
        <LoginFormContainer
          toggleForm={toggleForm}
        />
      ) : (
        <RegisterFormContainer
        toggleForm={toggleForm}
        />
      )}
    </Fade>
  </Container>
);

export default compose(
  withState(
    'showLoginForm', 'toggleForm', true,
  ),
  withHandlers({
    toggleForm: ({ toggleForm, showLoginForm }) => () => toggleForm(!showLoginForm),
  }),
)(HomeScreen);
