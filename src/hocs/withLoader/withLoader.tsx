import * as React from 'react';
import { Fragment, SFC } from 'react';
import { Spinner } from 'practify/components';
import * as S from './styled';
import { theme } from 'practify/theme';

interface IWithLoaderOptions {
  type?: 'light' | 'dark' | 'overlay';
  size?: 'sm' | 'md' | 'lg';
  zIndex?: number;
  minHeight?: number;
}

interface IWithLoaderProps {
  type: 'light' | 'dark' | 'overlay';
  size: 'sm' | 'md' | 'lg';
  zIndex: number;
  minHeight: number;
}

interface IWrappedComponentProps extends IWithLoaderProps {
  isLoading: boolean;
}

const defaultConfig: IWithLoaderProps = {
  type: 'dark',
  size: 'md',
  zIndex: 1,
  minHeight: 40,
}

export const withLoader = (userConfig: IWithLoaderOptions = defaultConfig) => (WrappedComponent: any) => {
  const ComponentWithLoader: SFC<IWrappedComponentProps> = ({ isLoading, ...rest }) => {
    const { type, size, zIndex, minHeight } = {
      ...defaultConfig,
      ...userConfig,
    };
    
    const shouldRenderWrappedComponent = (isLoading && type === 'overlay') || !isLoading;

    const spinnerColor = type === 'light'
      ? theme.colors.spinner.light
      : type === 'dark'
        ? theme.colors.spinner.dark
        : theme.palette.white

    return (
      <Fragment>
        {isLoading && (
          <S.Wrapper {...{ type, zIndex, minHeight }}>
            <Spinner color={spinnerColor} size={size} />
          </S.Wrapper>
        )}
        {shouldRenderWrappedComponent && <WrappedComponent {...rest} />}
      </Fragment>
    )
  }

  return ComponentWithLoader;
};
