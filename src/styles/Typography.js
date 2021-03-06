import { createGlobalStyle } from 'styled-components'

const Typography = createGlobalStyle`
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
    font-family: 'Josefin Sans', sans-serif;
    font-weight: normal;
    letter-spacing: 1.5;
    margin: 0;
    text-transform: capitalize;
  }

  h2{
    font-size: 4.5rem;
    margin-bottom: 2rem;
  }
  h3{
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  h4{
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
  h5{
    font-size: 2.25rem;
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
