import React, { useState } from 'react'
import styled from 'styled-components'
import { Img } from 'gatsby-image'
import { useStaticQuery, graphql, Link } from 'gatsby'

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
    padding: 0 3rem;
  }

  .logo {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      margin-inline-end: 1rem;
      width: 100px;
      transition: all 0.4s linear;
      margin-bottom: 2rem;
    }
  }

  &.active {
    /* background: var(--white); */

    a:hover {
      /* color: var(--purple); */
    }
    img {
      /* transform: scale(0.8); */
    }
  }
  @media (max-width: 640px) {
    /* width: calc(100vw - 3rem); */
    width: 100%;
    /* flex-direction: row; */
    /* justify-content: space-between; */
    /* border-bottom: 2px solid MediumPurple; */
  }
`

const Menu = styled.ul`
  ul {
    padding: 0;
  }
  li {
    display: inline;
    font-size: 13px;
    list-style-type: none;
    margin-left: 30px;
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 20px;
    color: MediumPurple;
    &:hover {
      color: white;
    }
  }
  @media (max-width: 500px) {
    padding: 10px 0;
    li {
      padding: 10px 0;
      display: block;
      margin-left: 0;
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
              {/* <h1>Pure Bodywork</h1> */}
            </Link>
          </div>
          <Nav />
        </div>
      </HeaderStyles>
    </>
  )
}
