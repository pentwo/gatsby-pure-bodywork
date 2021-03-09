import React, { useState } from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'

import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
// import FacebookIcon from '../images/icons/facebook-logo.svg'
// import InstagramIcon from '../images/icons/instagram-logo.svg'

// import ResponsiveMenu from './ResponsiveMenu'
import Nav from './Nav'
import logo from '../images/logo.png'

const HeaderStyles = styled.header`
  padding: 2rem 0;
  background: var(--white);
  width: 100%;
  position: fixed;
  z-index: 999;

  transition: all 0.4s linear;

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
    margin-bottom: 2rem;
    img {
      width: 100px;
      transition: all 0.4s linear;
    }
    position: relative;
  }
  .social-icons {
    position: absolute;
    top: 2rem;
    left: 2rem;
    svg {
      width: 24px;
      height: 24px;
    }
  }

  @media (max-width: 640px) {
    .logo img {
      margin: 0;
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
        <div className="wrapper">
          <div className="logo">
            <Link to="/">
              <img className="" src={logo} alt="logo" />
            </Link>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/purebodywork.au/"
                target="_blank"
                rel="noreferrer noopener"
              >
                {/* <FacebookIcon /> */}
              </a>

              <a
                href="https://www.instagram.com/purebodywork.au/"
                target="_blank"
                rel="noreferrer noopener"
              >
                {/* <InstagramIcon /> */}
              </a>
            </div>
          </div>
          <Nav />
        </div>
      </HeaderStyles>
    </>
  )
}
