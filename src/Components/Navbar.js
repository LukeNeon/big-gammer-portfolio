import "./Navbar.css"
import { BiMenu } from "react-icons/bi";
import {useState} from "react";




const Navbar = () => {
    return (
        <div>
            <NavItems icon={<BiMenu />} />
            <NavItems icon="shesh" />
            <NavItems icon="Cum" />
        </div>
    ); 
}

const NavItems = (props) => {
    return (
        <div>
            <div>{props.icon}</div>
        </div>
    );
}

export default Navbar