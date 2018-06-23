import { styled } from "practify/theme";

export const Screen = styled.div`
  display: grid;

  @media (min-width: ${({ theme: { breakpoint } }) => breakpoint.lg}) {
    grid-template-columns: 1fr 380px;
    padding: 32px 24px;
  }
`;

export const Content = styled.div`
  text-align: center;
  padding-bottom: 75px;

  @media (min-width: ${({ theme: { breakpoint } }) => breakpoint.sm}) {
    margin-right: 12px;
  }

`;

export const Aside = styled.aside`
  margin-left: 12px;

  @media (max-width: ${({ theme: { breakpoint } }) => breakpoint.lg}) {
    display: none;
  }
`;

export const Desc = styled.div`
  margin: 80px 20px;
`;

export const Md = styled.div`
  display: inherit;
  @media (max-width: ${({ theme: { breakpoint } }) => breakpoint.sm}) {
    display: none;
  }
`;

export const Sm = styled.div`
  display: inherit;
  @media (min-width: ${({ theme: { breakpoint } }) => breakpoint.sm}) {
    display: none;
  }
`;
