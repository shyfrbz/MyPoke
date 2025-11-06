import {useMemo, useState} from "react";
import allPokemonData from "../data/allPokemonData";
import genRange from "../data/genRange";
import {useTranslation} from "react-i18next";

function useQuiz({ gen, count, shadow }){
    const [currentIdx, setCurrentIdx] = useState(0);
    const [score, setScore] = useState(0);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null);

    const { i18n, t } = useTranslation();
    const lang = i18n.language.slice(0, 2);

    // 출제할 포켓몬 도감번호 필터링
    const filteredList = useMemo(() => {
        const [min, max] = genRange[gen];
        const ids = Array.from({ length: max - min + 1 }, (_, i) => i + min);
        const shuffled = ids.sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    }, [gen, count]);

    // 선택된 포켓몬 정보 가져오기
    const quizList = useMemo(() => {
        return filteredList.map((id) => allPokemonData.find((p) => p.id === id));
    }, [filteredList]);

    const currentQuiz = quizList[currentIdx];
    const isFinished = currentIdx >= quizList.length;

    const submitAnswer = (userAnswer) => {
        if (!currentQuiz || isAnswered) return;

        const correct = userAnswer.trim().toLowerCase() === currentQuiz.names[lang].toLowerCase();
        setIsCorrect(correct);
        setIsAnswered(true);
        if (correct) setScore((prev) => prev + 1);
    };

    const nextQuestion = () => {
        setIsAnswered(false);
        setIsCorrect(null);
        setCurrentIdx((prev) => prev + 1);
    };

    const getImageStyle = () => {
        if (!shadow) return {};
        return {
            filter: "brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(100%) hue-rotate(0deg) brightness(0%) contrast(100%)",
        };
    };

    return {
        quizList,
        currentQuiz: quizList[currentIdx],
        currentIdx,
        score,
        isAnswered,
        isCorrect,
        submitAnswer,
        nextQuestion,
        getImageStyle,
    };

}

export default useQuiz;