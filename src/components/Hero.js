import React from 'react'
import styled from 'styled-components'
import bg from '../images/IMG_4619.jpeg'
import { BsArrowRight } from 'react-icons/bs'

const BOOKING_URL =
  'https://perthhealthcare.au1.cliniko.com/bookings?business_id=74448&practitioner_id=159109'

const HeroStyles = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
      to left,
      var(--primary-opacity),
      var(--light-opacity)
    ),
    ${props => `url(${props.bg})`};
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .text {
    margin-bottom: auto;
    margin-top: auto;
  }
  h2 {
    font-size: 4.5rem;
    margin-bottom: 3rem;
    text-shadow: 0 0 3px var(--error);
  }
  button {
    font-size: 3rem;
    padding: 1rem 4rem 1rem 2rem;
    position: relative;
    z-index: 1;
    svg {
      right: -1rem;
      transition: all 0.3s ease-in-out;
    }
    &:hover {
      svg {
        right: -4rem;
      }
    }
  }
`

function Hero() {
  return (
    <HeroStyles bg={bg}>
      <div className="wrapper">
        <div className="text">
          <h2>A tranquil experience through our caring hands</h2>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            <button>
              Book Now
              <BsArrowRight />
            </button>
          </a>
        </div>
      </div>
    </HeroStyles>
  )
}

export default Hero

const PageHeroStyles = styled.div`
  width: 100%;
  min-height: 30vh;
  background: linear-gradient(
      to left,
      var(--primary-opacity),
      var(--light-opacity)
    ),
    ${props => `url(${props.bg})`};
  background-position: center center;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 640px) {
    min-height: 20vh;
  }
`

export function PageHero({ title }) {
  return (
    <PageHeroStyles bg={bg}>
      <h2>{title}</h2>
    </PageHeroStyles>
  )
}
