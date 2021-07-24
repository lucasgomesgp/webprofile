import logoImg from "../../assets/icons/Logo1.svg";
import "./styles.scss";

export function Navbar(){
    return(
        <>
            <navbar>
                <ul>
                    <li>
                        <a href="#home" className="menu-item">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="menu-item"> 
                            Skills
                        </a>
                    </li>
                    <li id="logoArea"> 
                        <a href="#logo">
                            <img src={logoImg} alt="Logo" />
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="menu-item">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="menu-item">
                            Contact
                        </a>
                    </li>
                </ul>
            </navbar>
        </>
    );
}