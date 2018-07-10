import * as React from 'react';
import * as S from './styled';
import { withTheme, ThemeProps } from 'styled-components';

export interface IHeroSectionProps {
  ratio: number;
  gradient: 'left' | 'right' | 'top' | 'bottom' | false;
  gradientColor: string;
  color: string;
  backgroundUrl: string;
  backgroundFilter: string | false;
}

type OwnProps = Partial<IHeroSectionProps> & ThemeProps<ITheme>

export const SplashSection: React.SFC<OwnProps> = ({
  theme,
  children,
  ratio = 16/7,
  gradient = 'top',
  gradientColor = 'background',
  backgroundUrl = '',
  color = 'primary',
}) => (
  <S.Wrapper
    ratio={ratio}
    gradient={gradient}
    gradientColor={gradientColor}
    backgroundUrl={backgroundUrl}
    backgroundFilter="blur(1px) sepia(.5)"
    color={color}
  >
    <S.Content>{children}</S.Content>
  </S.Wrapper>
);

export default withTheme(SplashSection);
