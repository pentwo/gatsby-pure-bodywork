import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

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
  .wrapper {
    display: block;
    margin: 3rem auto;
  }
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .slick-prev::before,
  .slick-next::before {
    color: var(--dark);
  }
`

const CardStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  img {
    margin-bottom: 2rem;
  }
  h4 {
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.5rem;
    line-height: 1.5;
  }
`

const Card = ({ name, id, avatar, shortComment }) => {
  return (
    <CardStyles className="card" key={id}>
      <img src={avatar} alt="" />
      <h4 className="name">{name}</h4>
      <p className="comment">{shortComment}</p>
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
              ></Card>
            )
          })}
        </Slider>
      </div>
    </TestimoniesStyles>
  )
}
