import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;900&display=swap');

:root {
  --azul: #4f48ec;
  --cinza: #c8c7dd;
  --preto: #100e34;

}

body{

    max-width:100vw;
    min-width:100%;
  background:white !important;
  color:#16181e;
  font-size:14px;
font-family: 'Roboto', sans-serif;

}
  html{
    max-width:100vw;
    height:100%;
  }

`;
export default GlobalStyle;
