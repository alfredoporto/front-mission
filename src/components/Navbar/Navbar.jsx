import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub } from 'react-icons/ai';

import { Container, Div1, Div2, NavLink } from "./NavbarStyles";


const Navbar = () => {
    return (
        <Container>
            <Div1>
                <Link to="/">
                    <AiFillGithub size="3rem" />
                </Link>
            </Div1>
            <Div2>
                <li>
                    <Link to="/products">
                        <NavLink>Products</NavLink>
                    </Link>
                </li>

                <li>
                    <Link to="/about">
                        <NavLink>About</NavLink>
                    </Link>
                </li>
            </Div2>
        </Container>
    );
};

export default Navbar;