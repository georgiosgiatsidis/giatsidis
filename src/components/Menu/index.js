/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
    Container,
    MobileMenu,
    MenuButton,
    OverlayMenu,
    DesktopMenu,
} from 'components/Menu/styles';

const Menu = ({ size, children, fixed, scroll }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <Container
            fixed={fixed}
            scroll={scroll}
            className={classNames({ 'shadow-md': scroll || !fixed })}
        >
            <MobileMenu size={size}>
                <MenuButton
                    active={isMenuOpen}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span />
                </MenuButton>
                <OverlayMenu isMenuOpen={isMenuOpen}>{children}</OverlayMenu>
            </MobileMenu>
            <DesktopMenu size={size}>
                <h3 className="m-4 font-black">G.G.</h3>
                <nav>{children}</nav>
            </DesktopMenu>
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
