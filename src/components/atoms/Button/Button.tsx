import * as React from 'react';
import Repeatable from 'react-repeatable'; 

export interface IButtonProps {
  type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
  label: string;
  onClick?: (e?: any) => void;
  shouldTriggerOnHold?: boolean;
  className?: string;
  preventDefault?: boolean;
}

export const Button: React.SFC<IButtonProps> =
({
  type = 'primary',
  onClick,
  shouldTriggerOnHold = false,
  label,
  className,
  preventDefault = false,
}) => {

  const buttonClassNames = `btn btn-${type} ${className}`;

  // const handleClick = preventDefault && onClick
  //   ? (e: any) => {
  //       e.preventDefault();
  //       onClick();
  //     }
  //   : onClick
  
  const WrappedButton = (
    <button className={buttonClassNames} onClick={onClick}>
      {label}
    </button>
  );

  if (!shouldTriggerOnHold) {
    return WrappedButton;
  }

  return (
    <Repeatable
      style={{display: 'inline-block'}}
      onHold={onClick}
      repeatDelay={450}
      repeatInterval={95}
    >
      {WrappedButton}
    </Repeatable>
  );
};
