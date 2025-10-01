import {useState} from "react";
import {useParams} from "react-router-dom";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import styles from "./Detail.module.css";
import {ReactComponent as ShinyIcon} from "../../assets/icons/shiny.svg";
import {ReactComponent as InfoIcon} from "../../assets/icons/info.svg";
import {ReactComponent as SoundIcon} from "../../assets/icons/sound.svg";
import {ReactComponent as MaleIcon} from "../../assets/icons/male.svg";
import {ReactComponent as FemaleIcon} from "../../assets/icons/female.svg";
import TypeBtn from "../../components/TypeBtn/TypeBtn";
import StatChart from "../../components/StatChart/StatChart";
import usePokemonDetail from "../../hooks/usePokemonDetail";
import {getTypeIds} from "../../utils/pokemon";
import useTypeCalc from "../../hooks/useTypeCalc";
import DamageTable from "../../components/DamageTable/DamageTable";
import Evolution from "../../components/Evolution/Evolution";
import Layout from "../../components/Layout";

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
    const damage = useTypeCalc(types);

    // 성별 버튼
    let hasFemale = info.pokemon.sprites?.front_female !== null && info.pokemon.sprites?.front_female !== undefined;

    const [femaleBtn, setFemaleBtn] = useState(false);
    const onFemaleClick = () => {
        setFemaleBtn((prev) => !prev);
    }

    // 이로치 버튼
    const [shinyBtn, setShinyBtn] = useState(false);
    const onShinyClick = () => {
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

    const allStat = statData?.reduce((sum, s) => sum + s.value, 0);

    return (
        <Layout loading={loading || !info.pokemon}>
            <div className="d-flex">
                {/*왼쪽 사진 부분*/}
                <div>
                    <h2>{id.toString().padStart(4, "0")} / {pokemonName}</h2>
                    <img
                        src={
                            femaleBtn
                                ? (shinyBtn
                                    ? info?.pokemon?.sprites?.other["home"].front_shiny_female
                                    : info?.pokemon?.sprites?.other["home"].front_female)
                                : (shinyBtn
                                    ? info?.pokemon?.sprites?.other["home"].front_shiny
                                    : info?.pokemon?.sprites?.other["home"].front_default)
                        }
                        alt={id}
                    />
                    <hr/>
                    {hasFemale ? (
                        <button onClick={onFemaleClick} className={styles.femaleBtn}>
                            {femaleBtn ? (
                                <MaleIcon width={24.66} height={20} fill={"white"}/>
                            ) : (
                                <FemaleIcon width={24.66} height={20} fill={"white"}/>
                            )}
                        </button>
                    ) : ("")}
                    <button onClick={onShinyClick} className={styles.shinyBtn}>
                        <ShinyIcon width={24.66} height={20} fill={"white"}/>
                    </button>
                    <button onClick={soundOn} className={styles.soundBtn}>
                        <SoundIcon width={24.66} height={20} fill={"white"}/>
                    </button>
                </div>

                {/*오른쪽 정보 부분*/}
                <div>
                    <div>
                        {types?.map(i => (
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
                                    popperConfig={{
                                        strategy: 'fixed',
                                        modifiers: [
                                            {name: 'computeStyles', options: {adaptive: false}},
                                            {
                                                name: 'preventOverflow',
                                                options: {boundary: 'viewport', padding: 8}
                                            },
                                            {
                                                name: 'flip',
                                                options: {fallbackPlacements: ['left', 'top', 'bottom']}
                                            },
                                        ],
                                    }}
                                >
                                    <InfoIcon className={styles.infoIcon} fill={"lightgray"}/>
                                </OverlayTrigger>
                            </div>
                        ))}
                    </div>
                    <h4>진화정보</h4>
                    <Evolution evolution={info.evolution}/>

                    <h4>방어상성(특성 미적용)</h4>
                    <DamageTable damage={damage}/>

                    <h4>종족치({allStat})</h4>
                    <StatChart data={statData}/>

                </div>
            </div>
        </Layout>
    )
}

export default Detail;