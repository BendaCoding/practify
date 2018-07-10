import * as React from 'react';
import { theme } from 'practify/theme';
import { Icon } from '.';

export const IconPick: React.SFC<{}> = props => {
  return (
    <Icon
      d="M24,4C13.74,4,6,9.16,6,16c0,8.9,12.28,28,18,28c6.06,0,18-18.58,18-28C42,9.16,34.26,4,24,4z M24,8c8.24,0,14,3.7,14,9h-2 c0-4.06-5.05-7-12-7V8z M25,36.06c1.58,0,5.51-4.77,9.1-12.479l1.811,0.84C34.86,26.7,29.35,38.06,25,38.06V36.06z" 
      {...props}
    />
  );
};