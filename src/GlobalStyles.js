import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

html,
body,
div,
span,
p,
ul{
    margin:0;
    padding:0;
    border:0;
    vertical-align:baseline;
}


li {
    list-style-type:none;
}

*{ outline:none;}
`;

export default GlobalStyles;
