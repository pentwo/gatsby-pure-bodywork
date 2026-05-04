import { createGlobalStyle } from 'styled-components'

const Typography = createGlobalStyle`
  html {
    font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--ink);
    background: var(--cream);
  }

  p, li {
    letter-spacing: 0.3px;
    line-height: 1.7;
    color: var(--ink-soft);
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Italiana', 'Cormorant Garamond', 'Playfair Display', serif;
    font-weight: 400;
    letter-spacing: 0.04em;
    margin: 0;
    text-transform: none;
    color: var(--ink);
  }

  /* Sub-label / eyebrow — caps, sans, tracked */
  .eyebrow {
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 1.5rem;
    display: inline-block;
  }

  /* Inline editorial italic accent (e.g. "love") */
  em, .accent-italic {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-weight: 400;
  }

  h1 {
    font-size: clamp(3.6rem, 2rem + 5.5vw, 7rem);
    margin-bottom: 2rem;
    line-height: 1.05;
  }
  h2 {
    font-size: clamp(3rem, 2rem + 3.9063vw, 5.5rem);
    margin-bottom: 2rem;
    line-height: 1.1;
  }
  h3 {
    font-size: clamp(2.4rem, 2rem + 1.5625vw, 3.6rem);
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }
  h4 {
    font-size: clamp(2rem, 2rem + 0.7813vw, 2.6rem);
    margin-bottom: 1.5rem;
    line-height: 1.3;
  }
  h5 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    color: var(--ink);
  }
  a {
    color: var(--ink);
    text-decoration-color: var(--sage);
  }
  mark, .mark {
    background: var(--error);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  }

  section{
    padding-top: 7rem;
    padding-bottom: 7rem;
  }

  .center {
    text-align: center;
  }

  .tilt {
    transform: rotate(-2deg);
  }
`

export default Typography
