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
    const pokemonGenera = info.species?.genera?.find(g => g.language.name === "ko")?.genus;

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
                                <h4>{pokemonGenera}</h4>

                                <div>
                                </div>

                                {info.abilities?.map((a, idx) => (<p>
                                    <span>
                                        {info.pokemon.abilities[idx]?.is_hidden ?
                                            <small style={{color: "tomato", marginRight: "2px"}}>*</small> : ""}
                                        {a.names.filter(n => n.language.name === "ko").pop()?.name}</span>
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
                                        <span style={{marginLeft: "3px", padding:"2px"}}>
                                            <InfoIcon width={20} height={20} fill={"lightgray"}/>
                                        </span>
                                        </OverlayTrigger>
                                    </p>
                                ))}
                            </div>
                        </div>
                    </main>
                </div>)}
        </div>

    )

}

export default Detail;