import { styled } from 'practify/theme';

export const Bar = styled.div`
  height: 3px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  grid-area:SteppedProgressBar;
  background: ${({ theme }) => theme.palette.gallery};
`;

interface SplitProps {
  active?: boolean;
}

export const Split = styled<SplitProps, any>('div')`
  margin-right: 5px;
  flex: 1;
  transition: 1000ms background;
  background: ${({ theme, active }) =>
    active
    ? theme.palette.firebush
    : theme.palette.lightGrey
  };

  &:last-child {
    margin-right: 0;
  }
`;
