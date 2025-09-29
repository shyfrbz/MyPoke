import {useEffect, useState, useCallback} from "react";
import {BASE_URL, getPokemonData, getIdFromUrl} from "../utils/pokemon";

function usePokemonList() {
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [offset, setOffset] = useState(0);
    const limit = 20;

    // List.js의 useEffect가 매번 실행되지 않도록 useCallback 사용
    const getList = useCallback(async (next = false) => {
        if (loading || (next && !hasMore)) return; // 중복 호출 방지
        setLoading(true);

        try {
            const currentOffset = next ? offset : 0;
            if(!next) setHasMore(true);

            const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${currentOffset}`);
            const json = await response.json();

            // next가 null이면 hasMore를 false로 설정
            setHasMore(json.next !== null);

            const ids = json.results.map(r => {
                const parts = r.url.split('/');
                return parts[parts.length - 2];
            });

            // API 결과가 없을 경우(마지막 페이지의 끝) 추가 로직 실행 안함
            if (ids.length === 0) return;

            const pokemonData = await Promise.all(
                ids.map(id => getPokemonData(id))
            );

            // next가 true이면 기존 값에 추가로 받아온 값 세팅
            // next가 false이면 처음 가져온 값이므로 그대로 세팅
            setList(prev => next ? [...prev, ...pokemonData] : pokemonData);

            if (next) setOffset(prev => prev + limit);
            else setOffset(limit);

        } catch (e) {
            console.error("데이터 수신 실패:", e);
        } finally {
            setLoading(false);
        }
    },[offset, loading, hasMore]);

    useEffect(() => {
        getList();
    }, []);

    // getMore: () => getList(true) 추가 호출 함수임(next를 true로 설정)
    return {loading, list, hasMore, getMore: () => getList(true)};
}

export default usePokemonList;