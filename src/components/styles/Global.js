import { createGlobalStyle } from 'styled-components';
import theme from '../../utils/theme';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${theme.colors.body};
    font-family: 'ProximaNova', arial, 'Helvetica Neue', sans-serif;
    font-size: 1rem;
  }

  body,
  html {
    color: #282c3f;
  }

  textarea:focus,
  input:focus {
    outline: none;
  }
`;

export default GlobalStyle;
