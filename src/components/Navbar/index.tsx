import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';


interface Props {
    toggle: () => void;
}

const Navbar: React.FC<Props> = ({toggle}) => {
        return (<>
        <Nav>
            <NavLink to='/'>Pizza</NavLink>
            <NavIcon onClick={toggle}>
                <p>Menu</p>
                <Bars />
            </NavIcon>
        </Nav>

        </>);
}

export default Navbar;