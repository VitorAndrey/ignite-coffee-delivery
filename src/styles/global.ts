import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a{
        text-decoration: none;
    }

    body,
    input,
    textarea,
    button{
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 1rem;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body,
    input,
    textarea
    {
        line-height: 130%;
    }

    button {
        line-height: 160%;
    }

    button,
    textarea,
    input,
    select,
    a{
     -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
     -webkit-tap-highlight-color: transparent;
     -webkit-user-select: none;
     -khtml-user-select: none;
     -moz-user-select: none;
     -ms-user-select: none;
      user-select: none;
    
      :active {
        transform: scale(0.97);
      }
    }


`;
