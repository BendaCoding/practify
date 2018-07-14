import * as React from 'react';
import * as S from './styled';
import { PractifyLogo } from 'practify/components';
import { FaPlus, FaMinus } from 'react-icons/lib/fa';
import { withTheme, ThemeProps } from 'styled-components';

interface IOuterProps {
  min?: number;
  max?: number;
}

interface IProps extends ThemeProps<ITheme> {
  volume: number;
  onChange: (volume: number) => (e: React.MouseEvent<SVGElement>) => void;
  min?: number;
  max?: number;
  active?: boolean;
  transitionTimeout: number;
}

const sizes = {
  0: 0.75,
  1: 1.2,
  2: 1.8,
  3: 2.66,
  4: 3.66,
}

export const SubdivisionIndicator: React.SFC<IProps> = ({
  volume,
  onChange,
  active = false,
  transitionTimeout,
  theme,
}) => (
  <S.Wrapper>
    <S.Scaler size={sizes[volume]}>

      <PractifyLogo
        size={30}
        color={active ? theme.colors.primary : theme.colors.spinner.dark}
        transition={`${transitionTimeout}ms all ease-out`}
      />

      <S.Controls>
        <S.Plus disabled={volume === 4} onClick={onChange(volume + 1)}>
          <FaPlus size={10} />
        </S.Plus>
        <S.Minus disabled={volume === 0} onClick={onChange(volume - 1)}>
          <FaMinus size={10} />
        </S.Minus>
      </S.Controls>

    </S.Scaler>
  </S.Wrapper>
);

export default withTheme(SubdivisionIndicator);
