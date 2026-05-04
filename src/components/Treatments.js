import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import remedialBg from '../images/v2/room-wide-01.webp'
import singingBowlBg from '../images/v2/display-wide-01.webp'

const TreatmentsStyles = styled.section`
  background: var(--cream);
  padding: 8rem 0;

  .inner {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 3rem;
    text-align: center;
  }

  .eyebrow {
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 1rem;
    display: inline-block;
  }

  h3 {
    font-family: 'Italiana', serif;
    font-size: clamp(2.8rem, 1.5rem + 2.8vw, 4.4rem);
    margin-bottom: 1.5rem;
    color: var(--ink);
  }

  .lead {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-size: 1.9rem;
    line-height: 1.5;
    max-width: 50ch;
    margin: 0 auto 5rem;
    color: var(--ink-soft);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    @media (max-width: 760px) {
      grid-template-columns: 1fr;
    }
  }

  .browse {
    margin-top: 5rem;
  }
`

const CardStyles = styled.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 4 / 5;
  cursor: pointer;
  background: var(--cream-soft);

  a {
    display: block;
    height: 100%;
    text-decoration: none;
  }

  .image {
    height: 100%;
    width: 100%;
    background-image: ${props => `url(${props.bg})`};
    background-size: cover;
    background-position: center;
    transition: transform 0.6s ease;
  }

  &:hover .image {
    transform: scale(1.06);
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(31, 31, 31, 0) 40%,
      rgba(31, 31, 31, 0.55) 100%
    );
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 2.5rem;
  }

  .label {
    font-family: 'Italiana', serif;
    font-size: clamp(2rem, 1.5rem + 1vw, 2.8rem);
    color: var(--cream);
    letter-spacing: 0.04em;
    text-align: center;
    margin: 0;
  }
`

export const Treatments = () => {
  return (
    <TreatmentsStyles>
      <div className="inner">
        <span className="eyebrow">Our offerings</span>
        <h3>Treatments</h3>
        <p className="lead">
          Massage is an <em>ancient practice</em> your body naturally knows and
          accepts — a preventative tool that helps you live to your full
          physical potential.
        </p>

        <div className="grid">
          {data.map((item, index) => (
            <CardStyles key={`${item.name}-${index}`} bg={item.background}>
              <Link to="/treatments">
                <div className="image" />
                <div className="overlay">
                  <h4 className="label">{item.name}</h4>
                </div>
              </Link>
            </CardStyles>
          ))}
        </div>

        <Link className="link-cta browse" to="/treatments">
          Browse the services
        </Link>
      </div>
    </TreatmentsStyles>
  )
}

const data = [
  {
    name: 'Remedial Massage',
    background: remedialBg,
  },
  {
    name: 'Sound Healing / Reiki',
    background: singingBowlBg,
  },
]
