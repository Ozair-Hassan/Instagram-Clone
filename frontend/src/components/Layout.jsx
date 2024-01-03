import React from 'react'
import Footer from './Footer'

const Layout = ({ children, showFooter = true }) => (
  <>
    {/* Add any common components, like a header, here */}
    {children}
    {showFooter && <Footer />}
  </>
)

export default Layout
