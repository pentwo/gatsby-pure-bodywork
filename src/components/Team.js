import React from 'react'
import styled from 'styled-components'

import monicaAvatar from '../images/avatar.jpg'

const TeamStyles = styled.section`
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
    /* grid-template-columns: repeat(auto-fill, minmax(min(35rem, 100%), 1fr)); */
    grid-template-columns: minmax(min(35rem, 45rem));
    align-items: center;
    justify-content: space-between;
    gap: 5rem;
  }

  .member {
    text-align: center;
  }
  article {
  }
  img {
    border-radius: 5000px;
    margin-bottom: 2rem;
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

export const Team = () => {
  return (
    <TeamStyles>
      <h3 className="center">About Us</h3>
      <div className="wrapper">
        {members.map(member => (
          <div className="member">
            <img src={member.avatarImage} alt="" />
            <h3>{member.name}</h3>
            <article>
              <p>{member.description}</p>
            </article>
          </div>
        ))}
      </div>
    </TeamStyles>
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

const members = [
  {
    name: 'Monica',
    avatarImage: monicaAvatar,
    description:
      'I am passionate about helping others to improve their well-being by offering relaxing and rejuvenating treatments that nurture the self and lead to long term health solutions. I believe in practicing holistically and focusing on both your physical and emotional needs, establishing a balance between the mind and body.',
  },
]
