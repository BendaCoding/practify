import * as React from 'react';
import { theme } from 'practify/theme';

export interface IIconProps {
  color?: string;
  size?: string;
  transition?: string;
  className?: string;
  d:string;
}

export const Icon: React.SFC<IIconProps> = ({
  color = theme.colors.spinner.dark,
  size = '48px',
  transition = '',
  className = '',
  d= ''
}) => {
  const style = transition ? { style: { transition } } : {};

  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill={color}
      className={className}
      {...style}
    >
      <defs />
      <path
        id="a"
        d={d}
      />
    </svg>
  );
};
