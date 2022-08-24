import { createGlobalStyle } from 'styled-components';

export const colors = {
  text: '#3D3D3D',
  textLight: '#9E9E9E',
  textWhite: '#FFFFFF',
  primary: '#FF4684',
  primaryDark: '#F9256C',
  background: '#5F9CC8',
};

export const fontWeight = {
  thin: 300,
  regular: 400,
  bolder: 500,
};

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
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
`;
