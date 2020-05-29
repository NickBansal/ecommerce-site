import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    margin: 80px 0 0 0;
    font-family: 'Open Sans Condensed';
    padding: 20px 40px;

    @media screen and (max-width: 800px) {
      padding: 20px 10px
      margin: 40px 0 0 0;
    }
  }

  a {
    text-decoration: none;
    color: black;
		width: fit-content;
  }

  * {
    box-sizing: border-box;
  }
`;
