import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { PageHero } from '../components/Hero'
import SEO from '../components/SEO'

import { treatmentsData, addOnData } from '../data/treatmentsData'

const PageWrap = styled.main`
  background: var(--cream);
`

const Intro = styled.section`
  padding: 4rem 3rem 4rem;
  max-width: 720px;
  margin: 0 auto;
  text-align: center;

  p {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-size: 2rem;
    line-height: 1.5;
    color: var(--ink-soft);
  }
`

const PriceList = styled.section`
  max-width: 920px;
  margin: 0 auto;
  padding: 0 3rem 4rem;

  .treatment {
    border-top: 1px solid rgba(31, 31, 31, 0.12);
    padding: 4rem 0;

    &:last-child {
      border-bottom: 1px solid rgba(31, 31, 31, 0.12);
    }
  }

  .treatment-head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 2rem;
    gap: 2rem;
    flex-wrap: wrap;

    h3 {
      font-family: 'Italiana', serif;
      font-size: clamp(2.6rem, 1.5rem + 1.8vw, 3.6rem);
      margin: 0;
      color: var(--ink);
    }

    .from {
      font-family: 'Poppins', sans-serif;
      font-size: 1.2rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--muted);
    }
  }

  .tiers {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .tier {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 1rem 0;
    border-bottom: 1px dashed rgba(31, 31, 31, 0.08);
    gap: 2rem;

    &:last-child { border-bottom: none; }

    .time {
      font-family: 'Cormorant Garamond', serif;
      font-style: italic;
      font-size: 1.7rem;
      color: var(--ink-soft);
    }

    .price {
      font-family: 'Italiana', serif;
      font-size: 2rem;
      color: var(--ink);
      letter-spacing: 0.04em;
    }
  }
`

const AddOnSection = styled.section`
  background: var(--cream-soft);
  padding: 6rem 0;

  .wrap {
    max-width: 920px;
    margin: 0 auto;
    padding: 0 3rem;
  }

  .header {
    text-align: center;
    margin-bottom: 3rem;

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
      font-size: clamp(2.6rem, 1.5rem + 1.8vw, 3.6rem);
      color: var(--ink);
      margin-bottom: 0.75rem;
    }

    p {
      font-family: 'Cormorant Garamond', serif;
      font-style: italic;
      font-size: 1.7rem;
      color: var(--ink-soft);
    }
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    border-top: 1px solid rgba(31, 31, 31, 0.12);

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 1.5rem;
    border-bottom: 1px solid rgba(31, 31, 31, 0.08);

    .name {
      font-family: 'Cormorant Garamond', serif;
      font-style: italic;
      font-size: 1.7rem;
      color: var(--ink-soft);
    }

    .meta {
      display: flex;
      gap: 1.5rem;
      align-items: baseline;

      .duration {
        font-family: 'Poppins', sans-serif;
        font-size: 1rem;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: var(--muted);
      }

      .price {
        font-family: 'Italiana', serif;
        font-size: 1.8rem;
        color: var(--ink);
      }
    }
  }
`

const Policy = styled.section`
  padding: 5rem 3rem;
  text-align: center;
  max-width: 720px;
  margin: 0 auto;

  .eyebrow {
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 1rem;
    display: inline-block;
  }

  h4 {
    font-family: 'Italiana', serif;
    font-size: clamp(2.4rem, 1.5rem + 1.5vw, 3rem);
    margin-bottom: 1rem;
  }

  p {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-size: 1.7rem;
    line-height: 1.5;
    color: var(--ink-soft);
  }
`

const CTA = styled.section`
  background: var(--sage);
  color: var(--cream);
  padding: 6rem 3rem;
  text-align: center;

  h3 {
    font-family: 'Italiana', serif;
    font-size: clamp(2.8rem, 2rem + 2vw, 4rem);
    color: var(--cream);
    margin-bottom: 2.5rem;
  }
`

export default function PricePage() {
  return (
    <PageWrap>
      <SEO title="Price" />
      <PageHero title="Price" eyebrow="Investment" />

      <Intro>
        <p>
          A clear, simple guide to our offerings — to help you choose the
          treatment that's <em>right for you</em>.
        </p>
      </Intro>

      <PriceList>
        {treatmentsData.map(treatment => (
          <div className="treatment" key={treatment.id}>
            <div className="treatment-head">
              <h3>{treatment.name}</h3>
              <span className="from">
                From {treatment.price.find(p => p.price !== '-')?.price}
              </span>
            </div>
            <ul className="tiers">
              {treatment.price
                .filter(p => p.price !== '-')
                .map(p => (
                  <li className="tier" key={p.time}>
                    <span className="time">{p.time}</span>
                    <span className="price">{p.price}</span>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </PriceList>

      <AddOnSection>
        <div className="wrap">
          <div className="header">
            <span className="eyebrow">Enhance your treatment</span>
            <h3>Add-on services</h3>
            <p>
              Twenty-minute additions to extend or focus your session.
            </p>
          </div>
          <div className="grid">
            {addOnData.map(item => (
              <div className="row" key={item.id}>
                <span className="name">{item.name}</span>
                <div className="meta">
                  <span className="duration">{item.duration}</span>
                  <span className="price">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AddOnSection>

      <Policy>
        <span className="eyebrow">Please note</span>
        <h4>Cancellation policy</h4>
        <p>
          If you cancel, reschedule or do not attend your appointment without
          providing 24 hours' notice, a fee of <em>$50</em> will be charged.
        </p>
      </Policy>

      <CTA>
        <h3>Ready when you are</h3>
        <Link
          className="link-cta"
          to="/booking"
          style={{ color: 'var(--cream)', borderColor: 'var(--cream)' }}
        >
          Book your appointment
        </Link>
      </CTA>
    </PageWrap>
  )
}
