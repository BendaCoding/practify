import { styled, css, mixins } from 'practify/theme';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 40px 0;
  flex: 1 1 0;
`;
interface ScalerProps {
  size: number;
}

export const Scaler = styled<ScalerProps, any>('div')`
  transform: scale(${({ size }) => size});
  transition: 235ms transform ${({ theme }) => theme.transitions.easeOutElastic};
`;

export const Controls = styled.div`
  ${mixins.absoluteFill()}
  display: flex;
  flex-direction: column;
`;

interface IconProps {
  disabled: boolean;
}

const iconStyles = css`
  display: flex;
  height: 50%;
  color: ${({ theme }) => theme.colors.dimmed};
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

export const Plus = styled<IconProps, any>('div')`
  ${iconStyles};

  ${({ disabled, theme }) => disabled && `
    color: ${theme.colors.disabled}
    cursor: default;
  `}
  `;
  
  export const Minus = styled<IconProps, any>('div')`
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
