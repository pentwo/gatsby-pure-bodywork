import React from 'react'
import styled from 'styled-components'
import { AiFillPhone, AiFillMail } from 'react-icons/ai'

import { PageHero } from '../components/Hero'
import SEO from '../components/SEO'
import useForm from '../utils/useForm'

const ContactStyles = styled.div`
  margin-bottom: 3rem;
  svg {
    width: 24px;
    height: 24px;
    margin-right: 1rem;
  }
  a {
    text-decoration: none;
    margin-bottom: 2rem;
  }
`

const FormStyles = styled.form`
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  fieldset {
    display: grid;
    grid-column: span 2;
    overflow: auto;
    gap: 1rem;
    align-content: start;
  }
  .recaptcha {
    grid-column: span 2;
  }
  button {
    margin: 1rem;
  }
`

export default function ContactPage() {
  const { values, updateValue } = useForm({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const submitMessage = e => {
    e.preventDefault()

    let formData = new FormData(values)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log('Form successfully submitted'))
      .catch(error => alert(error))
  }

  return (
    <>
      <main>
        <SEO title="Contact"></SEO>

        <PageHero title="Contact" />
        <div className="wrapper-column">
          <ContactStyles className="contact">
            <h4>Contact</h4>
            <div className="phone">
              <AiFillPhone />
              <a href="tel:+61892211188">(08) 9221 1188</a>
            </div>
            <div className="email">
              <AiFillMail />

              <a href="mailto:purebodywork.au@gmail.com">
                purebodywork.au@gmail.com
              </a>
            </div>
          </ContactStyles>
          <h4>Write to us</h4>
          <FormStyles
            name="contact"
            method="POST"
            onSubmit={submitMessage}
            data-netlify-recaptcha="true"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <fieldset>
              <legend>Your Info</legend>
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
              <legend>Your Message</legend>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                value={values.textarea}
                onChange={updateValue}
              ></textarea>
            </fieldset>
            <div className="recaptcha" data-netlify-recaptcha="true"></div>
            <div className="buttons">
              <button type="submit">Submit</button>
            </div>
          </FormStyles>
        </div>
      </main>
    </>
  )
}
