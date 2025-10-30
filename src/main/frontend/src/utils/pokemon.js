// URL에서 마지막 앞 숫자(id) 추출

export const getIdFromUrl = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 2];
};

// 포켓몬 타입 배열에서 id만 추출
export const getTypeIds = (types) => types?.map(t => getIdFromUrl(t.type.url));

//기본 API 호출
export const BASE_URL = "https://pokeapi.co/api/v2";

export const getPokemonData = async (id) => {
    const [pokemonRes, speciesRes] = await Promise.all([
        fetch(`${BASE_URL}/pokemon/${id}`).then(res => res.json()),
        fetch(`${BASE_URL}/pokemon-species/${id}`).then(res => res.json())
    ]);

    return {
        pokemon: pokemonRes,
        species: speciesRes
    };
};
