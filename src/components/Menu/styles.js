import styled, { css } from 'styled-components';

export const Container = styled.nav`
    transition: background-color 0.3s;
    & ul {
        list-style: none;
        display: flex;
        padding: 0;
        margin: 0;

        li {
            margin: 1rem;
        }
    }

    ${(props) =>
        props.fixed &&
        css`
            z-index: 1000;
            position: fixed;
            width: 100%;
        `}

    ${(props) =>
        props.scroll &&
        css`
            background-color: var(--bg);
        `}
`;

export const MobileMenu = styled.div`
    display: none;
    text-align: center;
    @media (max-width: ${(props) => props.size}) {
        display: block;
    }

    & ul {
        flex-direction: column;
    }
`;

export const DesktopMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & ul {
        & li {
            font-weight: 900;
            text-transform: uppercase;
            font-weight: 900;
        }
    }

    @media (max-width: ${(props) => props.size}) {
        display: none;
    }
`;

export const MenuButton = styled.a`
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

    ${(props) =>
        props.active &&
        css`
            & span::before,
            & span::after {
                background-color: #fff;
            }

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

export const OverlayMenu = styled.div`
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
        & li {
            opacity: 0;
            transition: 0.4s opacity, 0.4s transform;
            transform: translate(100%, 0%);

            &:nth-child(2) {
                transition-delay: 50ms;
            }

            &:nth-child(3) {
                transition-delay: 100ms;
            }

            &:nth-child(4) {
                transition-delay: 150ms;
            }

            &:nth-child(5) {
                transition-delay: 200ms;
            }

            &:nth-child(6) {
                transition-delay: 250ms;
            }

            & a {
                font-weight: 900;
                text-transform: uppercase;
                font-size: 1.5rem;
                font-weight: 900;
            }
        }
    }

    ${(props) =>
        props.isMenuOpen &&
        css`
            visibility: visible;
            opacity: 1;

            & ul {
                li {
                    transform: none;
                    opacity: 1;
                }
            }
        `}
`;
