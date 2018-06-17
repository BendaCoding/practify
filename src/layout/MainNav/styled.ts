import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: 24px;
  color: ${({ theme }) => theme.palette.white};

  a {
    line-height: 25px;
    padding-top: 6px;
    display: block;
    color: #95C9E6;
    margin-right: 18px;
    transition: color .2s ease-in;

    &:hover {
      color: #efefef;
      text-decoration: none;
    }

    &.active {
      color: #fefefe;
    }
  }
`;
