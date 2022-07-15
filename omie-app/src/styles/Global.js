import {createGlobalStyle} from "styled-components";

const Global= createGlobalStyle`
body{
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #001e27;
    /* background: linear-gradient(#001e27,#001e27 45%,#fff 45%, #fff 100%); */
}
`;

export default Global;
