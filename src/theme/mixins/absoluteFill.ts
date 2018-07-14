import { css } from '../styled';

type Position = 'absolute' | 'fixed';

export const absoluteFill = (position: Position = 'absolute', zIndex?: number) => css`
  position: ${position};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  ${zIndex && `z-index: ${zIndex};`}
`;
