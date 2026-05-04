import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { PageHero } from '../components/Hero'
import SEO from '../components/SEO'

import { members } from '../data/utility'

const PageStyles = styled.div`
  background: var(--cream);
`

const HeroSection = styled.section`
  background: var(--cream);
  padding: 4rem 0 7rem;

  .wrap {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;

    @media (max-width: 760px) {
      grid-template-columns: 1fr;
    }
  }

  .portrait {
    aspect-ratio: 4 / 5;
    overflow: hidden;
    background: var(--cream-soft);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
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
    h2 {
      font-family: 'Italiana', serif;
      font-size: clamp(3.2rem, 2rem + 3vw, 5.4rem);
      margin: 0 0 1rem;
      color: var(--ink);
    }
    .role {
      font-family: 'Poppins', sans-serif;
      font-size: 1.2rem;
      letter-spacing: 0.28em;
      text-transform: uppercase;
      color: var(--muted);
      margin-bottom: 2rem;
    }
  }
`

const StorySection = styled.section`
  background: var(--cream);
  padding-top: 0;

  .wrap {
    max-width: 920px;
    margin: 0 auto;
    padding: 0 3rem 6rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;

    @media (max-width: 760px) {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  article {
    p {
      font-family: 'Poppins', sans-serif;
      font-size: 1.5rem;
      line-height: 1.8;
      color: var(--ink-soft);
      margin-bottom: 1.5rem;
    }

    h5 {
      font-family: 'Poppins', sans-serif;
      font-size: 1.2rem;
      letter-spacing: 0.28em;
      text-transform: uppercase;
      color: var(--ink);
      margin: 3rem 0 1.5rem;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    li {
      font-family: 'Cormorant Garamond', serif;
      font-style: italic;
      font-size: 1.7rem;
      line-height: 1.6;
      color: var(--ink-soft);
      padding: 0.4rem 0;
      border-bottom: 1px solid rgba(31, 31, 31, 0.08);
    }
  }
`

const QualSection = styled.section`
  background: var(--sage);
  color: var(--cream);
  padding: 6rem 0;
  text-align: center;

  .eyebrow {
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    opacity: 0.85;
    margin-bottom: 1rem;
    display: inline-block;
  }

  h3 {
    font-family: 'Italiana', serif;
    font-size: clamp(2.8rem, 2rem + 2vw, 4rem);
    color: var(--cream);
    margin-bottom: 2.5rem;
  }

  p {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-size: 1.8rem;
    color: var(--cream);
    opacity: 0.95;
    max-width: 50ch;
    margin: 0 auto 2.5rem;
  }
`

export default function TeamPage() {
  const monica = members[0]
  if (!monica) return null

  // Split fullDescription into prose paragraphs and qualification list
  const splitMarker = '<h5>'
  const [proseHtml, listHtml] = monica.fullDescription.includes(splitMarker)
    ? monica.fullDescription.split(splitMarker)
    : [monica.fullDescription, '']

  return (
    <PageStyles>
      <main>
        <SEO title="About Monica" />
        <PageHero title="Meet Monica" eyebrow="Your therapist" />

        <HeroSection>
          <div className="wrap">
            <div className="portrait">
              <img src={monica.avatarImage} alt={monica.name} />
            </div>
            <div className="copy">
              <span className="eyebrow">Your registered therapist</span>
              <h2>{monica.name}</h2>
              <div className="role">Remedial Massage Therapist</div>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: 'italic',
                  fontSize: '2rem',
                  lineHeight: 1.5,
                  color: 'var(--ink-soft)',
                }}
              >
                {monica.description}
              </p>
              <Link className="link-cta" to="/booking">
                Schedule your appointment
              </Link>
            </div>
          </div>
        </HeroSection>

        <StorySection>
          <div className="wrap">
            <article
              dangerouslySetInnerHTML={{ __html: proseHtml }}
            />
            {listHtml ? (
              <article
                dangerouslySetInnerHTML={{ __html: '<h5>' + listHtml }}
              />
            ) : null}
          </div>
        </StorySection>

        <QualSection>
          <span className="eyebrow">Looking for more info?</span>
          <h3>Explore our services</h3>
          <p>
            From <em>remedial massage</em> to sound healing — discover what
            Monica can offer for your wellbeing.
          </p>
          <Link
            className="link-cta"
            to="/treatments"
            style={{ color: 'var(--cream)', borderColor: 'var(--cream)' }}
          >
            View treatments
          </Link>
        </QualSection>
      </main>
    </PageStyles>
  )
}
