import React from "react";

import * as S from "./style";

const Header = () => {
  return (
    <S.HeaderSite>
      <S.LinksHeader>
        <S.LinksHeaderLogo>Blog React</S.LinksHeaderLogo>
        <S.OtherLinks>
          <S.LiOtherLinks>
            <S.AliOtherLinks to="/">Home</S.AliOtherLinks>
            <S.AliOtherLinks to="/login">Login</S.AliOtherLinks>
            <S.AliOtherLinks to="/registro">Registro</S.AliOtherLinks>
            <S.AliOtherLinks to="/dashboard">Painel</S.AliOtherLinks>
          </S.LiOtherLinks>
        </S.OtherLinks>
      </S.LinksHeader>
    </S.HeaderSite>
  );
};

export default Header;
