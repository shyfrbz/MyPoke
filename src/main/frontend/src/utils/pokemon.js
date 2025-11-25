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

// 매일 랜덤 5마리 포켓몬 선정
export const getTodayPokemon = (allPokemonData, totalCount = 1025) => { // totalCount는 도감 최대 번호
    const today = new Date();
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();

    return Array.from({ length: 5 }, (_, i) => {
        const num = Math.floor((Math.abs(Math.sin(seed + i)) * totalCount)) + 1;
        return allPokemonData.find(p => p.id === num); // 바로 정보 추출
    }).filter(Boolean); // 혹시 없는 번호 제거
}