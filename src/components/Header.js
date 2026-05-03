import React, { useState } from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'

import { ReactComponent as FacebookIcon } from '../images/icons/facebook-logo.svg'
import { ReactComponent as InstagramIcon } from '../images/icons/instagram-logo.svg'

import Nav from './Nav'
import logo from '../images/v2/logo.jpg'
import Notification from './Notification'
import { note } from '../data/utility'

const HeaderStyles = styled.header`
  padding: 1.5rem 0 0 0;
  background: var(--cream);
  border-bottom: 1px solid rgba(31, 31, 31, 0.08);
  width: 100%;
  position: fixed;
  z-index: 999;

  transition: padding 0.4s ease;

  &.active {
    padding-top: 0.75rem;
    box-shadow: 0 1px 0 rgba(31, 31, 31, 0.06);
  }

  .wrapper {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
  }

  .logo {
    width: 100%;
    display: flex;

    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    img {
      width: 110px;
      transition: width 0.4s ease;
      mix-blend-mode: multiply;
    }
    position: relative;

    &.active {
      img {
        width: 56px;
      }
    }
    @media (max-width: 640px) {
      img {
        width: 80px;
        margin: 0;
      }
    }
  }

  .social-icons {
    position: absolute;
    top: 0.5rem;
    left: 2.5rem;
    display: flex;
    align-items: center;
    svg {
      width: 18px;
      height: 18px;
      color: var(--sage);
      opacity: 0.75;
      transition: opacity 0.2s ease;
    }
    a:hover svg {
      opacity: 1;
    }
    a ~ a {
      margin-left: 1rem;
    }
  }

  @media (max-width: 640px) {
    .social-icons {
      left: 1.5rem;
      svg {
        width: 16px;
        height: 16px;
      }
    }
  }
`

export default function Header(props) {
  const [navAct, setNavAct] = useState(false)

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 80) {
        setNavAct(true)
      } else {
        setNavAct(false)
      }
    })
  }

  return (
    <>
      <HeaderStyles className={navAct ? 'active' : ''}>
        {note.available ? <Notification /> : ''}
        <div className="wrapper">
          <div className={`logo ${navAct ? 'active' : ''}`}>
            <Link to="/">
              <img className="" src={logo} alt="logo" />
            </Link>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/purebodywork.au/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FacebookIcon />
              </a>

              <a
                href="https://www.instagram.com/purebodywork.au/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
          <Nav />
        </div>
      </HeaderStyles>
    </>
  )
}
