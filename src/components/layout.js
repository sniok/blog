import React from "react"
import { Link } from "gatsby"
import Twitter from "./twitter"
import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h3
          style={{
            marginBottom: rhythm(1.5),
            marginTop: 0,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
          <Twitter />
        </h3>
      )
    } else {
      header = (
        <h3
          style={{
            marginTop: 0,
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
              fontWeight: 700,
            }}
            to={`/`}
          >
            {title}
          </Link>
          <Twitter />
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(26),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer />
      </div>
    )
  }
}

export default Layout
