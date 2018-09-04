import React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './layout/App';
import 'bootstrap/dist/css/bootstrap.css';

import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from 'styled-components';
import { baseTheme } from 'practify/theme';

import { Provider } from 'react-redux';

import { store, history } from 'practify/store';

import { I18nextProvider } from 'react-i18next';
import { i18instance } from './translation/i18n';
import { baseStyles } from './layout/base-styles';

/* inject global styles for body */
baseStyles();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={baseTheme}>
        <I18nextProvider i18n={i18instance}>
          <App />
        </I18nextProvider>
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
