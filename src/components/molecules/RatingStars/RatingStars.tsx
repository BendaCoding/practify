import React from 'react';
import * as S from './styled';
import { FaStar, FaStarHalf, FaStarO, FaStarHalfEmpty } from 'react-icons/lib/fa';
import { times } from 'lodash';
import { withTheme, ThemeProps } from 'styled-components';

interface OuterProps {
  rating: number;
  maximum?: number;
  size?: string;
}

type RatingStarsProps = OuterProps & ThemeProps<ThemeInterface>

/**
 * Show a Rating with filled and hollow stars
 */
export const RatingStars: React.SFC<RatingStarsProps> = ({
  rating = 0,
  maximum = 5,
  size = '17px',
  theme,
}) => (
  <div>
    {times(maximum, (index: number) => {
      const Star = index + 1 <= rating
        ? FaStar
        : index + 1 === Math.ceil(rating)
          ? FaStarHalfEmpty
          : FaStarO

      return <Star key={index} color={theme.colors.info} size={size} />
    })}
  </div>
);

export default withTheme(RatingStars);
