import {useLocation, useNavigate} from "react-router-dom";
import useQuiz from "../../hooks/useQuiz";
import {useEffect, useRef, useState} from "react";
import Layout from "../../components/Layout";
import {Container} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import styles from "./QuizPlay.module.css";

function QuizPlay() {
    const { i18n } = useTranslation();
    const lang = i18n.language.slice(0, 2);
    const location = useLocation();
    const navigate = useNavigate();
    const { options } = location.state || {};

    const [input, setInput] = useState("");
    const quiz = useQuiz(options);
    const inputRef = useRef(null);
    const wrapperRef = useRef(null);

    useEffect(() => {
        if (!options) navigate("/quiz/setup");
    }, [options, navigate]);

    // ✅ 문제 바뀔 때마다 input 혹은 wrapper에 포커스
    useEffect(() => {
        if (!quiz.isAnswered) {
            inputRef.current?.focus();
        } else {
            wrapperRef.current?.focus();
        }
    }, [quiz.currentIdx, quiz.isAnswered]);

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
                    tabIndex={0} // ✅ 키 입력 받기용
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
                            <p>{quiz.isCorrect ? "정답!" : "오답!"}</p>
                            <h3>{quiz.currentQuiz.names[lang]}</h3>
                            <button onClick={quiz.nextQuestion} className={styles.nextBtn}>다음 문제</button>
                        </div>
                    )}
                </div>
            </Container>
        </Layout>
    );
}


export default QuizPlay;