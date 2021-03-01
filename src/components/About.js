import React from 'react'
import styled from 'styled-components'

import Avatar from '../images/avatar.jpg'

const AboutStyles = styled.section`
  /* padding: 3rem 10vw; */
  padding-top: 5rem;
  padding-bottom: 5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--light);
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    justify-content: center;
    gap: 5rem;
  }

  article {
  }
  img {
    border-radius: 5000px;
  }
  @media (max-width: 640px) {
    .wrapper {
      grid-template-columns: 1fr;
      img {
        justify-self: center;
      }
    }
  }
`

export const About = () => {
  return (
    <AboutStyles>
      <h3 className="center">About Me</h3>
      <div className="wrapper">
        <img src={Avatar} alt="" />
        <article>
          <p>
            I am passionate about helping others to improve their well-being by
            offering relaxing and rejuvenating treatments that nurture the self
            and lead to long term health solutions. I believe in practicing
            holistically and focusing on both your physical and emotional needs,
            establishing a balance between the mind and body.
          </p>
        </article>
      </div>
    </AboutStyles>
  )
}

/*
<p>
  After 10 years of experience in the massage industry, as part of
  my practice I combine the techniques of Traditional Chinse
  Medicine with Five Element acupuncture and believe in treating the
  underlying cause of the symptoms, helping to lead to a more
  permanent health solution.
</p>
<p>
  I believe that in order to be great in the world you must love and
  nourish your body. As a woman living and working in a fast-paced,
  demanding urban environment, I know the pressure to succeed, look
  good and live up to our own high expectations can be overwhelming.
</p>
<p>
  We can get so focused on our outside environment that we lose
  touch with our bodies and ourselves. And yet that’s exactly where
  I’ve discovered we need to start in order to truly take care of
  ourselves. ​
</p>
<p>
  It’s my goal to create space for others to discover their own
  inner power and wisdom so they can emerge as the greatest version
  of themselves.
</p>
*/
