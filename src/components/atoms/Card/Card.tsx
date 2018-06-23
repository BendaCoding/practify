import * as React from "react";
import * as S from "./styled";

export const Card: React.SFC<{}> = props => {
  return (
    <S.Card>
      <S.Content>{props.children}</S.Content>
    </S.Card>
  );
};
