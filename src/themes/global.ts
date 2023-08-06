import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme['gray-200']};
    color: ${props => props.theme['gray-300']};
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
  }
`;
