import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Container = styled.nav`
    & ul {
        list-style: none;
        display: flex;
        padding: 0;

        li {
            margin: 1rem;
        }
    }

    ${props =>
        props.fixed &&
        css`
            z-index: 1000;
            position: fixed;
        `}
`;

const MobileMenu = styled.div`
    display: none;
    text-align: center;
    @media (max-width: ${props => props.size}) {
        display: block;
    }

    & ul {
        flex-direction: column;
    }
`;

const DesktopMenu = styled.div`
    display: block;
    text-align: center;
    @media (max-width: ${props => props.size}) {
        display: none;
    }
`;

const MenuButton = styled.a`
    display: block;
    width: 50px;
    height: 50px;
    position: relative;
    z-index: 1000;

    & span,
    & span::before,
    & span::after {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -10px;
        margin-top: -1px;
        width: 20px;
        height: 2px;
        background-color: var(--textTitle);
    }

    & span::before,
    & span::after {
        content: '';
        display: block;
        transition: 0.2s;
    }

    & span::before {
        transform: translateY(-5px);
    }

    & span::after {
        transform: translateY(5px);
    }

    ${props =>
        props.active &&
        css`
            & span {
                height: 0;
            }

            & span:before {
                transform: rotate(45deg);
            }

            & span:after {
                transform: rotate(-45deg);
            }
        `}
`;

const OverlayMenu = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    visibility: hidden;
    opacity: 0;
    transition: opacity 300ms ease;
    background: rgba(0, 0, 0, 0.95);

    & ul {
    }

    ${props =>
        props.isMenuOpen &&
        css`
            visibility: visible;
            opacity: 1;

            & ul {
            }
        `}
`;

const Menu = ({ size, children, fixed }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <Container fixed={fixed}>
            <MobileMenu size={size}>
                <MenuButton
                    active={isMenuOpen}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span />
                </MenuButton>
                <OverlayMenu isMenuOpen={isMenuOpen}>{children}</OverlayMenu>
            </MobileMenu>
            <DesktopMenu size={size}>{children}</DesktopMenu>
        </Container>
    );
};

Menu.propTypes = {
    size: PropTypes.string,
    children: PropTypes.node,
    fixed: PropTypes.bool,
};

Menu.defaultProps = {
    size: '1024px',
    fixed: false,
};

export default Menu;
