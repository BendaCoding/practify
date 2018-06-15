import * as React from 'react';

interface IButtonProps {
  type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
  label: string;
  onClick: (e?: any) => void;
  className?: string;
}

export const Button: React.SFC<IButtonProps> =
({
  type = 'primary',
  onClick,
  label,
  className,
}) => {

  const buttonClassNames = `btn btn-${type} ${className}`;
  return (
    <button className={buttonClassNames} onClick={onClick}>
      {label}
    </button>
  );
};
