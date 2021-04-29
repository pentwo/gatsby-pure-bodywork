import React from 'react'
import styled from 'styled-components'
import bg from '../images/room-1.jpeg'
import { BsArrowRight } from 'react-icons/bs'
import Slider from 'react-slick'

import hero1 from '../images/room-3.jpg'
import hero2 from '../images/reception-1.jpg'
import hero3 from '../images/room-4.jpg'
import hero4 from '../images/street-view.jpeg'

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
  padding-top: var(--hero-padding-top);
  h2 {
    color: var(--primary);
    text-transform: uppercase;
  }
  @media (max-width: 640px) {
    padding-top: var(--hero-mobile-padding-top);
  }
`

const SliderStyles = styled.div`
  height: 50vh;
  background: ${props => `url(${props.bg})`};
  background-position: center center;
  background-size: cover;
`

function Hero() {
  return (
    <HeroStyles className="center">
      <h2>Pure Bodywork Massage & Beauty</h2>
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
  padding-top: var(--hero-padding-top);
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
    padding-top: var(--hero-mobile-padding-top);
    min-height: 20vh;
  }
`

export function PageHero({ title, background = bg }) {
  return (
    <PageHeroStyles bg={bg}>
      <h2>{title}</h2>
    </PageHeroStyles>
  )
}
