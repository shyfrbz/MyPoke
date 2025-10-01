import ListCard from "../../components/ListCard/ListCard";
import usePokemonList from "../../hooks/usePokemonList";
import {getTypeIds} from "../../utils/pokemon";
import {Container, Spinner} from "react-bootstrap";
import styles from "./List.module.css"
import {useEffect, useRef} from "react";
import Layout from "../../components/Layout";

function List() {
    const {loading, list, hasMore, getMore} = usePokemonList();
    const ref = useRef();

    // 무한스크롤 설정
    useEffect(() => {
        if (!ref.current) return;

        // 옵저버 옵션. 각각 무엇을 기준으로, 어느 위치에서, 얼마만큼 보일때 실행할건지 설정한다.
        const options = {root: null, rootMargin: "100px", threshold: 0};

        // 옵저버가 관찰 대상이 시야에 들어왔을 때 실행하는 함수.
        // 관찰하는 요소들의 배열인 entries와 observer 객체를 받음
        // 여기서는 관찰자가 하나이므로 아래와 같이 사용
        const callback = ([entry]) => {
            if (entry.isIntersecting && !loading && hasMore) {
                getMore();
            }
        };

        const observer = new IntersectionObserver(callback, options);

        const currentRef = ref.current; // cleanup 함수에서 참조할 수 있도록 변수에 할당
        if (currentRef) observer.observe(currentRef); // 관찰 시작

        // cleanup: 컴포넌트 언마운트 시 옵저버 해제
        return () => observer.disconnect();

    }, [getMore, loading, hasMore, list]);

    return (
        <Layout loading={loading && list.length === 0}>
            <Container className={styles.list}>
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
            {/* 로딩 중일 때 스피너 표시 (기존과 동일하지만, hasMore가 false가 되면 더 이상 실행되지 않음) */}
            {loading && <div style={{textAlign: 'center', margin: "50px 0"}}>
                <Spinner animation="border" variant="danger"/>
            </div>}

            {/* 더 가져올 데이터가 있을 때만 관찰 대상을 렌더링 */}
            {hasMore && !loading && <div ref={ref} style={{height: '50px'}}/>}
        </Layout>
    )
}

export default List;