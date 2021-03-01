import { createGlobalStyle } from 'styled-components'

const Typography = createGlobalStyle`
${
  '' /* @import url('https://fonts.googleapis.com/css2?family=Poppins&family=Sofia&family=Pacifico&display=swap'); */
}

  html {
    font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
    background: var(--white);
  }

  p, li {
    letter-spacing: 0.5px;
    line-height: 1.5;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Sofia', cursive;
    font-weight: normal;
    margin: 0;
  }

  h3{
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  a {
    color: var(--black);
    text-decoration-color: var(--red);
  }
  mark, .mark {
    background: var(--yellow);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  }

  section{
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  .center {
    text-align: center;
  }

  .tilt {
    transform: rotate(-2deg);
  }
`

export default Typography
