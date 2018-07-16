import { Box } from 'grid-styled';
import { breakpoint, styled, css } from 'practify/theme';
import { space } from 'styled-system';

export const IconWrapper = styled('span')`
  position: relative;
  top: -2px;
  margin: 0 4px 0 4px;
`;

interface IButtonProps {
  type: 'primary'
  | 'secondary'
  | 'link';
}

export const Button = styled<IButtonProps, any>(Box)`
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
  border-radius: 2em;
  transition: .25s all;

  ${space}
  
  ${({ theme, type }) => type === 'primary' && css`
    &:hover {
      background: ${theme.colors.button.hover};
    }

    &:active {
      background: ${theme.colors.button.active};
    }
  `}

  ${({ theme, type }) => type === 'secondary' && css`
    background: none;
    color: ${theme.colors.primary};
    font-weight: bold;
    border: 1px solid ${theme.colors.primary};

    &:hover {
      background: ${theme.colors.button.hover};
    }

    &:active {
      background: ${theme.colors.button.active};
    }
  `}
  
  ${({ theme, type }) => type === 'link' && css`
    background: none;
    color: ${theme.colors.button.primary};
    text-transform: none;
    position: relative;
    height: auto;
    padding: 0;
    transition: 130ms transform ease-out;

    &:hover {
      transform: scale(1.08);
    }
    
    &:active {
      transition: 60ms transform ease-out;
      transform: scale(1);
    }
  `}

  ${breakpoint.md} {
    padding: .6em 3em;
    border-radius: 2em;
  }
`;
