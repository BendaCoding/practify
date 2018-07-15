import { playlists } from '../../../store/playlists/playlists.selectors';
import { styled, keyframes, mixins } from 'practify/theme';

export const Wrapper = styled.div`
  ${mixins.absoluteFill(10, 'fixed')}
  background: ${({ theme }) => theme.colors.countIn.overlay};
  transition: 200ms opacity ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

const countInAnim = keyframes`
  0% {
    opacity: 0;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(0.4);
  }
  100% {
    opacity: 0;
    transform: scale(0.1);
  }
`;

interface ICountNumberProps {
  period: number;
  delay: number;
}

export const CountNumber = styled<ICountNumberProps, any>('label')`
  position: absolute;
  font-size: 100vw;
  color: ${({ theme }) => theme.colors.typo.inverted};
  font-weight: 600;
  user-select: none;
  opacity: 0;
  animation: ${({ period }) => `${countInAnim} ${period}ms linear`};
  animation-fill-mode: forwards;
  animation-delay: ${({ delay }) => `${delay}ms`};

`;
