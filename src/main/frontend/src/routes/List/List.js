import ListCard from "../../components/ListCard/ListCard";
import Loading from "../../components/Loading/Loading";
import usePokemonList from "../../hooks/usePokemonList";
import {getTypeIds} from "../../utils/pokemon";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {Container, Spinner} from "react-bootstrap";
import styles from "./List.module.css"
import {useEffect, useLayoutEffect, useRef} from "react";

function List() {
    const {loading, list, hasMore, getMore} = usePokemonList();
    const ref = useRef();
    const SCROLL_POSITION_KEY = 'listScrollPosition';
    const listWrapperRef = useRef(null);

    // ✨ 2. 스크롤 복원 로직을 useEffect 대신 useLayoutEffect로 변경합니다.
    useLayoutEffect(() => {
        const savedPosition = sessionStorage.getItem(SCROLL_POSITION_KEY);
        const wrapper = listWrapperRef.current;

        if (savedPosition && list.length > 0 && wrapper) {
            // 1. 렌더링을 막기 위해 화면을 즉시 투명하게 만듭니다.
            wrapper.style.opacity = '0';

            // 2. 스크롤을 즉시 이동시킵니다.
            window.scrollTo(0, parseInt(savedPosition, 10));
            sessionStorage.removeItem(SCROLL_POSITION_KEY);

            // 3. 브라우저의 다음 페인트 프레임에서 화면을 다시 보이게 합니다.
            //    이것이 스크롤 점프를 숨기는 핵심입니다.
            requestAnimationFrame(() => {
                wrapper.style.opacity = '1';
            });
        }
    }, [list.length]); // 의존성 배열과 내부 로직은 동일합니다.

    // 스크롤 위치 저장
    useEffect(() => {
        // useEffect의 cleanup 함수를 이용합니다. 이 함수는 컴포넌트가 언마운트되기 직전에 호출됩니다.
        return () => {
            sessionStorage.setItem(SCROLL_POSITION_KEY, window.scrollY);
        };
    }, []); // 의존성 배열이 비어있으므로, 마운트 시에 딱 한 번만 등록되고 언마운트 시에 실행됩니다.

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

    }, [getMore, loading, hasMore]);

    return (
        <div className="wrapper">
            {loading && list.length === 0 ? (
                <Loading/>
            ) : (
                <div>
                    <Header/>
                    <main>
                        <Container className={styles.list}>
                            {list.map(p =>
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
                        {loading && <div style={{ textAlign: 'center', margin:"50px 0" }}>
                            <Spinner animation="border" variant="danger" />
                        </div>}

                        {/* 더 가져올 데이터가 있을 때만 관찰 대상을 렌더링 */}
                        {hasMore && !loading && <div ref={ref} style={{ height: '50px' }} />}
                    </main>
                    <Footer/>
                </div>)}
        </div>

    )
}

export default List;