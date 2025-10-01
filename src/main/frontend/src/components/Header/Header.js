import {Navbar, Nav, Container} from "react-bootstrap";
import styles from "./Header.module.css";
import {ReactComponent as PokeballIcon} from "../../assets/icons/pokeball.svg";

function Header() {
    return (
        <header>
            <Navbar key="md" expand="md" data-bs-theme="dark" fixed="top" className={styles.navbar}>
                <Container>
                    <Navbar.Brand href="/" className={styles.logo}>
                        <PokeballIcon width={32} height={32}/>
                        <span>MyPoké</span>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="ms-auto">
                            <Nav.Link href="/list" className={styles.link}>도감</Nav.Link>
                            <Nav.Link href="/quiz" className={styles.link}>퀴즈</Nav.Link>
                            <Nav.Link href="/myPage" className={styles.link}>마이페이지</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;