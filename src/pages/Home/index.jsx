import { Navbar } from "../../components/Navbar";
import notebookImg from "../../assets/icons/Notebook.svg";
import "./styles.scss";

export function Home(){
    return(
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <section className="profile-area">
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
                    <div className="notebook-area">
                        <img src={notebookImg} alt="Notebook" />
                    </div>
                </section>
            </main>
        </>
    );
}
