import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { members } from '../data/utility'

const TeamStyles = styled.section`
  background: var(--cream);
  padding: 8rem 0;

  .meet {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 3rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;

    @media (max-width: 760px) {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }

  .portrait {
    position: relative;
    aspect-ratio: 4 / 5;
    overflow: hidden;
    background: var(--cream-soft);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .copy {
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
      font-size: clamp(3rem, 2rem + 2.5vw, 5rem);
      margin: 0 0 1.5rem;
      color: var(--ink);
    }

    .role {
      font-family: 'Poppins', sans-serif;
      font-size: 1.2rem;
      letter-spacing: 0.28em;
      text-transform: uppercase;
      color: var(--muted);
      margin-bottom: 2.5rem;
    }

    p {
      font-family: 'Cormorant Garamond', serif;
      font-style: italic;
      font-size: 2rem;
      line-height: 1.5;
      color: var(--ink-soft);
      margin-bottom: 2.5rem;
    }
  }

  .read-more {
    margin-top: 1rem;
  }
`

export const Team = () => {
  const monica = members[0]
  if (!monica) return null
  return (
    <TeamStyles>
      <div className="meet">
        <div className="portrait">
          <img src={monica.avatarImage} alt={monica.name} />
        </div>
        <div className="copy">
          <span className="eyebrow">Meet your therapist</span>
          <h3>{monica.name}</h3>
          <div className="role">Remedial Massage Therapist</div>
          <p>{monica.description}</p>
          <Link className="link-cta read-more" to="/team">
            Read more
          </Link>
        </div>
      </div>
    </TeamStyles>
  )
}
