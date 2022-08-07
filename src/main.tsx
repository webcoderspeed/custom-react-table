import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createGlobalStyle } from 'styled-components';
export const GlobalStylesMainLayout = createGlobalStyle`
  html {
    font-size: 62.5%;
    font-family: 'Inter', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #E6E9F3;
    font-size: 1.6rem;
    font-family: 'Inter', sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }

  a {
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
  }

  h1 {
    font-size: 2.5rem;
    line-height: 1.2;
  }

  h2 {
    font-size: 2rem;
    line-height: 1.2;
  }

  h3 {
    font-size: 1.5rem;
    line-height: 1.2;
  }

  h4 {
    font-size: 1.2rem;
    line-height: 1.2;
  }

  h5 {
    font-size: 1rem;
    line-height: 1.2;
  }

  h6 {
    font-size: 0.8rem;
    line-height: 1.2;
  }

  p {
    font-size: 1.6rem;
    line-height: 1.5;
  }

  ul,
  ol {
    list-style: none;
  }
`;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStylesMainLayout />
    <App />
  </React.StrictMode>
)
