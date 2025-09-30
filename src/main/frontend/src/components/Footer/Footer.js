import {Container} from "react-bootstrap";
import styles  from "./Footer.module.css";

function Footer(){
    return (
        <footer className={styles.footer}>
            <Container>
                <p className={styles.text}>
                    Pokémon © Nintendo/Creatures Inc./GAME FREAK Inc.<br/>
                    Data from PokéAPI (https://pokeapi.co/)<br/>
                    본 사이트는 상업적 목적이 아닌 개인 포트폴리오용으로 제작되었습니다.
                </p>
            </Container>
        </footer>
    )
}

export default Footer;