import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    ${'' /* https://www.color-hex.com/color/5d4037 */}
    --primary: #5d4037;
    --dark: #372621;
    --light: #9d8c87;
    --purple: #40375d;

    --primary-opacity: #5d4037BF;
    --light-opacity: #9d8c87BF;
    --purple-opacity: #40375dBF;

    --warning: #5d5337;
    --success: #375d40;
    --error: #5d3741;
    --black: #131313;
    --white: #eee;
    --grey: #ded8d7;

    --smScreen: '640px'
  }
  html {
    ${'' /* background-image: url(${bg}); */}
    background: var(--white);
    background-size: 450px;
    background-attachment: fixed;
    font-size: 0.625rem;

  }

  body {
    font-size: 2rem;
    background: var(--white);
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    background: var(--purple);
    color: white;
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

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--error) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--error) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  hr {
    border: 0;
    height: 8px;
    ${'' /* background-image: url(${stripes}); */}
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
  }
  .wrapper-column {
    margin-left: auto;
    margin-right: auto;

    max-width: 960px;
    display: flex;
    justify-content: space-between;
    padding: 0 3rem;
    flex-direction: column;
  }
`

export default GlobalStyles
