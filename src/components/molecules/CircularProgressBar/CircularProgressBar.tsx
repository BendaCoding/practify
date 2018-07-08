import * as React from 'react';
import * as S from './styled';
import { theme } from 'practify/theme';
import { FaCheck } from 'react-icons/lib/fa';
import { Animate } from '../../atoms';

interface ICircularProgressBarProps {
  progress: number;
  text?: string;
  size?: number;
  strokeWidth?: number;
  isRunning: boolean;
  finished: boolean;
  onClick?: () => void;
}

export const CircularProgressBar: React.SFC<ICircularProgressBarProps> = ({
  size = 250,
  strokeWidth = 14,
  progress,
  text,
  isRunning,
  finished = false,
  onClick = () => null,
}) => {
  // SVG centers the stroke width on the radius, subtract out so circle fits in square
  const radius = (size - strokeWidth) / 2;
  // Enclose cicle in a circumscribing square
  const viewBox = `0 0 ${size} ${size}`;
  // Arc length at 100% coverage is the circle circumference
  const dashArray = radius * Math.PI * 2;
  // Scale 100% coverage overlay with the actual percent
  const dashOffset = dashArray - dashArray * progress / 100;

  return (
    <S.Wrapper onClick={onClick}>
      <svg
          width={size}
          height={size}
          viewBox={viewBox}>

          <S.Background
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={`${strokeWidth}px`} />

          <S.Progress
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={`${strokeWidth}px`}
            // Start progress marker at 12 O'Clock
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
            style={{
              strokeDasharray: dashArray,
              strokeDashoffset: dashOffset,
            }}
            isRunning={isRunning} />
      </svg>

      {finished
        ?
          <S.Finished>
            <Animate animation="bounceIn" duration={750}>
              <FaCheck size="36px" color={theme.colors.success} />
            </Animate>
          </S.Finished>
        :
          <S.Text isRunning={isRunning}>
              {text}
          </S.Text>
      }

    </S.Wrapper>
  );
};
