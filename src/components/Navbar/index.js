import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Menu from '../Menu';

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
    );

    const { menuLinks } = site.siteMetadata;

    return (
        <nav>
            <Menu>
                <ul>
                    {menuLinks.map(link => (
                        <li key={link.name}>
                            <Link to={link.link}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </Menu>
        </nav>
    );
};

export default Navbar;
