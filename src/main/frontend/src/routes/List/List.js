import ListCard from "../../components/ListCard/ListCard";
import usePokemonList from "../../hooks/usePokemonList";
import {getTypeIds} from "../../utils/pokemon";
import {Container, Spinner} from "react-bootstrap";
import styles from "./List.module.css"
import {useEffect, useRef} from "react";
import Layout from "../../components/Layout";
import Search from "../../components/Search/Search";
import AllTypes from "../../components/AllTypes/AllTypes";
import {useTranslation} from "react-i18next";

function List() {
    const {loading, list, hasMore, getMore} = usePokemonList();
    const ref = useRef();
    const { t } = useTranslation();

    // 무한스크롤 설정
    useEffect(() => {
        if (!ref.current) return;

        // 감시자 옵션. 각각 무엇을 기준으로, 어느 위치에서, 얼마만큼 보일때 실행할건지 설정한다.
        const options = {root: null, rootMargin: "100px", threshold: 0};

        // 감시자가 감시 대상이 시야에 들어왔을 때 실행하는 함수.
        // 감시하는 요소들의 배열인 entries와 observer 객체를 받음
        // 여기서는 감시자가 하나이므로 아래와 같이 사용
        const callback = ([entry]) => {
            if (entry.isIntersecting && !loading && hasMore) {
                getMore();
            }
        };

        const observer = new IntersectionObserver(callback, options);

        const currentRef = ref.current; // disconnect 실행 시 ref.current 값이 바뀌어도 사용 가능하도록 변수 할당
        if (currentRef) observer.observe(currentRef); //감시 시작

        // 컴포넌트 언마운트 시 감시자 해제
        return () => observer.disconnect();

    }, [getMore, loading, hasMore, list]);

    return (
        <Layout loading={loading && list.length === 0}>
            <Container className={styles.list}>
                <h2 className={styles.title}>{t('title.pokedex')}</h2>
                <Search/>
                <AllTypes/>
                {list?.map(p =>
                    <ListCard
                        // key={p.pokemon.id}
                        // id={p.pokemon.id}
                        // img={p.pokemon.sprites.front_default}
                        // name={p.species.names?.find(n => n.language.name === "ko")?.name}
                        // types={getTypeIds(p.pokemon.types)}
                        key={p.id}
                        id={p.id}
                        img={p.img}
                        name={p.name}
                        types={getTypeIds(p.types)}
                    />
                )}
            </Container>
            {/* 로딩 중일 때 스피너 표시 */}
            {loading && <div style={{textAlign: 'center', margin: "50px 0"}}>
                <Spinner animation="border" variant="danger"/>
            </div>}

            {/* 더 가져올 데이터가 있을 때만 관찰 대상을 렌더링 */}
            {hasMore && !loading && <div ref={ref} style={{height: '50px'}}/>}
        </Layout>
    )
}

export default List;