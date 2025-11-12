import {useCallback, useEffect, useState} from "react";
import {BASE_URL, getPokemonData} from "../utils/pokemon";

function useTypeList(typeId) {
    const [typeList, setTypeList] = useState([]);
    const [loading, setLoading] = useState(true);
    const MAX_POKEMON_ID = 9999;

    const getTypeList = useCallback(async (next = false) => {
        try {
            const response = await fetch(`${BASE_URL}/type/${typeId}`);
            const json = await response.json();

            const ids = json.pokemon.reduce((a, p) => {
                const parts = p.pokemon.url.split('/');
                const id = parseInt(parts[parts.length - 2], 10);
                if (id < MAX_POKEMON_ID) {
                    a.push(id);
                }
                return a;
            }, []);

            const pokemonData = await Promise.all(
                ids.map(id => getPokemonData(id))
            );

            // 축약형 리스트
            const simpleData = pokemonData?.map(p => {
                return {
                    id: p.pokemon.id,
                    img: p.pokemon.sprites?.front_default,
                    name: p.species.names,
                    types: p.pokemon.types
                }
            })

            setTypeList(simpleData);

        } catch (e) {
            console.error("데이터 수신 실패:", e);
        } finally {
            setLoading(false);
        }
    }, [typeId]);

    useEffect(() => {
        getTypeList();
    }, [getTypeList]);

    return {loading, typeList};
}

export default useTypeList;