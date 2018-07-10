import { styled } from 'practify/theme';

export const Bpm = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.h4};
`;

export const mKey = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.h4};
`;

export const Info = styled.div`
  display: flex;
  margin: 0 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-shrink: 1;
  flex-direction: column;
  grid-area: ExerciseDescriptionCard;
`;
