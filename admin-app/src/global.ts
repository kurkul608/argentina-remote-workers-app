import { createGlobalStyle } from "styled-components";
import { color } from "./constants/colors";

export default createGlobalStyle`
     body {
      background-color: ${(props) => color(props.theme.mainTheme).backGround};
     }
     h1,h2,h3,h4,h5,h6 {
      margin:0;
      padding:0;
     }
     ul, li {
      list-style-type: none;
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
