import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components/Hero'
import SEO from '../components/SEO'

import { members } from '../data/utility'

const TeamStyles = styled.div`
  display: grid;
  grid-template-columns: ${props => `repeat(${props.length}, 1fr)`};
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
  console.log(members)
  return (
    <>
      <main>
        <SEO title="Our Team"></SEO>

        <PageHero title="Our Team" />
        <div className="wrapper">
          <TeamStyles length={members.length}>
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
