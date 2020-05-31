/* eslint-disable react/prop-types */
import React from 'react';

const Container = ({ children }) => (
    <div className="container mx-auto px-4 text-lg max-w-screen-xs">
        {children}
    </div>
);

export default Container;
