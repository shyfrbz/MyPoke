import {useCallback, useEffect, useRef, useState} from "react";
import {BASE_URL, getPokemonData, getTypeIds} from "../utils/pokemon";

function usePokemonList() {
    const [list, setList] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);
    const limit = 20;
    const MAX_POKEMON_ID = 9999;

    // 데이터 요청 중복을 막기 위한 Ref
    const isLoading = useRef(false);

    // List.js의 useEffect가 매번 실행되지 않도록 useCallback 사용
    const getList = useCallback(async (next = false) => {
        // state 대신 ref를 확인하여 중복 호출을 즉시 방지
        if (isLoading.current || (next && !hasMore)) return;

        isLoading.current = true; // 요청 시작 시 동기적으로 true로 설정
        setLoading(true);

        try {
            const currentOffset = next ? offset : 0;
            if(!next) setHasMore(true);

            const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${currentOffset}`);
            const json = await response.json();

            const filteredIds = json.results.reduce((a, pokemon) => {
                const parts = pokemon.url.split('/');
                const id = parseInt(parts[parts.length - 2], 10);
                if (id < MAX_POKEMON_ID) {
                    a.push(id);
                }
                return a;
            }, []);

            if (filteredIds.length < json.results.length || json.next === null || !json.results) {
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

            // 데이터 저장용
            // const forSearch = pokemonData?.map(p => {
            //     return{
            //         id:p.pokemon.id,
            //         names : {
            //             en : p.species.name,
            //             ko : p.species.names?.find(n => n.language.name === 'ko')?.name,
            //             ja : p.species.names?.find(n => n.language.name === 'ja')?.name
            //         },
            //         img : {
            //             default : p.pokemon.sprites?.front_default,
            //             official : p.pokemon.sprites.other["official-artwork"].front_default
            //         },
            //         types : getTypeIds(p.pokemon.types)
            //     }
            // })
            //
            // console.log(forSearch)

            // next가 true이면 기존 값에 추가로 받아온 값 세팅
            // next가 false이면 처음 가져온 값이므로 그대로 세팅
            setList(prev => next ? [...prev, ...simpleData] : simpleData);

            if (next) {
                setOffset(prevOffset => prevOffset + limit);
            } else {
                setOffset(limit);
            }

        } catch (e) {
            console.error("데이터 수신 실패:", e);
        } finally {
            // 요청이 성공하든 실패하든 항상 false로 설정
            isLoading.current = false;
            setLoading(false);
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