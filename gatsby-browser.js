/* eslint-disable react/prop-types */
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from 'react';
import { ThemeProvider } from 'context/ThemeContext';
import 'tailwind/index.css';

export const wrapRootElement = ({ element }) => (
    <ThemeProvider>{element}</ThemeProvider>
);
