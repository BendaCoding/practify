import { PractifyLogo as Logo } from 'practify/components';
import { styled, styledWithProps, css } from 'practify/theme';
import { StyledFunction } from 'styled-components';
import { IPractifyLogoProps } from './../../../../../components/atoms/PractifyLogo/PractifyLogo';

interface IProps {
  active?: boolean;
}


export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 40px 0;
  flex: 1 1 0;
`;
interface IScalerProps {
  size: number;
}

export const Scaler = styledWithProps<IScalerProps>('div')`
  transform: scale(${({ size }) => size});
  transition: 235ms transform ${({ theme }) => theme.transitions.easeOutElastic};
`;

export const Controls = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
`;

interface IIconProps {
  disabled: boolean;
}

const iconStyles = css`
  display: flex;
  height: 50%;
  color: ${({ theme }) => theme.colors.light};
  opacity: 0;
  align-items: flex-start;
  justify-content: center;
  transform: scale(0.7);
  transition: 300ms all ease;
  cursor: pointer;

  &:hover {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Plus = styledWithProps<IIconProps>('div')`
  ${iconStyles}

  ${({ disabled, theme }) => disabled && `
    color: ${theme.colors.disabled}
    cursor: default;
  `}
  `;
  
  export const Minus = styledWithProps<IIconProps>('div')`
  ${iconStyles}
  align-items: flex-end;

  &:hover {
    opacity: 1;
    transform: scale(1);
  }
  
  ${({ disabled, theme }) => disabled && `
    color: ${theme.colors.disabled}
    cursor: default;
  `}
  `;