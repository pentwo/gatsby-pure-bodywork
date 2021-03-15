import { Link } from 'gatsby'
import React, { useState } from 'react'
import styled from 'styled-components'
import { FaBars, FaQuestion } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import { GiLotus } from 'react-icons/gi'
import { HiClipboardList } from 'react-icons/hi'
import { ImPriceTag } from 'react-icons/im'
import { RiContactsBook2Fill } from 'react-icons/ri'

import { BOOKING_URL } from '../data/utility'

const NavStyles = styled.nav`
  padding: 0 3rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'nav contact';

  .nav-options {
    display: grid;
    gap: 2rem;

    padding: 0;
    margin: 0;
    list-style-type: none;
    &.nav {
      grid-area: nav;
      grid-template-columns: repeat(5, auto);
      justify-self: start;
    }
    &.contact {
      grid-area: contact;
      grid-template-columns: repeat(2, auto);
      justify-self: end;
    }
  }

  .option {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav a {
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.5;
    transition: all 0.2s ease-in-out;
    position: relative;
    display: block;
    &:before,
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 0px;
      height: 5px;

      transition: all 0.5s ease-in-out;

      opacity: 0;
      background-color: var(--purple);
    }
    &:hover {
      cursor: pointer;

      &:before,
      &:after {
        width: 100%;
        opacity: 1;
      }
    }
  }
  .contact a {
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.5;
  }

  /* Menu Button */
  .mobile-menu {
    display: none;
  }
  .menu-icon {
    margin: 0.5rem;
    width: 36px;
    height: 36px;
  }

  /* MOBILE DESIGN */
  @media (max-width: 640px) {
    padding: 0;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    grid-template-areas:
      'contact'
      'nav';

    .nav-options {
      background: var(--primary);
      position: fixed;
      width: 100%;
      display: grid;

      visibility: hidden;
      opacity: 0;
      transform: translateX(-100%);
      transition: opacity 0.5s ease;

      grid-gap: 0px;
      &.nav {
        grid-template-columns: repeat(1, auto);
      }
      &.contact {
      }

      &.active {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        transition: opacity 0.5s ease;

        &.nav {
          transform: translateY(90px);
        }
        &.contact {
        }
      }
    }

    a {
      font-size: 2rem;
      width: 100%;
      text-align: center;
      padding: 3rem 0px;
    }

    .option {
    }
    .mobile-menu {
      z-index: 999;
      display: block;
      position: absolute;
      right: 2rem;
      top: 2rem;
    }
  }
`
const Nav = () => {
  const [active, setActive] = useState(false)
  const handleClick = () => setActive(!active)
  const closeMobileMenu = () => setActive(false)
  return (
    <NavStyles>
      <ul className={active ? 'nav-options nav active' : 'nav-options nav'}>
        {navLinks.map(i => (
          <li
            className="option"
            onClick={closeMobileMenu}
            key={`${i.title}-${i.id}`}
          >
            <Link to={i.link}>
              {i.icon}
              {i.title}
            </Link>
          </li>
        ))}
      </ul>
      <ul
        className={
          active ? 'nav-options contact active' : 'nav-options contact'
        }
      >
        <li className="option">
          <a href="tel:+61892211188">(08) 9221 1188</a>
        </li>
        <li className="option">
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            <button>Book now</button>
          </a>
        </li>
      </ul>
      <button className="mobile-menu" onClick={handleClick}>
        {active ? (
          <MdClose className="menu-icon" />
        ) : (
          <FaBars className="menu-icon" />
        )}
      </button>
    </NavStyles>
  )
}

export default Nav

const navLinks = [
  {
    id: 1,
    title: 'Our Team',
    icon: <GiLotus />,
    link: '/team',
  },
  {
    id: 2,
    title: 'Treatments',
    icon: <HiClipboardList />,
    link: '/treatments',
  },
  {
    id: 3,
    title: 'Price',
    icon: <ImPriceTag />,
    link: '/price',
  },
  {
    id: 4,
    title: 'Q&A',
    icon: <FaQuestion />,
    link: '/qna',
  },
  {
    id: 5,
    title: 'Contact',
    icon: <RiContactsBook2Fill />,
    link: '/contact',
  },
]
