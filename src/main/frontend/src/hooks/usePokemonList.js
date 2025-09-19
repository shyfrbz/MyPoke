import { useEffect, useState } from "react";
import { BASE_URL, getPokemonData } from "../utils/pokemon";

function usePokemonList() {
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);

    useEffect(() => {
        const getList = async () => {
            try {
                const response = await fetch(`${BASE_URL}/pokemon?limit=20&offset=0`);
                const json = await response.json();

                const ids = json.results.map(r => {
                    const parts = r.url.split('/');
                    return parts[parts.length - 2];
                });

                const pokemonData = await Promise.all(
                    ids.map(id => getPokemonData(id))
                );

                setList(pokemonData);
            } catch (e) {
                console.error("데이터 수신 실패:", e);
            } finally {
                setLoading(false);
            }
        };

        getList();
    }, []);

    return { loading, list };
}

export default usePokemonList;