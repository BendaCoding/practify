import { styled } from "practify/theme";
import { Box } from "grid-styled";

export const Card = Box.extend`
  width: 100%;
  box-shadow: ${({ theme }) => theme.shadows.regular};
  background: ${({ theme }) => theme.palette.white};
  overflow-y: auto;
  padding: 20px;
  max-height: 100%;
`;
