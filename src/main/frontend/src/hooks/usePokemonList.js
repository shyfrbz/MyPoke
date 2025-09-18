import {useEffect, useState} from "react";

function usePokemonList(){
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);
    const baseURL = "https://pokeapi.co/api/v2";
    const getList = async () => {
        try {
            // 원본 데이터 가져오기
            const json = await (
                await fetch(
                    `${baseURL}/pokemon?limit=20&offset=0`
                )
            ).json();

            // url의 뒷부분에서 도감번호 추출
            const ids = json.results.map(r => {
                const part = r.url.split('/');
                return part[part.length - 2];
            });

            // 추출한 도감번호로 포켓몬 정보 / 설명 가져오기 (promise 사용으로 데이터 요청 완료 기다림)
            const promises = ids.map(async (id) => {
                const [pokemonRes, speciesRes] = await Promise.all([
                    fetch(`${baseURL}/pokemon/${id}`)
                        .then(res => res.json()),
                    fetch(`${baseURL}/pokemon-species/${id}`)
                        .then(res => res.json())
                ]);

                return {
                    pokemon: pokemonRes,
                    species: speciesRes
                }
            });
            const pokemonData = await Promise.all(promises);

            // 최종 데이터 세팅
            setList(pokemonData);
            // console.log(pokemonData[0]);
        } catch (e) {
            console.error("데이터 수신 실패:", e);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getList();
    }, []);

    return { loading, list };
}

export default usePokemonList;