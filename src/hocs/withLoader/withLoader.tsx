import * as React from 'react';
import { Fragment, SFC } from 'react';
import { Spinner, Fade } from 'practify/components';
import * as S from './styled';
import { ThemeProps, withTheme } from 'styled-components';

interface IWithLoaderOptions {
  type: 'light' | 'dark' | 'overlay';
  size: 'sm' | 'md' | 'lg';
  zIndex: number;
  minHeight: number;
}

export interface IWithLoaderProps extends ThemeProps<ITheme> {
  isLoading: boolean;
}

const defaultConfig: IWithLoaderOptions = {
  type: 'dark',
  size: 'md',
  zIndex: 1,
  minHeight: 120,
}

export const withLoader = (userConfig: Partial<IWithLoaderOptions> = defaultConfig) => (WrappedComponent: any) => {
  const ComponentWithLoader: SFC<IWithLoaderProps> = ({ isLoading, theme, ...rest }) => {
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
