import {useState} from "react";
import {useParams} from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import styles from "./Detail.module.css";
import {ReactComponent as ShinyIcon} from "../../assets/icons/shiny.svg";
import {ReactComponent as InfoIcon} from "../../assets/icons/info.svg";
import {ReactComponent as SoundIcon} from "../../assets/icons/sound.svg";
import TypeBtn from "../../components/TypeBtn/TypeBtn";
import StatChart from "../../components/StatChart/StatChart";
import usePokemonDetail from "../../hooks/usePokemonDetail";
import {getTypeIds} from "../../utils/pokemon";
import useTypeCalc from "../../hooks/useTypeCalc";

function Detail() {
    const {id} = useParams();
    const {loading, info} = usePokemonDetail(id);

    // 보여줄 요소들 지정
    const pokemonName = info.species?.names?.find(n => n.language.name === "ko")?.name;
    // 가장 최신 도감 설명
    // const pokemonDesc = info.species?.flavor_text_entries.filter(n => n.language.name === "ko").pop()?.flavor_text;
    // 첫 도감 설명
    const pokemonDesc = info.species?.flavor_text_entries?.find(n => n.language.name === "ko")?.flavor_text;
    const pokemonGenera = info.species?.genera?.find(g => g.language.name === "ko")?.genus;
    const types = getTypeIds(info.pokemon.types);

    const {damage} = useTypeCalc(types);

    // 이로치 버튼
    const [shinyBtn, setShinyBtn] = useState(false);
    const onclick = () => {
        setShinyBtn((prev) => !prev);
    }

    // 울음소리 버튼
    const cries = info.pokemon?.cries?.latest;
    const audio = new Audio(cries);
    audio.type = "audio/ogg";
    audio.volume = 0.5;

    const soundOn = () => {
        audio.play();
    }

    // 종족치 데이터
    const statMap = {
        "hp": "H",
        "attack": "A",
        "defense": "B",
        "special-attack": "C",
        "special-defense": "D",
        "speed": "S"
    };

    const statData = info.pokemon?.stats?.map(s => ({
        stat: statMap[s.stat.name] || s.stat.name,
        value: s.base_stat
    })).reverse();

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
                                <button onClick={soundOn} className={styles.soundBtn}>
                                    <SoundIcon width={24.66} height={20} fill={"white"}/>
                                </button>
                                {/*<audio src={info.pokemon.cries.latest} type="audio/ogg" id="criesAudio"></audio>*/}
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
                                    신장 : {info.pokemon.height / 10} m | 체중 : {info.pokemon.weight / 10} kg
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
                                <h4>종족치</h4>
                                <StatChart data={statData}/>

                                <h4>방어상성(특성 미적용)</h4>
                                <div>
                                    <table className={styles.damageTable}>
                                        <tbody>
                                        {damage && Object.keys(damage)
                                            .filter(key => damage[key].length > 0)
                                            .sort((a, b) => Number(b) - Number(a))
                                            .map(key => (
                                                <tr key={key}>
                                                    <td className={styles.tdKey}>{key}배</td>
                                                    <td className={styles.tdVal}>
                                                        {Array.isArray(damage[key]) && damage[key].map((item, index) =>
                                                            <TypeBtn key={index} id={item}/>)}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </main>
                </div>)}
        </div>

    )

}

export default Detail;