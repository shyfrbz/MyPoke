import {useCallback, useEffect, useState} from "react";
import { getPokemonData, getIdFromUrl } from "../utils/pokemon";

function usePokemonDetail(id){
    const [info, setInfo] = useState({
        pokemon: {},
        species: {names: []},
        abilities: [],
        evolution: []
    });
    const [loading, setLoading] = useState(true);
    const getInfo = useCallback(async () => {
        try {
            // 기본 정보 + 설명 가져오기
            const { pokemon, species } = await getPokemonData(id);

            // 이미지 미리 로드
            // const img1 = new Image();
            // const img2 = new Image();
            const img3 = new Image();
            const img4 = new Image();

            // img1.src = pokemon.sprites.other["official-artwork"].front_default;
            // img2.src = pokemon.sprites.other["official-artwork"].front_shiny;
            img3.src = pokemon.sprites.other["home"].front_default;
            img4.src = pokemon.sprites.other["home"].front_shiny;

            // abilities에서 각 url 추출
            const abilityUrls = pokemon.abilities.map(a => a.ability.url);

            const abilityData = await Promise.all(
                abilityUrls.map(url => fetch(url).then(res => res.json()))
            );

            // 진화정보 추출
            const response = await fetch(species.evolution_chain.url);
            const evolution = await response.json();

            console.log(evolution)

            const firstId = [getIdFromUrl(evolution.chain.species.url)];

            const secondId = evolution.chain.evolves_to?.map(e => {
                return getIdFromUrl(e.species.url)
            })

            const thirdId = evolution.chain.evolves_to?.flatMap(e =>
                e.evolves_to.map(ev => getIdFromUrl(ev.species.url))
            );

            const firstData = await Promise.all(firstId.map(id => getPokemonData(id)));
            const secondData = await Promise.all(secondId.map(id => getPokemonData(id)));
            const thirdData = await Promise.all(thirdId.map(id => getPokemonData(id)));


            const pokemonData = {
                pokemon,
                species,
                abilities: abilityData,
                evolution: [
                    { ids: firstId, data: firstData },
                    { ids: secondId, data: secondData },
                    { ids: thirdId, data: thirdData }
                ]
            };

            console.log(pokemonData);

            setInfo(pokemonData);

        } catch (e) {
            console.error("데이터 수신 실패:", e);

        } finally {
            setLoading(false);
        }
    },[id]);
    useEffect(() => {
        getInfo();
    }, [getInfo]);
    return {loading, info}
}

export default usePokemonDetail;