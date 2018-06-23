import { styled } from 'practify/theme';
import { PractifyLogo } from 'practify/components';
import { FaNewspaperO, FaHome } from 'react-icons/lib/fa';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: 24px;
  color: ${({ theme }) => theme.palette.white};
`;

export const NavLink = styled(Link)`
  line-height: 25px;
  padding-top: 4px;
  display: block;
  color: ${({ theme }) => theme.colors.mainNav.link};
  margin-right: 18px;
  transition: color .2s ease-in;

  &:hover {
    color: ${({ theme }) => theme.colors.mainNav.linkHover};
    text-decoration: none;
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
  transition: fill .2s ease-in;
  fill: ${({ theme }) => theme.colors.mainNav.link};
  top: 1.5px;
  
  ${NavLink}:hover &,
  ${NavLink}.active & {
    fill: ${({ theme }) => theme.colors.mainNav.linkHover};
  }
`;

export const IconBrowse = styled(FaNewspaperO)`
  position: relative;
  top: -1px;
`;
