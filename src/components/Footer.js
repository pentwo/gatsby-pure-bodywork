import React from 'react'
import styled from 'styled-components'
import { AiFillPhone, AiFillMail } from 'react-icons/ai'
import { Link } from 'gatsby'
import { businessHour } from '../data/utility'

const FooterStyles = styled.div`
  padding: 3rem 10vw;

  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 3rem;

  background: var(--light);

  font-size: 1.5rem;

  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;
  }

  .hours {
    /* grid-row: 1/3; */
  }
  .copyrights {
    grid-column: span 3;
  }
  .phone,
  .email {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    a {
      text-decoration: none;
    }
    svg {
      width: 24px;
      height: 24px;
      margin-right: 1rem;
    }
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto 1fr;
    .hours {
      li ~ li {
        margin-bottom: 1rem;
      }
      li {
        flex-direction: column;
      }
      .hour {
        text-align: right;
      }
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
          {businessHour.map(item => {
            return (
              <li key={item.day}>
                <span className="day">{item.day}</span>
                <span className="hour">{item.hour}</span>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="contact">
        <h5>Contact</h5>
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
      </div>

      <div className="sitemap">
        <h5>Sitemap</h5>
        <ul>
          <li>
            <Link to="/team">OUR TEAM</Link>
          </li>
          <li>
            <Link to="/treatments">TREATMENTS</Link>
          </li>
          <li>
            <Link to="/price">PRICE</Link>
          </li>
          <li>
            <Link to="/qna">Q&A</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li>
            <Link to="/booking">BOOKING</Link>
          </li>
        </ul>
      </div>
      <div className="copyrights center">
        <p>&copy; Code by Pen</p>
      </div>
    </FooterStyles>
  )
}
