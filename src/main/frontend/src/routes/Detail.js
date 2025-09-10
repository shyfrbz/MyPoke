import {use, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Loading from "../components/Loading/Loading";
import ListCard from "../components/ListCard/ListCard";

function Detail(){
    const {id} = useParams();
    const [info, setInfo] = useState({
        pokemon: {},
        species: { names: [] },
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

    // 보여줄 요소들 지정
    const pokemonName = info.species.names.find(n => n.language.name === "ko")?.name;

    return (
        <div>
            {loading ? (
                <Loading/>
            ) : (
                <div>
                    <h3>{pokemonName}</h3>
                    <img src={info.pokemon.sprites.other["official-artwork"].front_default} alt={id}/>
                    {info.abilities?.map((a,idx) =>
                        <div key={idx} style={info.pokemon.abilities[idx]?.is_hidden ? {color: "grey"} : {color: "black"}}>
                        <h4>{a.names.filter(n => n.language.name === "ko").pop()?.name}</h4>
                        <p>{a.flavor_text_entries.filter(n => n.language.name === "ko").pop()?.flavor_text}</p>
                        </div>
                    )}
                </div>)}
        </div>

    )

}

export default Detail;