import * as i18next from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import { appDE } from './de/translation';

export const i18instance = i18next.use(reactI18nextModule).init({
  debug: false,
  defaultNS: 'translations',
  fallbackLng: 'de',
  interpolation: {
    escapeValue: false,
  },
  lng: 'de',
  ns: ['translations'],
  react: {
    wait: true,
  },
} as i18next.InitOptions);

i18instance.addResourceBundle('de', 'translations', appDE);

export const t = i18instance.t;
