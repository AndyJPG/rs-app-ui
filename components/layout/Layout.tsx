import React from 'react'
import Navbar from './Navbar'

const Layout = (props: { children?: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  )
}

export default Layout
