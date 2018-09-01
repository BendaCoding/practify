import * as React from 'react'
import { PractifyLogo } from 'practify/components';
import * as S from './styled';
import { Fade } from '../../atoms';

type FixedSizes = 'sm' | 'md' | 'lg';

type Size = FixedSizes | number;

interface SpinnerProps {
  size: Size;
  color?: string;
}

const spinnerSizes = {
  sm: 28,
  md: 40,
  lg: 86,
}

const getSizePixelValue = (size: Size) => typeof size === 'string'
  ? spinnerSizes[size]
  : size;

export const Spinner: React.SFC<SpinnerProps> = ({ size = 'md', color }) => (
  <S.Wrapper>
    <Fade>
      <PractifyLogo
        color={color}
        size={getSizePixelValue(size)}
      />
    </Fade>
  </S.Wrapper>
);
