import { createGlobalStyle } from "styled-components";
import { color } from "./constants/colors";

export default createGlobalStyle`
     body {
      background-color: ${(props) => color(props.theme.mainTheme).backGround};
     }
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
    }
    #root{
        margin:0 auto;
    }
    a {
     text-decoration: none;
    }
 `;
