import { styled, mixins } from 'practify/theme';

// type WrapperProps = Omit<IWithLoaderProps, 'isLoading'>
 interface WrapperProps {
  type: 'light' | 'dark' | 'overlay';
  zIndex: number;
  minHeight: number;
}

export const Wrapper = styled<WrapperProps, any>('div')`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${({ minHeight }) => minHeight }px;
  ${({ type, theme, zIndex }) =>
    type === 'overlay'
      ? `
        ${mixins.absoluteFill(zIndex)}
        background: ${theme.colors.overlayBg};
    ` : ''}
`;
