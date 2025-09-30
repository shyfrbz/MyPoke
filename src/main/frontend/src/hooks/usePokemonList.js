import {useEffect, useState, useCallback, useRef} from "react";
import {BASE_URL, getPokemonData} from "../utils/pokemon";

const POKEMON_STATE_KEY = 'pokemonListState';

function usePokemonList() {
    const [list, setList] = useState(() => {
        const savedState = sessionStorage.getItem(POKEMON_STATE_KEY);
        return savedState ? JSON.parse(savedState).list : [];
    });
    const [hasMore, setHasMore] = useState(() => {
        const savedState = sessionStorage.getItem(POKEMON_STATE_KEY);
        return savedState ? JSON.parse(savedState).hasMore : true;
    });
    const [offset, setOffset] = useState(() => {
        const savedState = sessionStorage.getItem(POKEMON_STATE_KEY);
        return savedState ? JSON.parse(savedState).offset : 0;
    });

    const [loading, setLoading] = useState(false);
    const isLoading = useRef(false);
    const limit = 20;
    const MAX_POKEMON_ID = 9999;

    // list, offset, hasMore 상태가 바뀔 때마다 자동으로 sessionStorage에 저장
    useEffect(() => {
        try {
            const stateToSave = { list, offset, hasMore };
            sessionStorage.setItem(POKEMON_STATE_KEY, JSON.stringify(stateToSave));
        } catch (e) {
            if (e.name === 'QuotaExceededError') {
                console.error("세션 스토리지 용량을 초과했습니다. 저장 로직을 다시 확인해주세요.");
            }
        }
    }, [list, offset, hasMore]);

    // List.js의 useEffect가 매번 실행되지 않도록 useCallback 사용
    const getList = useCallback(async (next = false) => {
        if (isLoading.current || (next && !hasMore)) return; // 중복 호출 방지
        isLoading.current = true;
        setLoading(true);

        try {
            const currentOffset = next ? offset : 0;
            if(!next) setHasMore(true);

            const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${currentOffset}`);
            const json = await response.json();

            // API 응답이 없으면 중단
            if (!json.results || json.results.length === 0) {
                setHasMore(false);
                return;
            }

            const filteredIds = json.results.reduce((a, pokemon) => {
                const parts = pokemon.url.split('/');
                const id = parseInt(parts[parts.length - 2], 10);
                if (id < MAX_POKEMON_ID) {
                    a.push(id);
                }
                return a;
            }, []);

            if (filteredIds.length < json.results.length || json.next === null) {
                setHasMore(false);
            }

            if (filteredIds.length === 0) return;

            const pokemonData = await Promise.all(
                filteredIds.map(id => getPokemonData(id))
            );

            // 축약형 리스트
            const simpleData = pokemonData?.map(p => {
                return {
                    id:p.pokemon.id,
                    img: p.pokemon.sprites?.front_default,
                    name: p.species.names?.find(n => n.language.name === 'ko')?.name,
                    types: p.pokemon.types
                }
            })

            // next가 true이면 기존 값에 추가로 받아온 값 세팅
            // next가 false이면 처음 가져온 값이므로 그대로 세팅
            setList(prev => next ? [...prev, ...simpleData] : simpleData);

            if (next) setOffset(prev => prev + limit);
            else setOffset(limit);

        } catch (e) {
            console.error("데이터 수신 실패:", e);
        } finally {
            setLoading(false);
            isLoading.current = false;
        }
    },[offset, hasMore]);

    // 리스트 진입 시 기존 저장된 데이터가 없으면 API를 호출
    useEffect(() => {
        // 뒤로 가기로 돌아온 경우 list.length가 0이 아니므로 getList가 호출되지 않음
        if (list.length === 0) {
            getList(false);
        }
    }, []);

    // getMore: () => getList(true) 추가 호출 함수임(next를 true로 설정)
    return {loading, list, hasMore, getMore: () => getList(true)};
}

export default usePokemonList;