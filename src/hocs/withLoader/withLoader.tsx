import React from 'react';
import { Fragment, SFC } from 'react';
import { Spinner } from 'practify/components';
import * as S from './styled';
import { ThemeProps, withTheme } from 'styled-components';

interface WithLoaderOptions {
  type: 'light' | 'dark' | 'overlay';
  size: 'sm' | 'md' | 'lg';
  zIndex: number;
  minHeight: number;
}

export interface WithLoaderProps {
  isLoading: boolean;
}

const defaultConfig: WithLoaderOptions = {
  type: 'dark',
  size: 'md',
  zIndex: 1,
  minHeight: 120,
}

export const withLoader = (userConfig: Partial<WithLoaderOptions> = defaultConfig) => (WrappedComponent: any) => {
  const ComponentWithLoader: SFC<WithLoaderProps & ThemeProps<ThemeInterface>> = ({ isLoading, theme, ...rest }) => {
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

  return withTheme(ComponentWithLoader);
};
