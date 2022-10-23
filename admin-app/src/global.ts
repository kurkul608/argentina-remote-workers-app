import { createGlobalStyle } from "styled-components";
import { color } from "./constants/colors";

export default createGlobalStyle`
     html {
      font-size: 10px;
      @media (max-width: 768px){
       font-size: 8px;
      }
      @media (max-width: 300px){
       font-size: 6px;
      }
     }
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
