import React from 'react';
import styled, { css } from 'styled-components';
import Toggler from './Toggler';

const Wrapper = styled.div`
    display: inline-flex;
`;

const Label = styled.label`
    display: block;
    position: relative;
    width: 60px;
    height: 30px;
    background: var(--textLink);
    border-radius: 40px;
    user-select: none;
    cursor: pointer;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 30px;
        height: 30px;
        background: #fff;
        border-radius: 40px;
        transition: left 250ms ease;
    }

    ${props =>
        props.checked &&
        css`
            &:after {
                left: 100%;
                transform: translateX(-100%);
            }
        `}
`;

const Input = styled.input`
    width: 0;
    height: 0;
    visibility: hidden;
`;

const DarkIcon = styled.span`
    display: block;
    text-align: left;
    padding-left: 9px;
`;

const LightIcon = styled.span`
    display: block;
    text-align: right;
    padding-right: 5px;
`;

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
