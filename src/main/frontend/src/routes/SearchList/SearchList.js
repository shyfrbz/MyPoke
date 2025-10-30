import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import { Container } from "react-bootstrap";
import ListCard from "../../components/ListCard/ListCard";
import AllTypes from "../../components/AllTypes/AllTypes";
import Search from "../../components/Search/Search";
import styles from "./SearchList.module.css";
import allPokemonData from "../../data/allPokemonData";

function SearchList() {
    const { keyword } = useParams();
    const [loading, setLoading] = useState(true);
    const [searchList, setSearchList] = useState([]);

    useEffect(() => {
        const q = keyword.toLowerCase().trim();
        const filtered = allPokemonData.filter(p =>
            (p.names?.ko ?? "").toLowerCase().includes(q)
        );
        setSearchList(filtered);
        setLoading(false);
    }, [keyword]);

    return (
        <Layout loading={loading && searchList.length === 0}>
            <Container className={styles.list}>
                <h3 className={styles.title}>
                    <b>"{keyword}"</b> 검색결과
                </h3>
                <Search />
                <AllTypes />
                {searchList.map(p => (
                    <ListCard
                        key={p.id}
                        id={p.id}
                        img={p.img.default}
                        name={p.names.ko}
                        types={p.types}
                    />
                ))}
            </Container>
        </Layout>
    );
}

export default SearchList;
