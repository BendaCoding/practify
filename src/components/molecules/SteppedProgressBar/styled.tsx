import { styled, css } from "practify/theme";

export const Bar = styled.div`
  height: 4px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.palette.gallery};
`;

interface ISplitProps {
  active?: boolean;
}

export const Split = styled<ISplitProps, any>('div')`
  margin-right: 5px;
  flex: 1;
  background: ${({ theme, active }) =>
    active
    ? theme.palette.firebush
    : theme.palette.lightGrey
  };

  &:last-child {
    margin-right: 0;
  }
`;