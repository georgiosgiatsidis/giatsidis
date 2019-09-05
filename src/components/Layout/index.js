import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from './globalStyle';
import Navbar from '../Navbar';

const Layout = ({ children }) => {
    return (
        <>
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
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
