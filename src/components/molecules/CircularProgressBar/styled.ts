import { styled, keyframes } from 'practify/theme';

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  ${props => props.onClick && 'cursor: pointer;'}
`;

export const Background = styled.circle`
  fill: none;
  stroke: ${props => props.theme.palette.athensGrey};
`;

interface CommonProps {
  isRunning: boolean;
  size:number;
}

export const Progress = styled<CommonProps, any>('circle')`
  fill: none;
  stroke: ${({ isRunning, theme: { palette }}) =>
    isRunning ? palette.curiousBlue : palette.lightGrey};
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: stroke 200ms ease-out;
`;



export const Text = styled<CommonProps, any>('div')`
  ${({ isRunning, size, theme: { palette, fontSizes }}) => `
    color: ${isRunning ? palette.vulcan : palette.athensGrey};
    font-size: ${size/4 + 'px'};
  `}
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
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
