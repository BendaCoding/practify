import React from 'react';
import Repeatable from 'react-repeatable';
import * as S from './styled';
import { BoxProps, CommonProps } from 'grid-styled';

export interface IButtonProps extends Partial<BoxProps & CommonProps> {
  type?: S.ButtonType;
  label?: string;
  onClick?: (e?: any) => void;
  shouldTriggerOnHold?: boolean;
  className?: string;
  disabled?: boolean;
  preventDefault?: boolean;
  icon?: React.Component;
  iconLeft?: boolean;
}

export const Button: React.SFC<IButtonProps> = ({
  type = 'primary',
  onClick,
  shouldTriggerOnHold = false,
  label = '',
  disabled = false,
  preventDefault = false,
  children,
  iconLeft = false,
  ref,
  ...rest
}) => {
  const handleClick = disabled
    ? null
    : preventDefault && onClick
      ? (e: any) => {
          e.preventDefault();
          onClick();
        }
      : onClick;

  const WrappedButton = () => (
    <S.Button type={type} onClick={handleClick} disabled={disabled} {...rest}>
      {!iconLeft && label}
      {children}
      {iconLeft && label}
    </S.Button>
  );

  if (!shouldTriggerOnHold) {
    return WrappedButton();
  }
  return (
    <Repeatable
      style={{ display: 'inline-block' }}
      onHold={handleClick}
      repeatDelay={450}
      repeatInterval={95}
    >
      {WrappedButton}
    </Repeatable>
  );
};
