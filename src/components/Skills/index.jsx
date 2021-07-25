import cssImg from "../../assets/icons/CSS3.svg";
import htmlImg from "../../assets/icons/HTML5.svg";
import jsImg from "../../assets/icons/Javascript.svg";
import bgImg from "../../assets/BgSkills.svg";
import "./styles.scss";

export function Skills(){
    return(
        <>
            <section id="skills">
                <h2 id="title-skill">Skills</h2>
                <div className="icons">
                    <div className="text-icon">
                        <img src={htmlImg} alt="HTML5" />
                        <h2 className="skills-text">HTML</h2>
                        <div className="text-hidden" id="hidden-html">
                            <p>
                                O HTML faz parte do meu dia a dia criando projetos para web, 
                                utilizando da sua semântica para deixar os meus projetos sempre bem estruturados e coesos.
                            </p>
                        </div>
                    </div>
                    <div className="text-icon">
                        <img src={cssImg} alt="CSS3" />
                        <h2 className="skills-text">CSS</h2>
                        <div className="text-hidden" id="hidden-css">
                            <p>
                                Com o CSS não é diferente, este esta sempre muito presente, 
                                com o uso de SAAS, CSS Puro e projetos que englobam ReactJS.
                            </p>
                        </div>
                    </div>
                    <div className="text-icon">
                        <img src={jsImg} alt="Javascript" />
                        <h2 className="skills-text">Javasript</h2>
                        <div className="text-hidden" id="hidden-js">
                            <p>
                                O Javascript é minha fonte de estudo tanto para Frameworks como ReactJS, 
                                como para projetos simples que necessitem de dinamicidade.
                            </p>
                        </div>
                    </div>
                </div>
                    <div className="bg-skills">
                        <img id="bg-icons" src={bgImg} alt="Background" />
                    </div>
            </section>
        </>
    );
}