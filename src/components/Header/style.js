import styled from "styled-components";
import { Link } from "react-router-dom";
export const HeaderSite = styled.header`
  height: auto;
  margin: 0px 0px;
  background: var(--preto);
  color: var(--cinza);
  padding: 16px;
`;
export const LinksHeader = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LinksHeaderLogo = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    color: var(--azul);
  }
`;

export const OtherLinks = styled.ul`
  list-style: none;
  display: flex;
`;
export const LiOtherLinks = styled.li`
  margin: 0 15px;
`;

export const AliOtherLinks = styled(Link)`
  color: var(--cinza);
  text-decoration: none;
  padding: 0px 15px;
  &:hover {
    color: var(--azul);
  }
`;
