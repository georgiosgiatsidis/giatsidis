import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './global.css';

config.autoAddCss = false;

const Layout = ({ children }) => {
    return (
        <div
            style={{
                margin: `0 auto`,
                maxWidth: `100%`,
                padding: 0,
                color: 'var(--textNormal)',
                background: 'var(--bg)',
                transition: 'color 0.3s ease-out, background 0.3s ease-out',
                minHeight: '100vh',
            }}
        >
            <Navbar />
            <main>{children}</main>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
