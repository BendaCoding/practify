import { Box } from 'grid-styled';
import { breakpoint, styled, css } from 'practify/theme';
import { space } from 'styled-system';

export const IconWrapper = styled('span')`
  position: relative;
  top: -2px;
  margin: 0 4px 0 4px;
`;

export type ButtonType = 'primary'
| 'secondary'
| 'tertiary'
| 'link'

interface IButtonProps {
  type: ButtonType
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
  user-select: none;
  ${space}

  ${({ theme, disabled }) => disabled && css`
    background: ${theme.colors.button.disabled};
    cursor: default;
  `};
  
  /**
   * Primary
   */
  ${({ theme, type, disabled }) => type === 'primary' && css`

    ${!disabled && css`
      &:hover {
        background: ${theme.colors.button.hover};
      }

      &:active {
        background: ${theme.colors.button.active};
      }
    `};
  `}

  /**
   * Secondary
   */
  ${({ theme, type, disabled }) => type === 'secondary' && css`
    background: none;
    color: ${theme.colors.primary};
    font-weight: bold;
    border: 1px solid ${theme.colors.primary};

    ${!disabled ? css`
      &:hover {
        background: ${theme.colors.button.hover};
      }

      &:active {
        background: ${theme.colors.button.active};
      }
    `
    : css`
      color: ${theme.colors.button.disabled};
      border-color: ${theme.colors.button.disabled};
    `};
  `}

  /**
   * Tertiary
   */
  ${({ theme, type, disabled }) => type === 'tertiary' && css`
    background: none;
    color: ${theme.colors.primary};
    font-weight: bold;
    border: 1px dashed ${theme.colors.primary};

    ${!disabled ? css`
      &:hover {
        color: ${theme.colors.button.hover};
        border-color: ${theme.colors.button.hover};
      }

      &:active {
        color: ${theme.colors.button.active};
        border-color: ${theme.colors.button.active};
      }
    `
    : css`
      color: ${theme.colors.button.disabled};
      border-color: ${theme.colors.button.disabled};
    `};
  `}
  
  /**
   * Link
   */
  ${({ theme, type, disabled }) => type === 'link' && css`
    background: none;
    color: ${theme.colors.button.primary};
    text-transform: none;
    position: relative;
    height: auto;
    padding: 0;
    transition: 130ms transform ease-out, 130ms color ease-out;
      
    ${!disabled && css`
      &:hover {
        transform: scale(1.08);
      }
      
      &:active {
        color: ${theme.colors.button.hover};
      }
    `};
  `}

  ${breakpoint.md} {
    padding: .6em 3em;
    border-radius: 2em;
  }
`;
