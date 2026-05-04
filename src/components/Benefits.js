import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const BenefitsStyles = styled.section`
  background: var(--cream-soft);
  padding: 8rem 0;

  .grid {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    text-align: center;

    @media (max-width: 760px) {
      grid-template-columns: 1fr;
      gap: 4rem;
    }
  }

  .card {
    h4 {
      font-family: 'Italiana', serif;
      font-size: clamp(2.4rem, 1.5rem + 1.5vw, 3.2rem);
      line-height: 1.2;
      max-width: 22ch;
      margin: 0 auto 1.5rem;
      color: var(--ink);
    }

    p {
      font-family: 'Cormorant Garamond', serif;
      font-style: italic;
      font-size: 1.7rem;
      line-height: 1.55;
      max-width: 38ch;
      margin: 0 auto 2rem;
      color: var(--ink-soft);
    }
  }
`

export default function Benefits() {
  return (
    <BenefitsStyles>
      <div className="grid">
        <div className="card">
          <h4>What are the benefits of being treated by an RMT?</h4>
          <p>
            Trained therapists are <em>highly skilled</em> health-care providers
            — rest assured your visit is in good hands.
          </p>
          <Link className="link-cta" to="/treatments">
            Learn more
          </Link>
        </div>
        <div className="card">
          <h4>What to know before your appointment</h4>
          <p>
            New to massage therapy? <em>Natural to wonder</em> what your first
            visit looks like. We've answered the common questions.
          </p>
          <Link className="link-cta" to="/qna">
            Get more info
          </Link>
        </div>
      </div>
    </BenefitsStyles>
  )
}
