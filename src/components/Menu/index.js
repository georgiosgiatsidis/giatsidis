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
    cursor: pointer;

    & span {
        transition: 0.2s;
    }

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
    transition: opacity 0.3s ease;
    background: rgba(0, 0, 0, 0.95);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & ul {
        li {
            opacity: 0;
            transition: opacity 0.3s ease, transform 0.3s ease;
            transform: translate(100px, 0%);
            /* transition-delay: 0.3s; */

            /* &:nth-child(2) {
                transition-delay: 0.4s;
            }
            &:nth-child(3) {
                transition-delay: 0.5s;
            }
            &:nth-child(4) {
                transition-delay: 0.6s;
            }
            &:nth-child(5) {
                transition-delay: 0.7s;
            } */

            a {
                font-weight: 900;
                text-transform: uppercase;
                font-size: 1.5rem;
            }
        }
    }

    ${props =>
        props.isMenuOpen &&
        css`
            visibility: visible;
            opacity: 1;

            & ul {
                li {
                    transform: translate(0%, 0%);
                    opacity: 1;
                }
            }
        `}
`;

const Menu = ({ size, children, fixed }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    console.log('re render');
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
