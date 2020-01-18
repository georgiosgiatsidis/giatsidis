import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from './globalStyle';
import Navbar from '../Navbar';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

const Layout = ({ children }) => {
    return (
        <div
            style={{
                color: 'var(--textNormal)',
                background: 'var(--bg)',
                transition: 'color 0.3s ease-out, background 0.3s ease-out',
                minHeight: '100vh',
            }}
        >
            <GlobalStyle />
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: `100%`,
                    padding: 0,
                }}
            >
                <Navbar />
                <main>{children}</main>
            </div>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
