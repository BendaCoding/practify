import * as React from "react";
import { translate, InjectedTranslateProps } from "react-i18next";
import * as S from './styled';
import { PractifyLogo } from "practify/components";
import { routes } from "practify/common";
import { NavLink } from "react-router-dom";

export const NotFoundScreen: React.SFC<InjectedTranslateProps> = ({ t }) => (
  <S.Wrapper>
    <NavLink to={routes.home}>
      <PractifyLogo size={60} />
    </NavLink>
    <br />
    <h1>{t('notFound.headline')}</h1>
  </S.Wrapper>
);

export default translate()(NotFoundScreen);
