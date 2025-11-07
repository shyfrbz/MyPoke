import {useLocation, useNavigate} from "react-router-dom";
import Layout from "../../components/Layout";
import {Container} from "react-bootstrap";
import styles from "./QuizResult.module.css";
import rank from "../../data/rank";
import {useTranslation} from "react-i18next";

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
                    <h4>결과 발표</h4>
                    <h2>「{userRank.names[lang]}」급!</h2>
                    <p>
                        점수 : {score} / {count}
                    </p>
                    <button onClick={() => navigate("/quiz/setup")}>다시하기</button>
                </div>
            </Container>
        </Layout>
    );
}

export default QuizResult;