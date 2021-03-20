import React from 'react'
import styled from 'styled-components'

import { members } from '../data/utility'

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
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: space-between;
    gap: 5rem;
  }

  .member {
    text-align: center;
    align-self: start;
  }
  article {
  }
  img {
    max-width: 300px;
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
          <div className="member" key={member.name}>
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
