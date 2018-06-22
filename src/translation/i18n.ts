import * as i18next from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import { appEN } from './en/translations';

export const i18instance = i18next.use(reactI18nextModule).init({
  debug: false,
  defaultNS: 'translations',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  lng: 'en',
  ns: ['translations'],
  react: {
    wait: true,
  },
} as i18next.InitOptions);

i18instance.addResourceBundle('en', 'translations', appEN);

export const t = i18instance.t;
