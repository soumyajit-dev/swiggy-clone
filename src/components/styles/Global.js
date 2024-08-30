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
    font-family: 'ProximaNova', 'ProximaNovaExtraBold', arial, 'Helvetica Neue', sans-serif;
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

  h2 {
    font-family: Gilroy_Bold;
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 20px;
    letter-spacing: -0.3px;
  }

  h6 {
    font-size: 0.7rem;
    line-height: 1.3rem;
    font-weight: 500;
    letter-spacing: -.3px;
  }

  p {
    font-size: 0.7rem;
    line-height: 16px;
  }
`;

export default GlobalStyle;
