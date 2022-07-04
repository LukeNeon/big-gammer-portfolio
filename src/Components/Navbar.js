import "./Navbar.css"
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
    return (
        <div className="Nav-container">
            <button className="btn">Cool Stuff I Do</button>
            <button className="btn">About Me Pog</button>
            <button className="btn">Contact Me (or not idrc :C)</button>
            <NavbarMenu />
        </div>
    );
}

const NavbarMenu = () => {
   return(<button className="btn-menu"><BiMenu size={"40px"} /></button>);
}

export default Navbar