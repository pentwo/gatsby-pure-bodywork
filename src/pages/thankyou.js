import * as React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components/Hero'
import SEO from '../components/SEO'

const ThankYouStyles = styled.div`
  margin-bottom: 3rem;
`

// markup
const QnAPage = () => {
  return (
    <>
      <main>
        <SEO title="Thank you"></SEO>
        <title>Thank you</title>
        <PageHero title="Thank you" />
        <ThankYouStyles>
          <div className="wrapper-column">
            <h3>Thank you for your message.</h3>
            <h4>We will get in touch soon.</h4>
          </div>
        </ThankYouStyles>
      </main>
    </>
  )
}

export default QnAPage
