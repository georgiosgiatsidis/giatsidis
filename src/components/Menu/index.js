import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    MobileMenu,
    MenuButton,
    OverlayMenu,
    DesktopMenu,
} from './styles';

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
