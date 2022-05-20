import { createGlobalStyle } from "styled-components";
import { ThemeTypes } from "./providers/ThemeProvider";

export const GlobalStyle = createGlobalStyle<{ theme: ThemeTypes }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${(props) => props.theme.background.main};
    color: ${(props) => props.theme.font.main};

    transition: all 0.2s ease-in-out;
  }
`;
