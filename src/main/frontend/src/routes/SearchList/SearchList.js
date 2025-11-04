import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Layout from "../../components/Layout";
import {Container} from "react-bootstrap";
import ListCard from "../../components/ListCard/ListCard";
import AllTypes from "../../components/AllTypes/AllTypes";
import Search from "../../components/Search/Search";
import styles from "./SearchList.module.css";
import allPokemonData from "../../data/allPokemonData";
import {useTranslation} from "react-i18next";

function SearchList() {
    const {keyword} = useParams();
    const [loading, setLoading] = useState(true);
    const [searchList, setSearchList] = useState([]);
    const {i18n} = useTranslation();
    const lang = i18n.language.slice(0, 2);

    // 히라가나 → 가타카나 변환 함수
    const toKatakana = (str) => {
        return str.replace(/[\u3041-\u3096]/g, ch =>
            String.fromCharCode(ch.charCodeAt(0) + 0x60)
        );
    };

    useEffect(() => {
        let q = keyword.toLowerCase().trim();

        // 일본어일 경우, 이름을 히라가나로 변환해서 비교
        if (lang === "ja") {
            q = toKatakana(q);
        }

        const filtered = allPokemonData.filter(p => {
            // 언어별 이름
            const name = (p.names?.[lang] ?? p.names?.en ?? "").toLowerCase();

            // 도감번호
            const idMatch = p.id.toString().includes(q);
            // 이름 또는 번호 중 하나라도 일치하면 true
            return name.includes(q) || idMatch;
        });

        setSearchList(filtered);
        setLoading(false);
    }, [keyword, i18n.language]);

    return (
        <Layout loading={loading && searchList.length === 0}>
            <Container className={styles.list}>
                <h3 className={styles.title}>
                    <b>"{keyword}"</b> 검색결과
                </h3>
                <Search/>
                <AllTypes/>
                {searchList.map(p => (
                    <ListCard
                        key={p.id}
                        id={p.id}
                        img={p.img.default}
                        name={p.names}
                        types={p.types}
                    />
                ))}
            </Container>
        </Layout>
    );
}

export default SearchList;
