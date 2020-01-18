import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
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
        <Menu>
            <ul>
                {menuLinks.map(link => (
                    <li key={link.name}>
                        <Link to={link.link}>{link.name}</Link>
                    </li>
                ))}
            </ul>
            <ThemeToggler>
                {({ theme, toggleTheme }) => (
                    <label>
                        <input
                            type="checkbox"
                            onChange={e =>
                                toggleTheme(e.target.checked ? 'dark' : 'light')
                            }
                            checked={theme === 'dark'}
                        />{' '}
                        Dark mode
                    </label>
                )}
            </ThemeToggler>
        </Menu>
    );
};

export default Navbar;
