import { styled, theme, css } from 'practify/theme';

export const IconWrapper = styled('span')`
  position: relative;
  top: -2px;
  margin: 0 4px 0 4px;
`;


export const Button = styled<any,any>('button')`

  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.typo.contrast};
  font-size: ${({ theme }) => theme.fontSizes.body};
  padding: .6em 3em;
  margin: .5em;
  border: none;
  cursor: pointer
  text-transform: uppercase;
  ${({inverted}) => inverted && css`background:rgba(0,0,0,0); color:${theme.colors.primary}; font-weight:bold; border: 1px solid ${theme.colors.primary};`}
  ${({inverted}) => !inverted && css`background:${theme.colors.primary};`}
  border-radius: 20px;
  transition: .25s all;

  &:hover{
    background: ${({ theme }) => theme.colors.button.hover};
    ${({inverted}) => inverted && css`color:${theme.colors.typo.contrast};`}
  }

  &:active {
    background: ${({ theme }) => theme.colors.button.active};
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    font-size: ${({ theme }) => theme.fontSizes.small};
    grid-column: 1/2;
    padding: .6em 3em;
    border-radius: 15px;
  }
`;