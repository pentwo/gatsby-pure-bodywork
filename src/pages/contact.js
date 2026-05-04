import React from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import { AiFillPhone, AiFillMail } from 'react-icons/ai'
import { FaWhatsapp } from 'react-icons/fa'

import { PageHero } from '../components/Hero'
import SEO from '../components/SEO'
import useForm from '../utils/useForm'
import { CONTACT_EMAIL, CONTACT_PHONE } from '../data/utility'

const PageWrap = styled.main`
  background: var(--cream);
  padding-bottom: 6rem;
`

const Intro = styled.section`
  padding: 3rem 3rem 4rem;
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

const ContactStyles = styled.div`
  max-width: 920px;
  margin: 0 auto;
  padding: 0 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .contact-info {
    h4 {
      font-family: 'Italiana', serif;
      font-size: clamp(2.6rem, 1.5rem + 1.8vw, 3.4rem);
      margin-bottom: 2rem;
    }
    .row {
      display: flex;
      align-items: center;
      margin-bottom: 1.5rem;
    }
    svg {
      width: 18px;
      height: 18px;
      margin-right: 1rem;
      color: var(--sage);
    }
    a {
      text-decoration: none;
      font-family: 'Cormorant Garamond', serif;
      font-style: italic;
      font-size: 1.7rem;
      color: var(--ink);
      border-bottom: 1px solid var(--sage);
      padding-bottom: 2px;
      transition: opacity 0.2s;
      &:hover { opacity: 0.7; }
    }
    .whatsapp svg {
      color: var(--sage);
    }
  }
`

const FormStyles = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  h4 {
    font-family: 'Italiana', serif;
    font-size: clamp(2.6rem, 1.5rem + 1.8vw, 3.4rem);
    margin-bottom: 1rem;
  }

  fieldset {
    display: grid;
    overflow: auto;
    gap: 1rem;
    align-content: start;
    border: 0;
    padding: 0;
  }

  legend {
    font-family: 'Poppins', sans-serif;
    font-size: 1.1rem;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--muted);
    padding: 0;
    margin-bottom: 0.5rem;
  }

  label {
    font-family: 'Poppins', sans-serif;
    font-size: 1.1rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--muted);
    margin-top: 0.5rem;
  }

  input,
  textarea {
    background: transparent;
    border: 0;
    border-bottom: 1px solid rgba(31, 31, 31, 0.25);
    padding: 0.75rem 0;
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    color: var(--ink);
    transition: border-color 0.2s ease;
    &:focus {
      outline: none;
      border-color: var(--sage);
    }
  }

  textarea {
    border: 1px solid rgba(31, 31, 31, 0.25);
    padding: 1rem;
    resize: vertical;
  }

  .buttons {
    margin-top: 1rem;
  }
`

export default function ContactPage() {
  const { values, updateValue } = useForm({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }
  const submitMessage = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...values }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  return (
    <PageWrap>
      <SEO title="Contact" />
      <PageHero title="Contact" eyebrow="Get in touch" />

      <Intro>
        <p>
          Have a question? <em>We'd love</em> to hear from you.
        </p>
      </Intro>

      <ContactStyles>
        <div className="contact-info">
          <h4>Reach us directly</h4>
          <div className="row phone">
            <AiFillPhone />
            <a href={`tel:${CONTACT_PHONE.tel}`}>{CONTACT_PHONE.display}</a>
          </div>
          <div className="row whatsapp">
            <FaWhatsapp />
            <a
              href={CONTACT_PHONE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
          <div className="row email">
            <AiFillMail />
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </div>
        </div>

        <FormStyles
          name="contact"
          method="POST"
          onSubmit={submitMessage}
          data-netlify="true"
          action="/thankyou"
        >
          <h4>Send a message</h4>
          <input type="hidden" name="form-name" value="contact" />
          <fieldset>
            <legend>Your details</legend>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={updateValue}
            />
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={values.phone}
              onChange={updateValue}
            />
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={updateValue}
            />
          </fieldset>
          <fieldset>
            <legend>Your message</legend>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="6"
              value={values.message}
              onChange={updateValue}
            />
          </fieldset>

          <div className="buttons">
            <button type="submit">Submit</button>
          </div>
        </FormStyles>
      </ContactStyles>
    </PageWrap>
  )
}
