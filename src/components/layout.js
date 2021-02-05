import React from "react"
import { Link } from "gatsby"
import button from "../styles/button.png"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `2rem`}}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 800, padding: `0 1rem`}}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: 'none'}}>
          <h3 style={{ display: `inline` }}>Portfolio</h3>
        </Link>
        <ul style={{ listStyle: `circle`, float: `right`}}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/projects/">Projects</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}