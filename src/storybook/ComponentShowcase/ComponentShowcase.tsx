import React, { SFC } from 'react';
import { Flex, Box } from 'grid-styled';

export const ComponentShowcase: SFC<any> = ({ children, ...rest }) => (
  <Flex justifyContent="space-between">
    <Box width={1/2}>
      {children}
    </Box>
  </Flex>
);
