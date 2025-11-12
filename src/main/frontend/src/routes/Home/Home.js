import {Link} from "react-router-dom";
import styles from "./Home.module.css";
import {useTranslation} from 'react-i18next';
import Layout from "../../components/Layout";
import {Container} from "react-bootstrap";

function Home() {
    const {t} = useTranslation();

    return (
        <Layout>
            <Container className={styles.main}>
                <Link to={"/list"}>
                    <span>{t('nav.pokedex')}</span>
                </Link>
                <Link to={"/quiz/setup"}>
                    <span>{t('nav.quiz')}</span>
                </Link>
            </Container>
        </Layout>
    )
}

export default Home;