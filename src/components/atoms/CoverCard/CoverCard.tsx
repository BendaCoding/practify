import React from 'react';
import { styled } from 'practify/theme';
import { Card } from "../Card";

interface ICoverCardProps {
  coverUrl?: string;
}

/**
 * We dont want the coverUrl Prop to be passed to the underlying Box Component
 */
export const CoverCard = styled<ICoverCardProps, any>(({ coverUrl, ...rest }: ICoverCardProps) => <Card {...rest} />)`
  width: 100%;
  height: 0;
  padding: 0;
  padding-top: 100%;
  background-size: cover;
  ${({ coverUrl }) => `background-image: url(${coverUrl});`}
`;