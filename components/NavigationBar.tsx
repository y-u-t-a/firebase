import { Navbar, Nav } from 'react-bootstrap'
import { CSSProperties } from 'react'
import { useRouter } from 'next/router'

const menues = [
  {link:"/", name: "Home"},
  {link:"/about", name: "About"},
]

const NavigationBar = () => {
  return (
    <Navbar
      bg="light"
      style={navBarStyle}
    >
      <Navbar.Brand>
        <a href="/">
          <img
            src="/images/30320735.png"
            width="50"
            height="50"
            alt="icon"
          />
        </a>
        {' '} Yuta Ueno's Page
      </Navbar.Brand>
      <Nav>
        {menues.map(menu => {
          return navItem(menu.link, menu.name)
        })}
      </Nav>
    </Navbar>
  )
}

const navBarStyle:CSSProperties = {
  borderBottom: "0.5px solid rgba(0, 0, 0, 0.5)",
  padding: "8px 16px 8px 16px"
}

const navItem = (link:string, name:string) => {
  const router = useRouter()
  const active = router.asPath === link
  const activeStyle:CSSProperties = active? {borderBottom: "solid"} : {}
  return (
    <Nav.Link
      key={name}
      href={link}
      active={active}
      style={activeStyle}
    >
      {name}
    </Nav.Link>
  )
}

export default NavigationBar