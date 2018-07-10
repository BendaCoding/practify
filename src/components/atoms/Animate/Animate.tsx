import React from 'react';
import * as S from './styled';

interface IAnimateProps {
  /**
   * Animation name as string
   */
  animation: string;
  /**
   * duration in ms
   */
  duration?: number;
}

export const Animate: React.SFC<IAnimateProps> = ({
  children,
  ...rest
}) => (
  <S.Animate {...rest}>
    {children}
  </S.Animate>
);

Animate.defaultProps = {
  duration: 1000,
}
