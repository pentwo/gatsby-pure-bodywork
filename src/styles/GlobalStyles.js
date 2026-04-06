import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #c4b5a5;
    --dark: #6b5e52;
    --light: #f2ece6;
    --purple: #b8a99a;

    --primary-opacity: #c4b5a5BF;
    --light-opacity: #f2ece6BF;
    --purple-opacity: #b8a99aBF;

    --warning: #dcc8b8;
    --success: #c2cdb5;
    --error: #d4b0a8;
    --black: #2c2722;
    --white: #faf8f5;
    --grey: #e8e2dc;

    --smScreen: '640px';

    --gradient-primary: rgba(225, 225, 225, 0.7);
    --gradient-secondary: rgba(225, 225, 225, 0.5);

    --hero-padding-top: 25rem;
    --hero-mobile-padding-top: 13.5rem;
  }
  html {
    background: var(--white);
    background-size: 450px;
    background-attachment: fixed;
    font-size: 0.625rem;

  }

  body {
    font-size: 1.5rem;
    background: var(--white);
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    background: var(--purple);
    color: var(--white);
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }


  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--primary) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--primary) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  hr {
    border: 0;
    height: 8px;
    background-size: 1500px;
  }

  img {
    max-width: 100%;
  }

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }


  .react-icons {
    display: inline-flex;
    align-self: center;

    height:1em;
    width:1em;

    margin-inline-end: 0.25em;
    top: .125em;
    position: relative;
  }
  .wrapper {
    max-width: 960px;
    display: flex;
    justify-content: space-between;
    padding: 0 3rem;
    margin: 0 auto;
  }
  .wrapper-column {
    margin-left: auto;
    margin-right: auto;

    max-width: 960px;
    display: flex;
    justify-content: space-between;
    padding-top: 3rem;
    padding-right: 3rem;
    padding-left: 3rem;
    flex-direction: column;
    &.fluid{
      margin: 0;
      max-width: 100vw;
    }
  }
`

export default GlobalStyles
