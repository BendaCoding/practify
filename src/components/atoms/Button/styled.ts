import { Box } from 'grid-styled';
import { breakpoint, styled, css } from 'practify/theme';
import { space } from 'styled-system';

export const IconWrapper = styled('span')`
  position: relative;
  top: -2px;
  margin: 0 4px 0 4px;
`;

export interface IButtonProps {
  design?:
  | 'primary'
  | 'secondary'
  | 'link';
}

export const Button = styled<any,any>(Box)`

  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.typo.contrast};
  font-size: ${({ theme }) => theme.fontSizes.body};
  text-transform: uppercase;
  padding: .6em 3em;
  border: none;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  transition: .25s all;

  ${space}
  
  ${({ theme, type }) => type === 'secondary' && css`
    background: none;
    color: ${theme.colors.primary};
    font-weight: bold;
    border: 1px solid ${theme.colors.primary};
  `}
  
  ${({ theme, type }) => type === 'link' && css`
    background: none;
    color: ${theme.colors.primary};
    border: none;
  `}

  &:hover {
    background: ${({ theme }) => theme.colors.button.hover};
    ${({ theme, inverted }) => inverted && css`
      color: ${theme.colors.typo.contrast};
    `}
  }

  &:active {
    background: ${({ theme }) => theme.colors.button.active};
  }

  ${breakpoint.md} {
    padding: .6em 3em;
    border-radius: 15px;
  }
`;
