import githubImg from "../../assets/icons/Github.svg";
import youtubeImg from "../../assets/icons/Youtube-1.svg";
import linkedinImg from "../../assets/icons/Linkedin.svg";
import twitterImg from "../../assets/icons/Twitter.svg";

export function Contact(){
    return(
       <section className="contact" id="contact">
            <h2>Contact</h2>
            <div className="contact__icons">
                <div className="icon__contact">
                    <a href="https://github.com/lucasgomesgp" target="_blank" rel="noreferrer">
                        <img src={githubImg} alt="Github" />
                    </a>
                </div>               
                <div className="icon__contact">
                    <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                        <img src={youtubeImg} alt="Youtube" />
                    </a>
                </div>               
                <div className="icon__contact">
                    <a href="https://www.linkedin.com/in/lucas-gomes-aab356173/" target="_blank" rel="noreferrer">
                        <img src={linkedinImg} alt="Linkedin" />
                    </a>
                </div>               
                <div className="icon__contact">
                    <a href="https://twitter.com/lucasxnkl" target="_blank" rel="noreferrer">
                        <img src={twitterImg} alt="Twitter" />
                    </a>
                </div>               
            </div>
       </section>
    );
}