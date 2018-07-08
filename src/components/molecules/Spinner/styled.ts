
import { styled } from 'practify/theme';

export const Wrapper = styled.div`
  display: inline-block;
  line-height: 0;
  animation: rotate 0.8s ${({ theme }) => theme.transitions.gradualEaseInOut} infinite;
  transform-origin: 50%;
`;
