import React from 'react';
import { keyframes, styled } from 'practify/theme';
import * as Animations from 'react-animations';

type IAnimations = 'bounceIn' | 'fadeIn';

interface IAnimateProps {
  /**
   * Animation name as string
   */
  animation: IAnimations;
  /**
   * duration in ms
   */
  duration: number;
}

export const Animate = styled<IAnimateProps, any>('div')`
  ${({ duration, animation }) => `animation: ${duration}ms ${keyframes`${Animations[animation]}`};`}
`;

