import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { PageHero } from '../components/Hero'
import SEO from '../components/SEO'

const PageWrap = styled.main`
  background: var(--cream);
`

const Intro = styled.section`
  padding: 4rem 3rem 4rem;
  max-width: 720px;
  margin: 0 auto;
  text-align: center;

  p {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-size: 2rem;
    line-height: 1.5;
    color: var(--ink-soft);
  }
`

const QnaList = styled.section`
  max-width: 820px;
  margin: 0 auto;
  padding: 0 3rem 6rem;

  article {
    border-top: 1px solid rgba(31, 31, 31, 0.12);
    padding: 3rem 0;

    &:last-child {
      border-bottom: 1px solid rgba(31, 31, 31, 0.12);
    }

    h3 {
      font-family: 'Italiana', serif;
      font-size: clamp(2rem, 1.5rem + 0.8vw, 2.6rem);
      margin-bottom: 1.5rem;
      color: var(--ink);
      max-width: 36ch;
      line-height: 1.3;
    }

    p {
      font-family: 'Poppins', sans-serif;
      font-size: 1.5rem;
      line-height: 1.8;
      color: var(--ink-soft);
      max-width: 65ch;
    }
  }
`

const CTA = styled.section`
  background: var(--sage);
  color: var(--cream);
  padding: 6rem 3rem;
  text-align: center;

  .eyebrow {
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    opacity: 0.85;
    margin-bottom: 1rem;
    display: inline-block;
  }

  h3 {
    font-family: 'Italiana', serif;
    font-size: clamp(2.8rem, 2rem + 2vw, 4rem);
    color: var(--cream);
    margin-bottom: 2rem;
  }

  p {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-size: 1.8rem;
    color: var(--cream);
    opacity: 0.95;
    max-width: 50ch;
    margin: 0 auto 2.5rem;
  }
`

const qna = [
  {
    q: 'What should I expect during my first massage therapy visit?',
    a:
      "Your massage therapist may require you to fill out a health history form. Afterwards, the therapist will begin by asking you general questions to establish what areas you would like worked on, any conditions that need to be addressed, and to determine if massage is appropriate for you. It's important to list all health concerns, medications and allergies so the therapist can adapt the session to your specific needs without doing any harm. Once the treatment has been determined, the therapist will leave the room to allow you the privacy to get on to the table and make yourself comfortable. Before re-entering the room, your therapist will knock to make sure you are ready.",
  },
  {
    q: 'What do I do during a massage treatment?',
    a:
      "Make yourself comfortable. If your therapist wants you to adjust your position, she will either move you or will ask you to move. Otherwise, change your position any time to be more comfortable. Many people close their eyes and relax completely; others prefer to talk. It's up to you — whatever feels natural is the best way to relax. Don't hesitate to ask questions at any time.",
  },
  {
    q: 'How will I feel after my massage treatment?',
    a:
      "Most people feel very relaxed and refreshed after massage. Some experience a significant decrease or freedom from long-term aches and pains. Many feel a little slowed down for a short period, then notice an increase in energy, heightened awareness and productivity that can last for days. If you received a deep massage, you may be slightly sore the next day — much like a good workout. A hot shower or a soak in the tub can ease this. After your session, increase your water intake a little — just a glass or two more than normal helps keep your body's tissues hydrated and healthy.",
  },
  {
    q: 'How many sessions will I need?',
    a:
      "It's hard to say — every person is unique and every condition is unique to each person. It may take one session, or it may take several. You and your therapist will be able to talk more specifically about this after your first session, once she has had a chance to evaluate your body's tissues.",
  },
]

const QnAPage = () => {
  return (
    <PageWrap>
      <SEO title="Q&A" />
      <PageHero title="Questions & Answers" eyebrow="Good to know" />

      <Intro>
        <p>
          New to massage therapy? Here are <em>helpful answers</em> to the most
          common questions before your first appointment.
        </p>
      </Intro>

      <QnaList>
        {qna.map((item, i) => (
          <article key={i}>
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </article>
        ))}
      </QnaList>

      <CTA>
        <span className="eyebrow">Still got questions?</span>
        <h3>We're here to help</h3>
        <p>
          Drop us a line — we'd <em>love</em> to hear from you.
        </p>
        <Link
          className="link-cta"
          to="/contact"
          style={{ color: 'var(--cream)', borderColor: 'var(--cream)' }}
        >
          Contact us
        </Link>
      </CTA>
    </PageWrap>
  )
}

export default QnAPage
