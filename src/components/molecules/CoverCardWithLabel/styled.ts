import { CoverCard } from './../../atoms/CoverCard';
import { styled } from 'practify/theme';

export const Wrapper = styled(CoverCard)`
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

const position = `
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Content = styled.div`
  ${position}
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
  ${position}
  background-color: ${({ theme}) => theme.colors.background};
  opacity: .9;
  transition: 120ms opacity ease-in;
  
  ${Wrapper}:hover & {
    
  }
`;
