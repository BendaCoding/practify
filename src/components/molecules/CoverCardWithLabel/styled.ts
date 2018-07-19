
import { CoverCard } from './../../atoms/CoverCard';
import { mixins, styled } from 'practify/theme';

export const Wrapper = styled(CoverCard)`
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

export const Content = styled.div`
  ${mixins.absoluteFill()}
  z-index: 2;
  color: ${({ theme}) => theme.colors.typo.primary};
  display: flex;
  justify-content: center;
  align-items: center;

  ${Wrapper}:hover & {
    text-decoration: underline;
  }
`;

export const Backdrop = styled.div`
  ${mixins.absoluteFill()}
  background-color: ${({ theme}) => theme.colors.background};
  opacity: .9;
  transition: 120ms opacity ease-in;
  
  ${Wrapper}:hover & {
    
  }
`;
