import React, { SFC } from 'react';
import { CoverCardWithLabel } from 'practify/components';
import { H3 } from '../../atoms';
import { Box, Flex } from 'grid-styled';
import * as S from './styled';

interface CoverStackItem {
  coverUrl: string;
  name: string;
  description: string;
}

interface CoverStackProps {
  items: CoverStackItem[];
  title?: string;
  description?: string;
  coverCount?: number;
  overlap?: number;
}

export const CoverStack: SFC<CoverStackProps> = ({
  title = '',
  description = '',
  coverCount = 3,
  overlap = 10,
  items
}) => (
  <Box mb={2} width={[0.48, 0.23]}>
    <S.Wrapper>
      <S.Stack>
        <Flex flexDirection="row-reverse">
          {items
            .filter((item, i) => i < coverCount)
            .map((item: any, i: number) => (
              <Box key={item.name} width={1} mr={i === 0 ? 0 : -overlap}>
                <Box>
                  <CoverCardWithLabel backdrop coverUrl={item.coverUrl} />
                </Box>
              </Box>
            ))}
        </Flex>
        <S.Label>
          <H3>{title}</H3>
        </S.Label>
      </S.Stack>
      <S.Description>{description} </S.Description>
    </S.Wrapper>
  </Box>
);
