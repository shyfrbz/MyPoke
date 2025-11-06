import {Link} from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Home.module.css";
import { useTranslation } from 'react-i18next';

function Home() {
    const { t } = useTranslation();

    return (
        <div className={styles.wrapper}>
            <Header/>
            <div className={styles.main}>
                <Link to={"/list"}>
                    <span>{t('nav.pokedex')}</span>
                </Link>
                <Link to={"/quiz/setup"}>
                    <span>{t('nav.quiz')}</span>
                </Link>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;