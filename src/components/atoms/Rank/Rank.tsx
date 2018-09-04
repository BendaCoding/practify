import { styled } from 'practify/theme';
import { Box } from 'grid-styled';

interface RankProps {
  rank: number;
}

export const Rank = styled<RankProps, any>(Box)`
  width: 26px;
  height: 26px;
  background: ${({ rank }) => `url(/img/ranks/${rank}.jpg) no-repeat`};
  background-size: cover;
`;
