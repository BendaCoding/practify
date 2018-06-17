import * as React from 'react';

interface IButtonProps {
  type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
  label: string;
  onClick?: (e?: any) => void;
  className?: string;
  preventDefault?: boolean;
}

export const Button: React.SFC<IButtonProps> =
({
  type = 'primary',
  onClick,
  label,
  className,
  preventDefault = false,
}) => {

  const buttonClassNames = `btn btn-${type} ${className}`;

  const handleClick = preventDefault && onClick
    ? (e: any) => {
        e.preventDefault();
        onClick();
      }
    : onClick

  return (
    <button className={buttonClassNames} onClick={handleClick}>
      {label}
    </button>
  );
};
