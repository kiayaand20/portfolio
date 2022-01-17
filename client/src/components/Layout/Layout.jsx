// import '.Layout.css'
import Nav from '../Nav/Nav'

function Layout(props) {
  return (
    <div>
      <Nav />
      <div className="layout-children">
            {props.children}
        </div>
    </div>
  )
}

export default Layout