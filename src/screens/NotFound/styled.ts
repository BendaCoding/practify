import { styled, mixins } from 'practify/theme';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  ${mixins.absoluteFill()}
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
