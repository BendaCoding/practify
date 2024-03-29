import { styled } from 'practify/theme';

interface BadgeProps {
  color: keyof ThemeInterface['infoPalette'];
}

export const Badge = styled<BadgeProps, any>('div')`
  min-width: 45px;
  height: 17px;
  padding:5px;
  display: inline-flex;
  color: ${({ theme }) => theme.palette.white};
  background: ${({ theme, color }) => theme.infoPalette[color]};
  align-items:center;
  justify-content:center;
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin: 2px;
  border-radius: 1rem;
  cursor: default;
  user-select: none;
`;
