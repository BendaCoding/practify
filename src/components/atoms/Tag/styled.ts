import { styled } from 'practify/theme';

interface IBadgeProps {
  color: keyof ITheme['infoPalette'];
}

export const Badge = styled<IBadgeProps, any>('div')`
  width: 50px;
  height: 20px;
  display: inline-block;
  color: ${({ theme }) => theme.palette.white}
  background: ${({ theme, color }) => theme.infoPalette[color]};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.small};
  padding-top: 2px;
  margin: 5px;
  border-radius: ${({ theme }) => theme.borders.borderRadius};
  cursor: default;
  user-select: none;
`;