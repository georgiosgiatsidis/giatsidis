import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Menu from 'components/Menu';
import ThemeToggler from 'components/ThemeToggler';
import { useScrollHandler } from 'hooks/useScrollHandler';

const Navbar = ({ fixed }) => {
    const scroll = useScrollHandler();

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
        <Menu fixed={fixed} scroll={scroll}>
            <ul>
                {menuLinks.map((link) => (
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

Navbar.propTypes = {
    fixed: PropTypes.bool,
};

Navbar.defaultProps = {
    fixed: false,
};

export default Navbar;
