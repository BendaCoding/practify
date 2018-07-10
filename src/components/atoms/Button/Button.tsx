import * as React from "react";
import Repeatable from "react-repeatable";
import * as S from "./styled";

export interface IButtonProps {
  type?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  label: string;
  inverted?: boolean;
  onClick?: (e?: any) => void;
  shouldTriggerOnHold?: boolean;
  className?: string;
  disabled?: boolean;
  preventDefault?: boolean;
  icon?: React.Component;
  iconLeft?: boolean;
}

export const Button: React.SFC<IButtonProps> = ({
  type = "primary",
  onClick,
  shouldTriggerOnHold = false,
  label,
  className,
  inverted = false,
  disabled,
  preventDefault = false,
  children,
  iconLeft = false
}) => {

  const handleClick =
    preventDefault && onClick
      ? (e: any) => {
          e.preventDefault();
          onClick();
        }
      : onClick;

  const WrappedButton = (
    <S.Button disabled={disabled} onClick={handleClick} inverted={inverted}>
      {!iconLeft && label}

      {children && <S.IconWrapper>{children}</S.IconWrapper>}

      {iconLeft && label}
    </S.Button>
  );

  if (!shouldTriggerOnHold) {
    return WrappedButton;
  }

  return (
    <Repeatable
      style={{ display: "inline-block" }}
      onHold={handleClick}
      repeatDelay={450}
      repeatInterval={95}
    >
      {WrappedButton}
    </Repeatable>
  );
};
