import { createGlobalStyle } from 'styled-components';

interface Colors {
  text: string;
  textLight: string;
  textWhite: string;
  primary: string;
  primaryDark: string;
  background: string;
}

export const colors: Colors = {
  text: '#3D3D3D',
  textLight: '#9E9E9E',
  textWhite: '#EDEDED',
  primary: '#FF4684',
  primaryDark: '#F9256C',
  background: '#5F9CC8',
};

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    color: ${colors.text}
}
html {
    height: 100%;
}
body {
    height: 100%;
    background-color: ${colors.background};
    display: flex;
    justify-content: center;
    align-items: center;
}

@media screen and (max-width:350px){
    html {
        font-size:14px;
    }  
}
`;
