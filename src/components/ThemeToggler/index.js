import React from 'react';
import useTheme from 'hooks/useTheme';
import { Wrapper, Label, Input, LightIcon, DarkIcon } from './styles';

const ThemeToggler = () => {
    const [theme, setTheme] = useTheme();

    return (
        <Wrapper>
            <Label checked={theme === 'dark'}>
                {theme === 'dark' ? (
                    <DarkIcon>🌙</DarkIcon>
                ) : (
                    <LightIcon>☀️</LightIcon>
                )}
                <Input
                    type="checkbox"
                    onChange={(e) =>
                        setTheme(e.target.checked ? 'dark' : 'light')
                    }
                    checked={theme === 'dark'}
                />
            </Label>
        </Wrapper>
    );
};

export default ThemeToggler;
