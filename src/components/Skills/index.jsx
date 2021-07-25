import cssImg from "../../assets/icons/CSS3.svg";
import htmlImg from "../../assets/icons/HTML5.svg";
import jsImg from "../../assets/icons/Javascript.svg";
import bgImg from "../../assets/BgSkills.svg";
import "./styles.scss";

export function Skills(){
    return(
        <>
            <section className="skills">
                <h2 id="title-skill">Skills</h2>
                <div className="icons">
                    <div className="text-icon">
                        <img src={htmlImg} alt="HTML5" />
                        <h2 className="skills-text">HTML</h2>
                    </div>
                    <div className="text-icon">
                        <img src={cssImg} alt="CSS3" />
               
                        <h2 className="skills-text">CSS</h2>
                    </div>
                    <div className="text-icon">
                        <img src={jsImg} alt="Javascript" />
                        <h2 className="skills-text">Javasript</h2>
                    </div>
                </div>
                    <div className="bg-skills">
                        <img id="bg-icons" src={bgImg} alt="Background" />
                    </div>
            </section>
        </>
    );
}