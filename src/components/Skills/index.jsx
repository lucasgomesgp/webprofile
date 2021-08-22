import cssImg from "../../assets/icons/CSS3.svg";
import htmlImg from "../../assets/icons/HTML5.svg";
import jsImg from "../../assets/icons/Javascript.svg";
import bgImg from "../../assets/BgSkills.svg";

export function Skills() {
  return (
    <>
      <section className="skills">
        <h2 id="skill__title">Skills</h2>
        <div className="icons" id="iconsMove">
          <div className="text__icon">
            <img src={htmlImg} alt="HTML5" />
            <h3 className="skill__text">HTML</h3>
            <div className="text__hidden" id="hidden-html">
              <p>
                O HTML faz parte do meu dia a dia criando projetos para web,
                utilizando da sua semântica para deixar os meus projetos sempre
                bem estruturados e coesos.
              </p>
            </div>
          </div>
          <div className="text__icon">
            <img src={cssImg} alt="CSS3" />
            <h3 className="skill__text">CSS</h3>
            <div className="text__hidden" id="hidden-css">
              <p>
                Com o CSS não é diferente, este esta sempre muito presente, com
                o uso de SAAS, CSS Puro e projetos que englobam ReactJS.
              </p>
            </div>
          </div>
          <div className="text__icon">
            <img src={jsImg} alt="Javascript" />
            <h3 className="skill__text">JAVASCRIPT</h3>
            <div className="text__hidden" id="hidden-js">
              <p>
                O Javascript é minha fonte de estudo tanto para Frameworks como
                ReactJS, como para projetos simples que necessitem de
                dinamicidade.
              </p>
            </div>
          </div>
        </div>
        <div className="bg__skills">
          <img id="bg__icons" src={bgImg} alt="Background" />
        </div>
      </section>
    </>
  );
}
