import { styled } from "practify/theme";
import { PractifyLogo } from "practify/components";
import { FaNewspaperO, FaHome } from "react-icons/lib/fa";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  width: 100%;
  height: 50px;
  padding-top: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.palette.white};
`;

export const NavLink = styled(Link)`
  line-height: 25px;
  display: block;
  text-align: center;
  flex: 1 1 auto;
  color: ${({ theme }) => theme.colors.mainNav.link};
  transition: color 0.2s ease-in;

  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.mainNav.linkHover};
  }

  &.active {
    color: ${({ theme }) => theme.colors.mainNav.linkActive};
  }
`;

export const IconStart = styled(FaHome)`
  position: relative;
  top: -1px;
`;

export const IconPractise = styled(PractifyLogo)`
  position: relative;
  transition: fill 0.2s ease-in;
  fill: ${({ theme }) => theme.colors.mainNav.link};
  top: 2px;

  ${NavLink}:hover &,
  ${NavLink}.active & {
    fill: ${({ theme }) => theme.colors.mainNav.linkHover};
  }
`;

export const IconBrowse = styled(FaNewspaperO)`
  position: relative;
  top: -1px;
`;

export const NavItem = styled.div`
  align-content: center;
  width: 100px;
`;

export const Label = styled.div`
  margin-top: -8px;
  font-size: 0.7em;
`;
