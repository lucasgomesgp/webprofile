import logoImg from "../../assets/icons/Logo1.svg";

export function Navbar() {
  return (
    <>
      <header>
        <navbar className="menu">
          <ul className="menu__items">
            <li className="menu__li">
              <a href="#home" className="menu__link">
                Home
              </a>
            </li>
            <li className="menu__li">
              <a href="#skills" className="menu__link">
                Skills
              </a>
            </li>
            <li className="logo">
              <a href="#home">
                <img src={logoImg} alt="Logo" className="logo__img" />
              </a>
              <div className="hamburguer">
                <span className="hamburguer__item"></span>
                <span className="hamburguer__item"></span>
                <span className="hamburguer__item"></span>
              </div>
            </li>
            <li className="menu__li">
              <a href="#projects" className="menu__link">
                Projects
              </a>
            </li>
            <li className="menu__li">
              <a href="#contact" className="menu__link">
                Contact
              </a>
            </li>
          </ul>
        </navbar>
      </header>
    </>
  );
}
