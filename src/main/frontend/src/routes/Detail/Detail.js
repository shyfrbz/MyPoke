import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import styles from "./Detail.module.css";
import { ReactComponent as ShinyIcon } from "../../assets/icons/shiny.svg";
import { ReactComponent as InfoIcon } from "../../assets/icons/info.svg";
import TypeBtn from "../../components/TypeBtn/TypeBtn";

// import {Button} from "react-bootstrap";

function Detail() {
    const {id} = useParams();
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

    // 보여줄 요소들 지정
    const pokemonName = info.species?.names?.find(n => n.language.name === "ko")?.name;
    // const pokemonDesc = info.species?.flavor_text_entries.filter(n => n.language.name === "ko").pop()?.flavor_text;
    const pokemonDesc = info.species?.flavor_text_entries?.find(n => n.language.name === "ko")?.flavor_text;
    const pokemonGenera = info.species?.genera?.find(g => g.language.name === "ko")?.genus;
    const types= info.pokemon?.types?.map(t => {
            const parts = t.type.url.split("/");
            return parts[parts.length - 2];
        })

    // 이로치 버튼
    const [shinyBtn, setShinyBtn] = useState(false);
    const onclick = () => {
        setShinyBtn((prev) => !prev);
    }

    return (
        <div>
            {loading ? (
                <Loading/>
            ) : (
                <div>
                    <main>
                        <div className="d-flex">
                            {/*왼쪽 사진 부분*/}
                            <div>
                                <h2>{id.toString().padStart(4, "0")} / {pokemonName}</h2>
                                {shinyBtn ? (
                                    <img src={info.pokemon.sprites.other["official-artwork"].front_shiny} alt={id}/>
                                ) : (
                                    <img src={info.pokemon.sprites.other["official-artwork"].front_default} alt={id}/>
                                )}
                                <hr/>
                                <button onClick={onclick} className={styles.shinyBtn}>
                                   <ShinyIcon width={24.66} height={20} fill={"white"}/>
                                </button>
                            </div>

                            {/*오른쪽 정보 부분*/}
                            <div>
                                <div>
                                    {types.map(i => (
                                        <TypeBtn key={i} id={i}/>
                                    ))}
                                </div>
                                <h4>{pokemonGenera}</h4>
                                <p>{pokemonDesc}</p>
                                <div>
                                    신장 : {info.pokemon.height/10} m | 체중 : {info.pokemon.weight/10} kg
                                </div>

                                <div>
                                    <h4>특성</h4>
                                {info.abilities?.map((a, idx) => (
                                    <div key={idx} className={styles.ablilty}>
                                        {info.pokemon.abilities[idx]?.is_hidden ?
                                            <span className={styles.hiddenMark}>*</span> : ""}
                                        {a.names.filter(n => n.language.name === "ko").pop()?.name}
                                        <OverlayTrigger
                                            key={idx}
                                            placement="right"
                                            delay={{show: 250, hide: 250}}
                                            overlay={
                                                <Tooltip id={`tooltip-right`}>
                                                    {a.flavor_text_entries.filter(n => n.language.name === "ko").pop()?.flavor_text}
                                                </Tooltip>
                                            }
                                        >
                                            <InfoIcon className={styles.infoIcon} fill={"lightgray"}/>
                                        </OverlayTrigger>
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>
                    </main>
                </div>)}
        </div>

    )

}

export default Detail;