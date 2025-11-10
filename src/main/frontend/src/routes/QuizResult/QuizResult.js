import {useLocation, useNavigate} from "react-router-dom";
import Layout from "../../components/Layout";
import {Container} from "react-bootstrap";
import styles from "./QuizResult.module.css";
import rank from "../../data/rank";
import {useTranslation} from "react-i18next";
import ribbon from "../../assets/images/ribbon.png";

function QuizResult() {
    const {i18n, t} = useTranslation();
    const lang = i18n.language.slice(0, 2);
    const location = useLocation();
    const navigate = useNavigate();
    const {score, count} = location.state || {};

    if (score === undefined) {
        navigate("/quiz/setup");
        return null;
    }

    const percent = Math.round((score / count) * 100);
    const userRank = rank.find(r => percent >= r.min && percent <= r.max);

    return (
        <Layout>
            <Container>
                <div className={styles.wrapper}>
                    <div className={styles.titleWrapper}>
                        <img src={ribbon} alt="ribbon" className={styles.ribbon}/>
                        <h3 className={styles.title}>{t('quiz.result')}</h3>
                    </div>
                    <div className={styles.imgWrapper}>
                        <img src={userRank.img[Math.floor(Math.random() * userRank.img.length)]}
                             alt={userRank.names[lang]}
                             className={styles.img}/>
                    </div>
                    <h2 className={styles.rank}>「{userRank.names[lang]}」 {t('quiz.rank')}</h2>
                    <div className={styles.scoreBar}>
                        <div className={styles.fill} style={{width: `${(score / count) * 100}%`}}/>
                    </div>
                    <p className={styles.score}>
                        {score} / {count}
                    </p>
                    <button onClick={() => navigate("/quiz/setup")}
                            className={styles.retryBtn}>{t('quiz.retry')}
                    </button>
                </div>
            </Container>
        </Layout>
    );
}

export default QuizResult;