import React from 'react'
import Header from '../Header/Header'

// import TextContent from '../TextContent/TextContent'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

const LayoutBlock = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default LayoutBlock
