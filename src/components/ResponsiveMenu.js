import React, { useState } from 'react'
import styled from 'styled-components'

const SmallMenu = styled.nav`
  display: none;
  text-align: center;

  @media (max-width: ${props => props.size}) {
    display: block;
  }
`

const SmallMenuList = styled.ul`
  height: ${props => (props.showMenu ? '100%' : 0)};
  transition: all 1s linear;
  overflow: hidden;
  /* @media (max-width: ${props => props.size}) {
    height: 0;
  } */
`

const LargeMenu = styled.nav`
  display: block;
  text-align: center;
  @media (max-width: ${props => props.size}) {
    display: none;
  }
`

const MenuIcon = ({ onClick, icon }) => (
  <div role="button" onClick={onClick}>
    {icon}
  </div>
)

const ResponsiveMenu = ({
  menu,
  largeMenuClassName,
  smallMenuClassName,
  changeMenuOn,
  menuOpenButton,
  menuCloseButton,
}) => {
  const [showMenu, setMenu] = useState(true)

  const handleClick = () => {
    setMenu(!showMenu)
  }
  return (
    <>
      <LargeMenu className={largeMenuClassName} size={changeMenuOn}>
        {menu}
      </LargeMenu>
      <SmallMenu className={smallMenuClassName} size={changeMenuOn}>
        {!showMenu ? (
          <MenuIcon onClick={() => handleClick()} icon={menuOpenButton} />
        ) : (
          <MenuIcon onClick={() => handleClick()} icon={menuCloseButton} />
        )}
        {/* <SmallMenuList showMenu={showMenu}>{menu}</SmallMenuList> */}
        {showMenu ? (
          <SmallMenuList showMenu={showMenu}>{menu}</SmallMenuList>
        ) : null}
      </SmallMenu>
    </>
  )
}

export default ResponsiveMenu
