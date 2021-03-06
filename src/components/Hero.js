import React from 'react'
import styled from 'styled-components'
import bg from '../images/room-1.jpeg'
import { BsArrowRight } from 'react-icons/bs'
import Slider from 'react-slick'

import hero1 from '../images/room-1.jpeg'
import hero2 from '../images/reception-1.jpg'
import hero3 from '../images/room-4.jpg'
import hero4 from '../images/street-view.jpeg'

const BOOKING_URL =
  'https://perthhealthcare.au1.cliniko.com/bookings?business_id=74448&practitioner_id=159109'

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
}

const HeroStyles = styled.div`
  padding-top: 22rem;
  h2 {
    color: var(--primary);
    text-transform: uppercase;
  }
`

const SliderStyles = styled.div`
  height: 50vh;
  background: ${props => `url(${props.bg})`};
  background-position: center center;
  background-size: cover;
`

function Hero() {
  console.log(hero1)
  return (
    <HeroStyles className="center">
      <h2>Pure Bodywork</h2>
      <h4>A tranquil experience through our caring hands</h4>
      <Slider {...sliderSettings}>
        <SliderStyles className="slider-image" bg={hero1} />
        <SliderStyles className="slider-image" bg={hero2} />
        <SliderStyles className="slider-image" bg={hero3} />
        <SliderStyles className="slider-image" bg={hero4} />
      </Slider>
    </HeroStyles>
  )
}

export default Hero

const PageHeroStyles = styled.div`
  padding-top: 22rem;
  width: 100%;
  min-height: 15vh;
  background: linear-gradient(
      to right,
      var(--gradient-primary),
      var(--gradient-secondary)
    ),
    ${props => `url(${props.bg})`};
  background-position: center center;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    text-shadow: 0 0 3px var(--error);
  }
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
