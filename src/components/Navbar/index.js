import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Navbar = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            menuLinks {
              name
              link
            }
          }
        }
      }
    `
  )

  const { menuLinks } = site.siteMetadata

  return (
    <nav>
      <ul style={{ display: "flex", flex: 1 }}>
        {menuLinks.map(link => (
          <li
            key={link.name}
            style={{
              listStyleType: `none`,
              padding: `1rem`,
            }}
          >
            <Link style={{ color: `white` }} to={link.link}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
