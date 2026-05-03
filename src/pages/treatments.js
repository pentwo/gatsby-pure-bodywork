import React from 'react'
import Collapsible from 'react-collapsible'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { treatmentsData } from '../data/treatmentsData'

import { PageHero } from '../components/Hero'
import SEO from '../components/SEO'

import { IoIosArrowDown } from 'react-icons/io'

const PageWrap = styled.main`
  background: var(--cream);
`

const Intro = styled.section`
  padding: 4rem 3rem 3rem;
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

const ListWrap = styled.section`
  padding: 2rem 3rem 6rem;
  max-width: 1100px;
  margin: 0 auto;
`

const Item = styled.div`
  border-top: 1px solid rgba(31, 31, 31, 0.12);

  &:last-child {
    border-bottom: 1px solid rgba(31, 31, 31, 0.12);
  }

  .Collapsible {
    &__trigger {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
      padding: 2.5rem 0;
      cursor: pointer;
      transition: opacity 0.2s ease;

      &:hover {
        opacity: 0.7;
      }

      h3 {
        font-family: 'Italiana', serif;
        font-size: clamp(2.4rem, 1.5rem + 1.5vw, 3.4rem);
        margin: 0;
        color: var(--ink);
        flex: 1;
      }

      .icon {
        height: 24px;
        width: 24px;
        color: var(--sage);
        flex-shrink: 0;
        transition: transform 300ms;
      }

      &.is-open .icon {
        transform: rotateZ(180deg);
      }
    }
  }

  .description {
    padding: 0 0 3rem;
    max-width: 720px;

    p {
      font-family: 'Poppins', sans-serif;
      font-size: 1.5rem;
      line-height: 1.8;
      color: var(--ink-soft);
      margin-bottom: 1.5rem;
    }

    ul {
      list-style: none;
      padding: 0;
      margin-bottom: 1.5rem;
    }

    li {
      font-family: 'Cormorant Garamond', serif;
      font-style: italic;
      font-size: 1.6rem;
      line-height: 1.6;
      padding: 0.4rem 0;
      color: var(--ink-soft);
    }
  }
`

const CTA = styled.section`
  background: var(--sage);
  color: var(--cream);
  padding: 6rem 3rem;
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
    margin-bottom: 2rem;
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

export default function TreatmentsPage() {
  return (
    <PageWrap>
      <SEO title="Treatments" />
      <PageHero title="Treatments" eyebrow="Our offerings" />

      <Intro>
        <p>
          A curated selection of bodywork — chosen to support your{' '}
          <em>physical, mental and emotional</em> wellbeing.
        </p>
      </Intro>

      <ListWrap>
        {treatmentsData.map(treatment => (
          <Item key={`treatment-${treatment.id}`}>
            <Collapsible
              trigger={
                <>
                  <h3>{treatment.name}</h3>
                  <IoIosArrowDown className="icon" />
                </>
              }
            >
              <div
                className="description"
                dangerouslySetInnerHTML={{ __html: treatment.description }}
              />
            </Collapsible>
          </Item>
        ))}
      </ListWrap>

      <CTA>
        <span className="eyebrow">Ready to begin?</span>
        <h3>Book your appointment</h3>
        <p>
          Choose a location and time that suits — Monica practises across{' '}
          <em>two studios</em> across Perth.
        </p>
        <Link
          className="link-cta"
          to="/booking"
          style={{ color: 'var(--cream)', borderColor: 'var(--cream)' }}
        >
          Book now
        </Link>
      </CTA>
    </PageWrap>
  )
}
