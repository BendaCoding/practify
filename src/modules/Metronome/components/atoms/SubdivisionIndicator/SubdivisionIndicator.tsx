import * as React from 'react';
import { withHandlers } from 'recompose';
import * as S from './styled';
import { PractifyLogo } from 'practify/components';
import { FaPlus, FaMinus } from 'react-icons/lib/fa';
interface IOuterProps {
  min?: number;
  max?: number;
}

interface IProps {
  volume: number;
  onChange: (volume: number) => (e: React.MouseEvent<SVGElement>) => void;
  min?: number;
  max?: number;
  active?: boolean
}

const sizes = {
  0: 1,
  1: 1.66,
  2: 2.66,
  3: 3.66,
}

export const SubdivisionIndicator: React.SFC<IProps> = ({
  volume,
  onChange,
  active = false,
}) => {
  
  return (
    <S.Wrapper>
      <S.Scaler size={sizes[volume]}>

        <PractifyLogo size={30} />

        <S.Controls>
          <S.Plus disabled={volume === 3} onClick={onChange(volume + 1)}>
            <FaPlus size={10} />
          </S.Plus>
          <S.Minus disabled={volume === 0} onClick={onChange(volume - 1)}>
            <FaMinus size={10} />
          </S.Minus>
        </S.Controls>

      </S.Scaler>
    </S.Wrapper>
  )
}

export default SubdivisionIndicator;
