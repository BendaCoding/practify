import * as React from "react";
import { Box } from "grid-styled";

export const Container: React.SFC<{}> = ({ children }) => (
  <Box mt={4} className="container">
    {children}
  </Box>
);
