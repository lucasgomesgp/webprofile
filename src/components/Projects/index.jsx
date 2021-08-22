import myAlbumImg from "../../assets/Login.png";
import navbarImg from "../../assets/Navbar.png";
import flashImg from "../../assets/home_flash.png";

export function Projects() {
  return (
    <section className="project" id="projects">
      <h2>Projects</h2>
      <div className="projects">
        <div className="project__item">
          <h3>
            <a
              href="https://github.com/lucasgomesgp/myalbum"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="text-center">MyAlbum</h4>
              <img src={myAlbumImg} alt="My Album" className="imgBg" />
              <p>
                Controle e criação de posts e envio de fotos, funcionando como
                um diário pessoal, adaptado a cada usuário.
              </p>
            </a>
          </h3>
        </div>
        <div className="project__item">
          <h3>
            <a
              href="https://github.com/lucasgomesgp/navbar"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="text-center">Navbar Animada</h4>
              <img src={navbarImg} alt="Navbar" id="navbarImg" />
              <p>
                Navbar animada, criada para ser utilizada em futuros projetos
                web.
              </p>
            </a>
          </h3>
        </div>
        <div className="project__item">
          <h3>
            <a
              href="https://github.com/lucasgomesgp/series4you"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="text__center">Series4you</h4>
              <img src={flashImg} alt="Series4you" className="imgBg" />
              <p>
                Site com a lista das séries que mais assisto, funcionado como um
                organizador, feito com NextJS.
              </p>
            </a>
          </h3>
        </div>
      </div>
    </section>
  );
}
