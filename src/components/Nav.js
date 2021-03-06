import { Link } from 'gatsby'
import React, { useState } from 'react'
import styled from 'styled-components'
import { FaBars, FaQuestion } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import { GiLotus } from 'react-icons/gi'
import { HiClipboardList } from 'react-icons/hi'
import { ImPriceTag } from 'react-icons/im'
import { RiContactsBook2Fill } from 'react-icons/ri'

const NavStyles = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  ul.nav-options {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(${props => props.length}, auto);
    padding: 0;
    gap: 2rem;
    list-style-type: none;
    margin: 0;
  }
  li.option {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mobile-menu {
    display: none;
  }
  .menu-icon {
    margin: 0.5rem;
    width: 36px;
    height: 36px;
  }
  a {
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
      background-color: var(--primary);
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

  @media (max-width: 640px) {
    justify-content: center;

    ul.nav-options {
      grid-template-columns: repeat(1, auto);
      grid-template-rows: repeat(4, auto);

      position: absolute;
      top: 225px;
      left: -100%;
      opacity: 0;
      transition: all 0.5s ease;

      grid-gap: 0px;
    }
    ul.nav-options.active {
      background: var(--purple);

      left: 0;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
      align-content: center;
      padding-left: 0px;
    }
    a {
      color: var(--white);
      width: 100%;
      text-align: center;
      padding: 3rem 0px;
    }

    .option {
    }
    .mobile-menu {
      display: block;
    }
  }
`
const Nav = () => {
  const [active, setActive] = useState(false)
  const handleClick = () => setActive(!active)
  const closeMobileMenu = () => setActive(false)
  return (
    <NavStyles length={navLinks.length}>
      <ul className={active ? 'nav-options active' : 'nav-options'}>
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

      <div className="mobile-menu" onClick={handleClick}>
        {active ? (
          <MdClose className="menu-icon" />
        ) : (
          <FaBars className="menu-icon" />
        )}
      </div>
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
