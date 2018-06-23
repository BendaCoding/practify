import { styled } from "practify/theme";

export const Bpm = styled.p`
  float: left;
  font-size:${({ theme }) => theme.fontSizes.h4};

`

export const mKey = styled.p`
  float: right;
  font-size: ${({ theme }) => theme.fontSizes.h4};

`

export const Wrapper = styled.div`
  width:80%;
  margin: 20px auto 80px;
  display: block;
`