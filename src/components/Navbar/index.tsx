import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';


interface Props {

}

const Navbar: React.FC<Props> = () => {
        return (<>
        <Nav>
            <NavLink to='/'>Pizza</NavLink>
            <NavIcon>
                <p>Menu</p>
                <Bars />
            </NavIcon>
        </Nav>

        </>);
}

export default Navbar;