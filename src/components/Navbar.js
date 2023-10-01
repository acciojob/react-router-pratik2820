import React from "react";
import { Link,NavLink } from "react-router-dom/dist";

const Navbar = () =>{


    return(
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>


        </div>
    )
}
export default Navbar;