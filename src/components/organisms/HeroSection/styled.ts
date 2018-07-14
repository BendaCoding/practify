import { styled, css, mixins } from 'practify/theme';
import { IHeroSectionProps } from './HeroSection';

type IWrapperProps =
  Pick<IHeroSectionProps,
  'gradient'
  | 'gradientColor'
  | 'ratio'
  | 'backgroundUrl'
  | 'color'
  | 'backgroundFilter'>

const gradientDirectionMap = {
  'left': 'right',
  'right': 'left',
  'top': 'bottom',
  'bottom': 'top',
}

const absolutePosition = `
  ${mixins.absoluteFill()}
  display: block;
  content: '';
`;

export const Wrapper = styled<IWrapperProps, any>('div')`
  width: 100%;
  height: 0;
  position: relative;
  color: ${({ theme, color }) => theme.colors.typo[color]};
  font-size: ${({ theme}) => theme.fontSizes.h1};
  padding-top: ${({ ratio }) => 100 / ratio}%;
  overflow: hidden;

  ${({ backgroundUrl, backgroundFilter, theme }) => backgroundUrl && css`
    &:before {
      ${absolutePosition}
      background-image: url("${backgroundUrl}");
      background-size: cover;
      ${backgroundFilter && `filter: ${backgroundFilter}`}
    }
  `}

  ${({ theme, gradient, gradientColor }) => gradient && css`
    &:after {
      ${absolutePosition}
      background-image: linear-gradient(
        to ${gradientDirectionMap[gradient]},
        ${theme.colors[gradientColor]}00 0,
        ${theme.colors[gradientColor]} 100%
      );
    }
  `}
`;

export const Content = styled.div`
  ${absolutePosition}
  z-index: 1;
  display: grid;
  align-items: center;
`;
