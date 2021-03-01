import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

import maleAvatar from '../images/icons/icons8-circled-user-male-skin-type-1-2-100.png'
import femaleAvatar from '../images/icons/icons8-circled-user-female-skin-type-3-100.png'

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
          {data.map(item => {
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

const data = [
  {
    id: 1,
    name: 'John Searle',
    avatar: maleAvatar,
    comment:
      "What a wonderful personalised and caring experience I had with Monica with a 90min massage. I've had plenty of massages in my time and it was a real pleasure to feel important and my needs catered for with the massage. I would recommend anybody to come and experience the joy of having a massage with Monica at Pure Bodywork, I am already looking forward to my next visit.",
    shortComment: 'What a wonderful personalised and caring experience!',
  },
  {
    id: 2,
    name: 'Ellaine Din',
    avatar: femaleAvatar,
    comment:
      "I cannot believe how amazing monica's hand-works! She definitely have some magic's on her hands! She took all my body and muscles pains away, I feel so much lighter. No more headaches! She is the best massager I have ever tried, and I cannot wait to see her again ! Very professional.. HIGHLY RECOMMENDED !",
    shortComment:
      "She definitely have some magic's on her hands! She took all my body and muscles pains away",
  },
  {
    id: 3,
    name: 'Jalene Van',
    avatar: femaleAvatar,
    comment:
      'Oh my goodness..... what a fantastic experience! She customized our massage to suit our needs. Her magic hands and fingers did the trick and I felt amazing afterwards. Monica is a lovely lady with a warm personality. What a pleasure it was meeting her.',
    shortComment:
      'She customized our massage to suit our needs. Her magic hands and fingers did the trick and I felt amazing afterwards.',
  },
  {
    id: 4,
    name: 'Li Chu',
    avatar: femaleAvatar,
    comment:
      'This is my second time to get a massage here. The atmosphere of the shop is very cozy. Monica is very attentive and professional. I feel much better. She got English and Mandarin language abilities. So highly recommend her to everyone. ',
    shortComment:
      'The atmosphere of the shop is very cozy. Monica is very attentive and professional.',
  },
  {
    id: 5,
    name: 'LokSze Lee',
    avatar: femaleAvatar,
    comment:
      'Monica is very nice, massage and facial are very great ! Highly recommend',
    shortComment:
      'Monica is very nice, massage and facial are very great ! Highly recommend',
  },
  {
    id: 6,
    name: 'Stephanie Huang',
    avatar: femaleAvatar,
    comment:
      "Had an excellent massage! Was so sore in a few different areas, from my neck, to my back and down to my legs! But after the massage and a good night's rest, I feel so much better! Thank you!",
    shortComment: "Had an excellent massage and a good night's rest",
  },
]
