import {useEffect, useState} from "react";
import { getPokemonData } from "../utils/pokemon";

function usePokemonDetail(id){
    const [info, setInfo] = useState({
        pokemon: {},
        species: {names: []},
        abilities: []
    });
    const [loading, setLoading] = useState(true);
    const getInfo = async () => {
        try {
            // 기본 정보 + 설명 가져오기
            const { pokemon, species } = await getPokemonData(id);

            // abilities에서 각 url 추출
            const abilityUrls = pokemon.abilities.map(a => a.ability.url);

            const abilityData = await Promise.all(
                abilityUrls.map(url => fetch(url).then(res => res.json()))
            );

            const pokemonData = {
                pokemon,
                species,
                abilities: abilityData,
            };

            setInfo(pokemonData);

        } catch (e) {
            console.error("데이터 수신 실패:", e);

        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getInfo();
    }, []);
    return {loading, info}
}

export default usePokemonDetail;