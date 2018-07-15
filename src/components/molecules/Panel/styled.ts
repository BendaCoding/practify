import { mixins, styled, css } from 'practify/theme';

export interface IPanel {
  active: boolean;
}

export const Wrapper = styled.div`
`;

export const Backdrop = styled<IPanel, any>('div')`
  ${mixins.absoluteFill(49, 'fixed')}
  width: 0;
  height: 0;
  opacity: 0;
  transition: opacity 0.5s 0.1s, width 10ms 0.5s, height 10ms 0.5s;
  background: ${({ theme }) =>
    theme.components.coverCardWithHoverContent.overlayBg};

  ${({ active }) =>
    active &&
    css`
      transition: opacity 0.5s;
      opacity: 1;
      width: 100vw;
      height: 100vh;
    `};
`;

export const Panel = styled<IPanel, any>('div')`
  position: fixed;
  height: 0;
  width: 100%;
  transition: height 0.35s ${({ theme }) => theme.transitions.easeOutElastic};
  background: #fff;
  bottom: 0;
  left: 0;
  z-index: 50;
  overflow: hidden;

  ${({ active }) =>
    active &&
    css`
      height: 80%;
    `};
`;

export const Content = styled.div`
  padding: 2em 1em;
  height:100%;
`;
