import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Menu from '../Menu';
import ThemeToggler from '../ThemeToggler';

const Navbar = ({ fixed }) => {
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
        <Menu fixed={fixed}>
            <ul>
                {menuLinks.map(link => (
                    <li key={link.name}>
                        <Link to={link.link}>{link.name}</Link>
                    </li>
                ))}
                <li>
                    <ThemeToggler />
                </li>
            </ul>
        </Menu>
    );
};

Navbar.propType = {
    fixed: PropTypes.bool,
};

Navbar.defaultProps = {
    fixed: false,
};

export default Navbar;
