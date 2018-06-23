import { styled } from "practify/theme";

export const Card = styled.div`
  height: 0;
  padding-bottom: 100%;
  width: 100%;
  margin:20px auto;
  box-shadow: ${({ theme }) => theme.shadows.regular};
  background: ${({ theme }) => theme.palette.white};
`;

export const Content = styled.p`
    text-align:center;
    padding:20px;
`
