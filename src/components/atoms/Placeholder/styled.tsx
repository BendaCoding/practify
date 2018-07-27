import { styled } from 'practify/theme';
import { Box } from 'grid-styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 0;
  padding: 0;
  padding-top: 100%;
  position: relative;
`;

export const Border = styled.div`
  border: 5px dashed grey;
  border-radius: 15px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
