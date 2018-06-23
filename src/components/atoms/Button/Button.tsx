import * as React from 'react';
import Repeatable from 'react-repeatable'; 
import * as S from './styled';

export interface IButtonProps {
  type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
  label: string;
  onClick?: (e?: any) => void;
  shouldTriggerOnHold?: boolean;
  className?: string;
  disabled?: boolean;
  preventDefault?: boolean;
  icon?: React.Component;
  iconLeft?: boolean;
}

export const Button: React.SFC<IButtonProps> =
({
  type = 'primary',
  onClick,
  shouldTriggerOnHold = false,
  label,
  className,
  disabled,
  preventDefault = false,
  children,
  iconLeft = false,
}) => {

  const buttonClassNames = `btn btn-${type} ${className}`;

  const handleClick = preventDefault && onClick
    ? (e: any) => {
        e.preventDefault();
        onClick();
      }
    : onClick
  
  const WrappedButton = (
    <button disabled={disabled} className={buttonClassNames} onClick={handleClick}>
      
      {!iconLeft && label}

      <S.IconWrapper>
        {children}
      </S.IconWrapper>

      {iconLeft && label}

    </button>
  );

  if (!shouldTriggerOnHold) {
    return WrappedButton;
  }

  return (
    <Repeatable
      style={{display: 'inline-block'}}
      onHold={handleClick}
      repeatDelay={450}
      repeatInterval={95}
    >
      {WrappedButton}
    </Repeatable>
  );
};
