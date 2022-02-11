import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import React from 'react';

function Layout(props) {
  return (
    <div>
      <Nav />
      <div className="layout-children">
            {props.children}
        </div>
      <Footer />
    </div>
  )
}

export default Layout