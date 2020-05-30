/* eslint-disable react/prop-types */
import React from 'react';

var preferredTheme;

try {
    preferredTheme = localStorage.getItem('theme');
} catch (err) {
    //
}

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = React.useState();

    React.useEffect(() => {
        if (theme) {
            console.log(theme);
            document.body.className = theme;
            try {
                localStorage.setItem('theme', theme);
            } catch (err) {
                //
            }
        }
    }, [theme]);

    React.useEffect(() => {
        var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
        darkQuery.addListener(function (e) {
            setTheme(e.matches ? 'dark' : 'light');
        });

        setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
