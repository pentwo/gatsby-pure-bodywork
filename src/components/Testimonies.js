import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import { FaStar, FaGoogle } from 'react-icons/fa'

import { testimoniesData } from '../data/testimoniesData'

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 20000,
  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
}

const TestimoniesStyles = styled.section`
  background: var(--cream-soft);
  .wrapper {
    display: block;
    margin: 3rem auto;
    max-width: 1100px;
    padding: 0 3rem;
  }
  h3 {
    font-family: 'Italiana', serif;
    margin-bottom: 4rem;
  }
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .slick-prev::before,
  .slick-next::before {
    color: var(--ink);
  }
  .slick-dots li button:before {
    color: var(--sage);
  }
`

const CardStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 2rem;
  text-align: center;
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1.25rem;
    opacity: 0.85;
  }
  .name {
    font-family: 'Italiana', serif;
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: var(--ink);
  }
  .comment {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-size: 1.7rem;
    line-height: 1.5;
    color: var(--ink-soft);
    max-width: 28ch;
  }
  .rating {
    display: flex;
    gap: 3px;
    color: #c9a14a;
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
  .source {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1.25rem;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--muted);
    svg {
      color: var(--sage);
      width: 12px;
      height: 12px;
    }
  }
`

const Card = ({ name, id, avatar, shortComment, rating, source }) => {
  return (
    <CardStyles className="card" key={id}>
      <img src={avatar} alt="" />
      <h4 className="name">{name}</h4>
      {rating ? (
        <div
          className="rating"
          aria-label={`${rating} out of 5 stars`}
        >
          {Array.from({ length: rating }).map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
      ) : null}
      <p className="comment">{shortComment}</p>
      {source === 'Google Reviews' ? (
        <div className="source">
          <FaGoogle />
          <span>via Google Reviews</span>
        </div>
      ) : null}
    </CardStyles>
  )
}

export const Testimonies = () => {
  return (
    <TestimoniesStyles>
      <div className="wrapper">
        <h3 className="center">What People Say</h3>
        <Slider {...sliderSettings}>
          {testimoniesData.map(item => {
            return (
              <Card
                name={item.name}
                id={item.id}
                key={item.id}
                avatar={item.avatar}
                shortComment={item.shortComment}
                rating={item.rating}
                source={item.source}
              ></Card>
            )
          })}
        </Slider>
      </div>
    </TestimoniesStyles>
  )
}
