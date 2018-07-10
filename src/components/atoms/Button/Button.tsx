import * as React from 'react';
import Repeatable from 'react-repeatable';
import * as S from './styled';
import { SpaceProps } from 'styled-system';

export interface IButtonProps extends S.IButtonProps, SpaceProps {
  label: string;
  inverted?: boolean;
  onClick?: (e?: any) => void;
  shouldTriggerOnHold?: boolean;
  className?: string;
  disabled?: boolean;
  shouldPreventDefault?: boolean;
  icon?: React.Component;
  isIconLeft?: boolean;
}

export const Button: React.SFC<IButtonProps> = ({
  design = 'primary',
  onClick,
  shouldTriggerOnHold = false,
  label,
  disabled,
  shouldPreventDefault = false,
  children,
  isIconLeft = false,
  ...rest
}) => {

  const handleClick =
    shouldPreventDefault && onClick
      ? (e: any) => {
          e.preventDefault();
          onClick();
        }
      : onClick;

  const WrappedButton = (
    <S.Button disabled={disabled} onClick={handleClick} design={design} {...rest}>
      
      {!isIconLeft && label}
      {children && <S.IconWrapper>{children}</S.IconWrapper>}
      {isIconLeft && label}
      
    </S.Button>
  );

  if (!shouldTriggerOnHold) {
    return WrappedButton;
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
