import React from 'react';
import { Icon } from '.';

export const IconPiano: React.SFC<{}> = props => {
  return (
    <Icon
      d="M39,16h-8c-3.86,0-7-3.141-7-7c0-4.96-4.04-9-9-9H9C4.04,0,0,4.04,0,9v38h2v1h44v-1h2V25C48,20.04,43.96,16,39,16z M8,46H4 V30h3v9h1V46z M14,46h-4v-7h1v-9h2v9h1V46z M20,46h-4v-7h1v-9h3V46z M26,46h-4V30h3v9h1V46z M32,46h-4v-7h1v-9h2v9h1V46z M38,46h-4 v-7h1v-9h2v9h1V46z M44,46h-4v-7h1v-9h3V46z"
      {...props}
    />
  );
};
