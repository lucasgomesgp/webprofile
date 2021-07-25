import { Navbar } from "../../components/Navbar";
import { Skills } from "../../components/Skills";
import { Contact } from "../../components/Contact";

import profileImg from "../../assets/foto_perfil.jpeg";
import heartImg from "../../assets/icons/heart.svg";
import myAlbumImg from "../../assets/Login.png";
import navbarImg from "../../assets/Navbar.png";

import "./styles.scss";

export function Home(){
    return(
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <section  id="home">
                    <div className="texts">
                        <div className="name">
                            <h2>Lucas</h2>
                            <h2>Gomes</h2>
                        </div>
                        <div className="front">
                            <h3 className="text-front">Front End</h3>
                            <h3 className="text-front">Developer</h3>
                        </div>
                    </div>
                    <div className="bg-profile">
                        <a href="https://github.com/lucasgomesgp" target="_blank" rel="noreferrer">
                            <img src={profileImg} alt="Profile" />
                        </a>
                    </div>
                </section>
                <div className="waves">
                    <svg width="1440" height="173" viewBox="0 0 1440 173" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g class="waves">
                            <path class="wave-3" d="M607.564 55.7029C315.757 209.714 114.773 -134.781 -401.564 100.817L-505 173H1927V100.817C1872.34 188.773 1517.74 -79.6405 1312.27 100.817C1160.94 233.731 899.37 -98.3085 607.564 55.7029Z" fill="#7F3FC0"/>
                            <path class="wave-2" d="M552.436 41.7029C318.103 195.714 156.704 -148.781 -257.937 86.8165L-341 159H1612V86.8168C1568.1 174.773 1283.35 -93.6405 1118.35 86.8168C996.821 219.731 786.769 -112.308 552.436 41.7029Z" fill="#7F3FC0" fill-opacity="0.8"/>
                            <path class="wave-1" d="M514.24 41.7029C246.911 195.714 62.7855 -148.781 -410.241 86.8165L-505 159H1723V86.8168C1672.92 174.773 1348.07 -93.6405 1159.84 86.8168C1021.2 219.731 781.569 -112.308 514.24 41.7029Z" fill="#7F3FC0" fill-opacity="0.5"/>
                        </g>
                    </svg>
                </div>
                <Skills />
                <section id="projects">
                    <h2>Projects</h2>
                    <div className="project">
                        <div className="proj">
                            <h3>
                                <a href="https://github.com/lucasgomesgp/myalbum" target="_blank" rel="noreferrer">
                                    <h4 className="text-center">MyAlbum</h4>
                                    <img src={myAlbumImg} alt="My Album" className="imgBg"/>
                                    <p>Controle e criação de posts e envio de fotos, funcionando como um diário pessoal, adaptado a cada usuário.</p>
                                </a>
                            </h3>
                        </div>
                        <div className="proj">
                            <h3>
                                    <a href="https://github.com/lucasgomesgp/navbar" target="_blank" rel="noreferrer">
                                        <h4 className="text-center">Navbar Animada</h4>
                                        <img src={navbarImg} alt="Navbar" id="navbarImg"/>
                                        <p>Navbar animada, criada para ser utilizada em futuros projetos web.</p>
                                    </a>
                            </h3>
                        </div>
                    </div>
                </section>
                <Contact />
            </main>
            <footer>
                <p>
                    Desenvolvido com
                    <span><img src={heartImg} alt="Heart icon" /></span> 
                    Lucas Gomes
                </p>
            </footer>
        </>
    );
}
