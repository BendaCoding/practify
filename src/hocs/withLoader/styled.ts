import { styled } from 'practify/theme';

// type WrapperProps = Omit<IWithLoaderProps, 'isLoading'>
 interface IWrapperProps {
  type: 'light' | 'dark' | 'overlay';
  zIndex: number;
  minHeight: number;
}

export const Wrapper = styled<IWrapperProps, any>('div')`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${({ minHeight }) => minHeight }px;
  ${({ type, theme, zIndex }) =>
    type === 'overlay'
      ? `
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: ${zIndex};
        background: ${theme.colors.overlayBg};
    ` : ''}
`;