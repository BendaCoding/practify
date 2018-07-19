import React, { SFC, Fragment } from 'react';
import { styled } from 'practify/theme';
import { Card } from '../Card';
import { BoxProps, CommonProps, Box } from 'grid-styled';
import { H5 } from '../H5';

export interface ICoverCardProps extends Partial<CommonProps & BoxProps> {
  coverUrl: string;
  title?: string;
  description?: string;
}

/**
 * We dont want the coverUrl Prop to be passed to the underlying Box Component
 */
const Cover = styled<any, any>(({ coverUrl, ...rest }: any) => <Card {...rest} />)`
  width: 100%;
  height: 0;
  padding: 0;
  padding-top: 100%;
  background-size:cover;
  ${({ coverUrl }) => `background-image: url(${coverUrl});`}
`;

export const CoverCard: SFC<ICoverCardProps> = ({
  title,
  description,
  coverUrl,
  ref,
  ...rest
}) => {
  if (title || description) {
    return (
      <Box {...rest}>
        <Cover coverUrl={coverUrl} mb={1} />
        
        <Fragment>
          <H5>{title}</H5>
          <div>{description}</div>
        </Fragment>

      </Box>
    )
  } else {
    return <Cover coverUrl={coverUrl} {...rest} />
  }
}
