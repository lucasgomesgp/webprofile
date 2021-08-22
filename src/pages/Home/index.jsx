import { Navbar } from "../../components/Navbar";
import { Skills } from "../../components/Skills";
import { Contact } from "../../components/Contact";
import { Waves } from "../../components/Waves";
import { Projects } from "../../components/Projects";

import profileImg from "../../assets/foto_perfil.jpeg";
import heartImg from "../../assets/icons/heart.svg";
import "../../styles/styles.scss";

export function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section__home" id="home">
          <div className="my__infos">
            <div className="infos__name">
              <h2 className="h2__name">Lucas</h2>
              <h2 className="h2__name">Gomes</h2>
            </div>
            <div className="infos__front">
              <h3 className="text__front">Front End</h3>
              <h3 className="text__front">Developer</h3>
            </div>
          </div>
          <div className="bg__profile">
            <a
              className="bg__img"
              href="https://github.com/lucasgomesgp"
              target="_blank"
              rel="noreferrer"
            >
              <img src={profileImg} alt="Profile" />
            </a>
          </div>
        </section>
        <Waves />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="dev__infos">
        <p>
          Desenvolvido com
          <span>
            <img src={heartImg} alt="Heart icon" />
          </span>
          by Lucas Gomes
        </p>
      </footer>
    </>
  );
}
