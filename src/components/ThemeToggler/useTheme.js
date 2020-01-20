import { useState } from 'react';

const useTheme = () => {
    const [theme, setLocalTheme] = useState(window.__theme);

    function setTheme(theme) {
        window.__setPreferredTheme(theme);
        setLocalTheme(theme);
    }

    return [theme, setTheme];
};

export default useTheme;
