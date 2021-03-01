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
  /* width: 100%; */
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  justify-content: center;

  /* padding: 0px 3rem; */
  height: 80px;

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
      background-color: var(--purple);
    }
    &:hover {
      cursor: pointer;
      color: var(--white);
      &:before,
      &:after {
        width: 100%;
        opacity: 1;
      }
    }
  }

  @media (max-width: 640px) {
    /*Mobile View */
    justify-content: flex-end;

    ul.nav-options {
      /* display: flex; */
      grid-template-columns: repeat(1, auto);
      grid-template-rows: repeat(4, auto);

      /* height: 350px; */
      position: absolute;
      top: 80px;
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
      /* height: 10vw; */
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
    title: 'About',
    icon: <GiLotus />,
    link: '/about',
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
