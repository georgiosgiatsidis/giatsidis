import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const useTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return [theme, setTheme];
};

export default useTheme;
