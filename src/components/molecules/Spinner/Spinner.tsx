import * as React from "react"
import { PractifyLogo } from '../../';
import * as S from './styled';
import { Fade } from "../../atoms";

type FixedSizes = 'sm' | 'md' | 'lg';

type Size = FixedSizes | number;

interface ISpinnerProps {
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

export const Spinner: React.SFC<ISpinnerProps> = ({ size = 'md', color }) => (
  <S.Wrapper>
    <Fade>
      <PractifyLogo
        color={color}
        size={getSizePixelValue(size)}
      />
    </Fade>
  </S.Wrapper>
);