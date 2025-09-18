import {useEffect, useState} from "react";

function usePokemonDetail(id){
    const [info, setInfo] = useState({
        pokemon: {},
        species: {names: []},
        abilities: []
    });
    const [loading, setLoading] = useState(true);
    const baseURL = "https://pokeapi.co/api/v2";
    const getInfo = async () => {
        try {
            // 기본 정보 + 설명 가져오기
            const [pokemonRes, speciesRes] = await Promise.all([
                fetch(`${baseURL}/pokemon/${id}`)
                    .then(res => res.json()),
                fetch(`${baseURL}/pokemon-species/${id}`)
                    .then(res => res.json())
            ]);

            // abilities에서 각 url 추출
            const abilityUrls = pokemonRes.abilities.map(a => a.ability.url);

            const abilityData = await Promise.all(
                abilityUrls.map(url => fetch(url).then(res => res.json()))
            );

            const pokemonData = {
                pokemon: pokemonRes,
                species: speciesRes,
                abilities: abilityData,
            };

            setInfo(pokemonData);
            console.log(pokemonData);

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