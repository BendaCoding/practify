import { CoverCard } from '../../atoms/CoverCard';
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
  z-index: 2;
  color: ${({ theme}) => theme.colors.typo.contrast};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: ${({ theme }) => `255ms all ${theme.transitions.easeOutElastic}`};
  transform: scale(0.3);
  transform-origin: 50%;
  ${position}

  ${Wrapper}:hover & {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Backdrop = styled.div`
  ${position}
  background: ${({ theme }) => theme.components.coverCardWithHoverContent.overlayBg};
  opacity: 0;
  transition: 120ms opacity ease-in;
  
  ${Wrapper}:hover & {
    opacity: 1;
  }
`;
