import React from 'react'
import styled from 'styled-components'
import { AiFillPhone, AiFillMail } from 'react-icons/ai'

const FooterStyles = styled.div`
  padding: 3rem 10vw;
  /* width: 100%; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  background: var(--light);

  align-items: center;
  font-size: 1.5rem;

  ul {
    list-style: none;
  }
  li {
    margin-bottom: 0.5rem;
  }

  .hours {
    grid-row: 1/3;
  }
  .copyrights {
    grid-column: span 2;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    .hours {
      grid-row: 1/2;
    }
    .copyrights {
      grid-column: 1;
    }
  }
`

export default function Footer() {
  return (
    <FooterStyles>
      <div className="hours">
        <h5>Business Hours</h5>
        <ul>
          <li>Monday 9:00 am - 6:30 pm</li>
          <li>
            <span className="mark">Tuesday Closed</span>
          </li>
          <li>Wednesday 9:00 am - 6:30 pm </li>
          <li>Thursday 9:00 am - 6:30 pm </li>
          <li>Friday 9:00 am - 5:00 pm</li>
          <li>Saturday 10:00 am - 2:00 pm</li>
          <li>Sunday 11:00 am - 4:00 pm</li>
        </ul>
      </div>

      <div className="contact">
        <h5>Contact</h5>
        <phone>
          <AiFillPhone />
          (08) 9221 1188
        </phone>
        <div className="email">
          <AiFillMail />

          <a href="mailto:purebodywork.au@gmail.com">
            purebodywork.au@gmail.com
          </a>
        </div>
      </div>

      <div className="copyrights center">
        <p>&copy; Code by Pen</p>
      </div>
    </FooterStyles>
  )
}
