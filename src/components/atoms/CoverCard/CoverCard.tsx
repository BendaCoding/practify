import React from 'react';
import { styled } from 'practify/theme';
import { Card } from "../Card";
import { BoxProps, CommonProps } from 'grid-styled';

export interface ICoverCardProps extends Partial<CommonProps & BoxProps> {
  coverUrl?: string;
}

/**
 * We dont want the coverUrl Prop to be passed to the underlying Box Component
 */
export const CoverCard = styled<any, any>(({ coverUrl, ...rest }: any) => <Card {...rest} />)`
  width: 100%;
  height: 0;
  padding: 0;
  padding-top: 100%;
  background-size: cover;
  ${({ coverUrl }) => `background-image: url(${coverUrl});`}
`;