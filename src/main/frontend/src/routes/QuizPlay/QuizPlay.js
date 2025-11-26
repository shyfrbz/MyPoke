import {useLocation, useNavigate} from "react-router-dom";
import useQuiz from "../../hooks/useQuiz";
import {useEffect, useRef, useState} from "react";
import Layout from "../../components/Layout";
import {Container} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import styles from "./QuizPlay.module.css";

function QuizPlay() {
    const {i18n, t} = useTranslation();
    const lang = i18n.language.slice(0, 2);
    const location = useLocation();
    const navigate = useNavigate();
    const {options} = location.state || {};

    const [input, setInput] = useState("");
    const dummyOptions = { gen: 1, count: 10, shadow: false };
    const safeOptions = options || dummyOptions;
    const quiz = useQuiz(safeOptions);
    const inputRef = useRef(null);
    const wrapperRef = useRef(null);

    useEffect(() => {
        if (!options) navigate("/quiz/setup", { replace: true });
    }, [options, navigate]);

    // 정답 제출 / 다음 문제 넘어갈 때 포커스 변경(엔터로 이동하게끔)
    useEffect(() => {
        if (!quiz.isAnswered) {
            inputRef.current?.focus();
        } else {
            wrapperRef.current?.focus();
        }
    }, [quiz.currentIdx, quiz.isAnswered]);

    // 문제 풀이 종료 시 결과 화면으로 이동
    useEffect(() => {
        if (quiz.isFinished) {
            navigate('/quiz/result', {state: {score : quiz.score, count : safeOptions.count}});
        }
    }, [quiz.isFinished, quiz.score, safeOptions.count, navigate])

    if (!options || !quiz.currentQuiz) return null;

    const handleSubmit = () => {
        if (!input.trim()) return;
        quiz.submitAnswer(input);
        setInput("");
    };

    const handleKeyDown = (e) => {
        if (e.key !== "Enter") return;
        e.preventDefault();

        if (!quiz.isAnswered) {
            if (input.trim()) handleSubmit();
        } else {
            quiz.nextQuestion();
            setTimeout(() => {
                inputRef.current?.focus();
            }, 50);
        }
    };

    return (
        <Layout>
            <Container>
                <div
                    ref={wrapperRef}
                    className={styles.wrapper}
                    onKeyDown={handleKeyDown}
                    tabIndex={0} // 엔터로 다음 넘어가게 하기 위해 넣음
                >
                    <img
                        src={quiz.currentQuiz.img.official}
                        alt="pokemon"
                        className={styles.img}
                        style={quiz.getImageStyle()}
                    />

                    {!quiz.isAnswered ? (
                        <div>
                            <input
                                ref={inputRef}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                            <button onClick={handleSubmit} className={styles.submitBtn}>&gt;</button>
                        </div>
                    ) : (
                        <div>
                            <p>{quiz.isCorrect ? t('quiz.correct') : t('quiz.wrong')}</p>
                            <h3>{quiz.currentQuiz.names[lang]}</h3>
                            <button onClick={quiz.nextQuestion} className={styles.nextBtn}>{t('quiz.next')}</button>
                        </div>
                    )}
                </div>
            </Container>
        </Layout>
    );
}


export default QuizPlay;