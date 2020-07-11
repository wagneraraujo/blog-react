import styled from "styled-components";

export const Form = styled.form`
  border-top: 1px solid var(--azul);
  width: 80%;
  padding-top: 16px;

  div {
    margin-bottom: 16px;
  }
  label {
    width: 100%;
    display: block;
    color: var(--azul);
  }
  input {
    width: 100%;
    border: 1px solid #ccc;
    color: #191919;
    font-size: 16px;
    padding: 7px 16px;
  }

  button {
    background: var(--azul);
    color: #fff;
    padding: 7px 16px;
    font-size: 16px;
    border: none;
    margin: 10px 2 0px 10px 0px;
  }
`;
