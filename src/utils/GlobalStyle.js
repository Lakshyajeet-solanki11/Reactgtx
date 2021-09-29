import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    @import url('https://fonts.googleapis.com/css?family=Nunito:700,400,300"');
    font-family: 'Nunito', sans-serif;
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
  }

  ul, li, a {
    text-decoration: none;
    color: inherit;
  }
  `;
