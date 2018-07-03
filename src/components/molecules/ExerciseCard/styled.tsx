import { styled } from 'practify/theme';
import { Card as BaseCard } from '../../atoms/Card';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.palette.white};
  margin-bottom: 12px;
  cursor: pointer;
  transition: border-color .2s ease;

  &.active {
    position: relative;
  }
`;

export const Card = styled(BaseCard)`
  cursor: pointer;
  &:hover {
    
  }
`;

export const CardTitle = styled.h4`
  font-size: ${props => props.theme.fontSizes.h4};
`;

export const CardText = styled.p`
  font-size: ${props => props.theme.fontSizes.body};
`;
