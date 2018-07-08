import { styled } from "practify/theme";

export const Stack = styled.div`
  position: relative;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

`;

export const Description = styled.div`
   color:${({theme}) => theme.colors.typo.secondary};
`;

export const Label = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-level: 3;
`;
