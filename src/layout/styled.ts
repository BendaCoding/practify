import { styled } from "practify/theme";

export const Header = styled.header`
  display: flex;
  height: 50px;
  padding: 0 24px;
  color: ${({ theme }) => theme.palette.white};
  background: ${({ theme }) => theme.palette.curiousBlue};

  h3 {
    line-height: 57px;
    margin: 0;
  }
`;

export const NavLarge = styled.div`
  width: 100%;
  display: none;

  @media (min-width: ${({ theme: { breakpoint } }) => breakpoint.md}) {
    display: flex;
  }
`;

export const NavMobile = styled.div`
  width: 100%;
  text-align: center;
  margin: auto;
  display: relative;
  
  @media (min-width: ${({ theme: { breakpoint } }) => breakpoint.md}) {
    display: none;
  }
`;

export const Footer = styled.footer`
  position: fixed;
  width: 100%;
  z-index: 10;
  display: block;
  height: 50px;
  padding: 0 12px;
  bottom: 0;
  margin-bottom: 0;
  color: ${({ theme }) => theme.palette.white};
  background: ${({ theme }) => theme.palette.curiousBlue};

  @media (min-width: ${({ theme: { breakpoint } }) => breakpoint.md}) {
    display: none;
  }
`;
