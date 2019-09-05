import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

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
    console.log('test');
    return (
        <nav>
            <ul>
                {menuLinks.map(link => (
                    <li key={link.name}>
                        <Link to={link.link}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
