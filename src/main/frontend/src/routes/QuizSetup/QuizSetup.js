import Layout from "../../components/Layout";
import {Container} from "react-bootstrap";
import styles from "./QuizSetup.module.css"
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import genRange from "../../data/genRange";
import {useTranslation} from "react-i18next";

function QuizSetup() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [gen, setGen] = useState(0);
    const [count, setCount] = useState(10);
    const [shadow, setShadow] = useState(false);

    const gens = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const counts = [10, 30, 50, 70, 100];
    const [min, max] = genRange[gen];
    const maxCount = max - min + 1;

    const clickStart = () => {
        const options = {gen, count, shadow};
        navigate('/quiz/play', {state: {options}});
    };

    return (
        <Layout>
            <Container>
                <div className={styles.wrapper}>
                    <h1 className={styles.title}>
                        {t('quiz.pokemonQuiz')}
                    </h1>

                    <p className={styles.sub}>
                        {t('quiz.selectOption')}
                    </p>

                    <div className={styles.section}>
                        <p className={styles.label}>{t('quiz.gen')}</p>
                        <div className={styles.buttonGroup}>
                            {gens.map((g) => (
                                <button
                                    key={g}
                                    onClick={() => setGen(g)}
                                    className={`${styles.optionButton} ${gen === g ? styles.active : ""}`}
                                >
                                    {g === 0 ? t('quiz.allGen') : g}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className={styles.section}>
                        <p className={styles.label}>{t('quiz.count')}</p>
                        <div className={styles.buttonGroup}>
                            {counts.map((c) => (
                                <button
                                    key={c}
                                    onClick={() => setCount(c)}
                                    className={`${styles.optionButton} ${count === c ? styles.active : ""}`}
                                    disabled={c > maxCount}
                                >
                                    {c}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className={styles.section}>
                        <p className={styles.label}>{t('quiz.shadowMode')}</p>
                        <div className={styles.buttonGroup}>
                            <button
                                onClick={() => setShadow(false)}
                                className={`${styles.optionButton} ${!shadow ? styles.active : ""}`}
                            >
                                {t('quiz.off')}
                            </button>
                            <button
                                onClick={() => setShadow(true)}
                                className={`${styles.optionButton} ${shadow ? styles.active : ""}`}
                            >
                                {t('quiz.on')}
                            </button>
                        </div>
                    </div>
                    <button className={styles.startButton} onClick={clickStart}>{t('quiz.start')} ▶</button>
                </div>
            </Container>
        </Layout>
    )
}

export default QuizSetup;