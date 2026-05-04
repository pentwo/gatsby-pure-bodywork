import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    /* Editorial palette — cream + sage (kerriwebbrmt-inspired) */
    --cream: #f2eee5;
    --cream-soft: #ebe6da;
    --sage: #7c8676;
    --sage-light: #a2ab97;
    --sage-soft: #c7cdbf;
    --ink: #1f1f1f;
    --ink-soft: #2c2a28;
    --muted: #6b6660;

    /* Legacy aliases — kept for backward compatibility */
    --primary: var(--sage);
    --dark: var(--ink);
    --light: var(--sage-soft);
    --purple: var(--sage);

    --primary-opacity: #7c8676BF;
    --light-opacity: #c7cdbfBF;
    --purple-opacity: #7c8676BF;

    --warning: #c8a99f;
    --success: #aac89f;
    --error: #c89fbe;
    --black: var(--ink);
    --white: var(--cream);
    --grey: #ded8d7;

    --smScreen: '640px';

    --gradient-primary: rgba(242, 238, 229, 0.7);
    --gradient-secondary: rgba(242, 238, 229, 0.5);

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
    background: transparent;
    color: var(--ink);
    border: 1px solid var(--ink);
    padding: 0.9rem 1.6rem;
    border-radius: 0;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    transition: background 0.25s ease, color 0.25s ease;
    &:hover {
      background: var(--ink);
      color: var(--cream);
    }
  }

  /* Editorial link-style CTA — text + arrow, no box */
  .link-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    font-family: 'Poppins', sans-serif;
    font-size: 1.3rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--ink);
    text-decoration: none;
    border-bottom: 1px solid var(--ink);
    padding-bottom: 0.3rem;
    transition: opacity 0.25s ease;
    &:hover { opacity: 0.65; }
    &::after { content: '→'; font-size: 1.4rem; letter-spacing: 0; }
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
