import { createGlobalStyle } from "styled-components";
import { themes } from "../styles/ColorStyles";
export const GlobalStyle = createGlobalStyle`
body {
    background-color: ${themes.light.backgroundColor};
    // this changes light to dark according to system preferences
    @media(prefers-color-scheme: dark){ 
        background: ${themes.dark.backgroundColor};
    }
}
`;
