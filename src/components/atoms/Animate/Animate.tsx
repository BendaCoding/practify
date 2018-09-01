import React from 'react';
import * as S from './styled';

interface AnimateProps {
  /**
   * Animation name as string
   */
  animation: string;
  /**
   * duration in ms
   */
  duration?: number;
}

export const Animate: React.SFC<AnimateProps> = ({
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
