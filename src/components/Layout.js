import React from 'react'
import 'normalize.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { IconContext } from 'react-icons'

import Header from './Header'
import Footer from './Footer'

import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'

export default function Layout({ children }) {
  return (
    <>
      <IconContext.Provider value={{ className: 'react-icons' }}>
        <GlobalStyles />
        <Typography />
        <Header />
        {children}
        <Footer />
      </IconContext.Provider>
    </>
  )
}
