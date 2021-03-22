import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components/Hero'
import SEO from '../components/SEO'

import { members } from '../data/utility'
import bg from '../images/background/pexels-anete-lusina-5240643.jpg'

const TeamStyles = styled.div`
  /* background-image: linear-gradient(
      to right,
      var(--gradient-primary),
      var(--gradient-secondary)
    ),
    url(${bg});
  background-position: center center;
  background-size: cover;
  background-attachment: fixed; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`

const MemberStyles = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding-right: 2rem;
  padding-left: 2rem;
  img {
    max-width: 250px;
    margin-bottom: 2rem;
  }
  &:hover {
    background-color: var(--grey);
  }
`

export default function TeamPage() {
  return (
    <>
      <main>
        <SEO title="Our Team"></SEO>

        <PageHero title="Our Team" />
        <div className="wrapper">
          <TeamStyles>
            {members.map(member => {
              return (
                <MemberStyles key={member.name}>
                  <img src={member.avatarImage} alt="" />
                  <h3 className="center">{member.name}</h3>
                  <article
                    dangerouslySetInnerHTML={{ __html: member.fullDescription }}
                  ></article>
                </MemberStyles>
              )
            })}
          </TeamStyles>
        </div>
      </main>
    </>
  )
}
