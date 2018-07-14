import { CoverCard } from '../../atoms/CoverCard';
import { mixins, styled } from 'practify/theme';

export const Wrapper = styled(CoverCard)`
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

export const Content = styled.div`
  z-index: 2;
  color: ${({ theme}) => theme.colors.typo.contrast};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  ${({ theme }) => `transition: 255ms all ${theme.transitions.easeOutElastic}`};
  transform: scale(0.3);
  transform-origin: 50%;
  ${mixins.absoluteFill}

  ${Wrapper}:hover & {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Backdrop = styled.div`
  ${mixins.absoluteFill}
  background: ${({ theme }) => theme.components.coverCardWithHoverContent.overlayBg};
  opacity: 0;
  transition: 120ms opacity ease-in;
  
  ${Wrapper}:hover & {
    opacity: 1;
  }
`;
