import styled from "styled-components";

export const NomeUser = styled.div`
  color: var(--azul);
  font-size: 22px;
  padding: 10px 0px;
`;

export const UserLogout = styled.div`
  border-top: 1px solid var(--azul);
  display: flex;
  flex-direction: column;
  color: #191919;
  margin-top: 20px;
  padding: 15px 0px;
  button {
    border: 1px solid var(--azul);
    color: var(--azul);
    font-size: 14px;
    background: #f1f1f1;
    padding: 7px 16px;
    width: 150px;
    margin-top: 16px;
  }
`;
