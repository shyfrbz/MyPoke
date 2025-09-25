import {Container} from "react-bootstrap";
import styles  from "./Footer.module.css";
import {Link} from "react-router-dom";

function Footer(){
    return (
        <footer className={styles.footer}>
            <Container>
                <p className={styles.text}>
                    Pokémon © Nintendo/Creatures Inc./GAME FREAK Inc.<br/>
                    Data from PokéAPI (https://pokeapi.co/)<br/>
                    본 사이트는 개인 포트폴리오용 비공식 프로젝트입니다.
                </p>
            </Container>
        </footer>
    )
}

export default Footer;