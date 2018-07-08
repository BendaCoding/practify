import { styled } from 'practify/theme';

export const Header = styled.div`
  padding-bottom: ${({ theme}) => `${theme.space[1]}px`};
  border-bottom: ${({ theme }) => theme.borders.default};
  margin-bottom: ${({ theme}) => `${theme.space[2]}px`};
`;

export const Wrapper = styled.div`
  height:100%;
  padding:10%;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;

`;

export const Grid = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  width:100%;
`;