import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import bg from '../images/v2/room-hero-01.webp'
import Slider from 'react-slick'

import hero1 from '../images/v2/room-hero-01.webp'
import hero2 from '../images/v2/room-wide-01.webp'
import hero3 from '../images/v2/room-hero-02.webp'
import hero4 from '../images/v2/display-wide-01.webp'

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
  padding-bottom: 4rem;
  text-align: center;

  .brand {
    font-family: 'Italiana', serif;
    font-size: clamp(4rem, 2rem + 6vw, 8rem);
    letter-spacing: 0.06em;
    line-height: 1.05;
    margin-bottom: 1.5rem;
    color: var(--ink);
  }

  .tagline {
    font-family: 'Poppins', sans-serif;
    font-size: 1.3rem;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 1rem;
  }

  .location-pill {
    display: inline-block;
    border: 1px solid var(--ink);
    border-radius: 999px;
    padding: 0.4rem 1.4rem;
    font-family: 'Poppins', sans-serif;
    font-size: 1.1rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--ink);
    margin-bottom: 4rem;
  }

  .hero-statement {
    font-family: 'Italiana', serif;
    font-size: clamp(2.4rem, 1.5rem + 2.5vw, 4rem);
    line-height: 1.25;
    max-width: 26ch;
    margin: 0 auto 2.5rem;
    color: var(--ink);

    em {
      font-family: 'Cormorant Garamond', serif;
      font-style: italic;
    }
  }

  .hero-cta {
    margin-bottom: 4rem;
  }

  .slick-slider {
    margin-top: 3rem;
  }

  @media (max-width: 640px) {
    padding-top: var(--hero-mobile-padding-top);
  }
`

const SliderStyles = styled.div`
  height: 60vh;
  background: ${props => `url(${props.bg})`};
  background-position: center center;
  background-size: cover;
`

function Hero() {
  return (
    <HeroStyles>
      <div className="tagline">Registered Massage Therapy</div>
      <h1 className="brand">Pure Bodywork</h1>
      <div className="location-pill">East Perth</div>

      <p className="hero-statement">
        Treatments that focus on <em>mind</em>, body &amp; balance.
      </p>

      <Link className="link-cta hero-cta" to="/booking">
        Book your appointment
      </Link>

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
  padding-bottom: 4rem;
  width: 100%;
  background: var(--cream);
  text-align: center;

  .eyebrow {
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 1rem;
    display: inline-block;
  }

  h1 {
    font-family: 'Italiana', serif;
    font-size: clamp(3.6rem, 2rem + 4.5vw, 6rem);
    letter-spacing: 0.04em;
    line-height: 1.1;
    color: var(--ink);
    margin: 0;
  }

  .divider {
    width: 60px;
    height: 1px;
    background: var(--ink);
    margin: 2rem auto 0;
    opacity: 0.4;
  }

  @media (max-width: 640px) {
    padding-top: var(--hero-mobile-padding-top);
  }
`

export function PageHero({ title, eyebrow }) {
  return (
    <PageHeroStyles>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h1>{title}</h1>
      <div className="divider" />
    </PageHeroStyles>
  )
}
