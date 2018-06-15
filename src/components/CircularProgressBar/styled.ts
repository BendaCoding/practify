import { styled, styledWithProps } from 'practify/theme';

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  ${props => props.onClick && `cursor: pointer;`}
`;

export const Background = styled.circle`
  fill: none;
  stroke: ${props => props.theme.colors.athensGrey};
`;

export const Progress = styledWithProps<ICommonProps>('circle')`
  fill: none;
  stroke: ${({ isRunning, theme: { colors }}) =>
    isRunning ? colors.curiousBlue : colors.lightGrey};
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: stroke 200ms ease-out;
`;

interface ICommonProps {
  isRunning: boolean;
}

export const Text = styledWithProps<ICommonProps>('div')`
  ${({ isRunning, theme: { colors, fontSizes }}) => `
    color: ${isRunning ? colors.vulcan : colors.athensGrey};
    font-size: ${fontSizes.h1};
  `}
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -60%);
  transition: color 200ms ease-out;
`;

export const Finished = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -60%);
  transition: color 200ms ease-out;
`;