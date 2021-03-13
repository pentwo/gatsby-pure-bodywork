import * as React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components/Hero'
import SEO from '../components/SEO'

const QnAStyles = styled.div`
  article {
    margin-bottom: 3rem;
  }
`

// markup
const QnAPage = () => {
  return (
    <>
      <main>
        <SEO title="Q&A"></SEO>
        <title>Q&A</title>
        <PageHero title="Q&A" />
        <QnAStyles>
          <div className="wrapper-column">
            <article>
              <h3>
                What should I expect during my first massage therapy visit?
              </h3>
              <p>
                Your massage therapist may require you to fill out a health
                history form. Afterwards, the therapist will begin by asking you
                general questions to establish what areas you would like worked
                on if any conditions are needing to be addressed and to
                determine if massage is appropriate for you. It is important to
                list all health concerns, medications any allergies so the
                therapist can adapt the session to your specific needs without
                doing any harm. Once the treatment has been determined, the
                therapist will leave the room to allow you the privacy to get on
                to the table and make yourself comfortable. Before re-entering
                the room to begin the treatment, your therapist will knock on
                the door to make sure you are ready for your treatment.
              </p>
            </article>
            <article>
              <h3>What do I do during a massage treatment?</h3>
              <p>
                Make yourself comfortable. If your therapist wants you to adjust
                your position, she will either move you or will ask you to move
                what is needed. Otherwise, change your position anytime to make
                yourself more comfortable. Many people close their eyes and
                relax completely during a session; others prefer to talk. It's
                up to you. It is your massage, and whatever feels natural to you
                is the best way to relax. Do not hesitate to ask questions at
                any time.
              </p>
            </article>
            <article>
              <h3>How will I feel after my massage treatment?</h3>
              <p>
                Most people feel very relaxed and refresh after massage. Some
                experience a significant decrease or freedom from long-term
                aches and pains. Many feel a little slowed down for a short
                period and then notice an increase of energy, heightened
                awareness and increased productivity which can last for days. If
                you received a deep massage, you may be slightly sore the next
                day - much like a good workout at the gym. Sometimes a hot
                shower, or a soak in the tub can ease this soreness. After your
                session you should increase your water intake a bit. Just a
                glass or two more than normal is usually fine. This helps keep
                your body's tissues hydrated and healthy.
              </p>
            </article>
            <article>
              <h3>How many sessions will I need?</h3>
              <p>
                Honestly, it’s hard to say. Every person is unique and every
                condition is unique to each person. It may take one session or
                it may take several. You and your therapist will be able to talk
                more specifically about this after your first session and she
                has had a chance to evaluate your body's tissues.
              </p>
            </article>
          </div>
        </QnAStyles>
      </main>
    </>
  )
}

export default QnAPage
