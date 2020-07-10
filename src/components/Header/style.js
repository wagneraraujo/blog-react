import styled from "styled-components";
import { Link } from "react-router-dom";
export const HeaderSite = styled.header`
  height: auto;
  background: var(--preto);
  color: var(--cinza);
  padding: 16px;
  width:100%;
  @media(max-width:600px){
    max-width:100%;
    min-width:100%;
    padding:0px;
  }
`;
export const LinksHeader = styled.div`
  color: #fff;
  width:100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width:600px){
    display:flex;
    justify-content: flex-start;
    
  }
`;
export const LinksHeaderLogo = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    color: var(--azul);
  }

  @media(max-width:600px){
    font-size:12px
  }
`;

export const OtherLinks = styled.ul`
  list-style: none;
  display: flex;
`;
export const LiOtherLinks = styled.li`
  margin: 0 15px;


  @media(max-width:600px){
    margin:0 5px;
  }
`;

export const AliOtherLinks = styled(Link)`
  color: var(--cinza);
  text-decoration: none;
  padding: 0px 15px;
  &:hover {
    color: var(--azul);
  }
  @media(max-width:600px){
    padding:0 5px;
  }
`;
