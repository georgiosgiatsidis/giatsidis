import React from 'react';
import Toggler from './Toggler';
import { Wrapper, Label, Input, LightIcon, DarkIcon } from './styles';

const ThemeToggler = () => {
    return (
        <Toggler>
            {({ theme, toggleTheme }) => (
                <Wrapper>
                    <Label checked={theme === 'dark'}>
                        {theme === 'dark' ? (
                            <DarkIcon>🌙</DarkIcon>
                        ) : (
                            <LightIcon>☀️</LightIcon>
                        )}
                        <Input
                            type="checkbox"
                            onChange={e =>
                                toggleTheme(e.target.checked ? 'dark' : 'light')
                            }
                            checked={theme === 'dark'}
                        />
                    </Label>
                </Wrapper>
            )}
        </Toggler>
    );
};

export default ThemeToggler;
