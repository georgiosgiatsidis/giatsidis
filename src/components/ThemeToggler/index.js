import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

const Toggler = () => (
    <ThemeToggler>
        {({ theme, toggleTheme }) => (
            <>
                <input
                    type="checkbox"
                    onChange={e =>
                        toggleTheme(e.target.checked ? 'dark' : 'light')
                    }
                    checked={theme === 'dark'}
                />
                Dark mode
            </>
        )}
    </ThemeToggler>
);

export default Toggler;
