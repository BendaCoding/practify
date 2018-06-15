import { styled } from 'practify/theme';

export const ExerciseCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  margin-bottom: 12px;
  cursor: pointer;
  transition: border-color .2s ease;

  &.active {
    position: relative;
  }
`;

export const CardTitle = styled.h4`
  font-size: ${props => props.theme.fontSizes.h4};
`;

export const CardText = styled.p`
  font-size: ${props => props.theme.fontSizes.body};
`;
