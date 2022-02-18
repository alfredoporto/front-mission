import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from 'react-icons/ai';

import { Container, Div1, Div2, NavLink } from "./styles";


const Navbar = () => {
    return (
        <Container>
            <Div1>
                <Link to="/">
                    <AiFillHome size="3rem" />
                    <NavLink>Home</NavLink>
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