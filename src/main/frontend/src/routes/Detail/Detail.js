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
import {useTranslation} from "react-i18next";
import types from "../../data/types";

function Detail() {
    const {id} = useParams();
    const {loading, info} = usePokemonDetail(id);

    const {i18n, t} = useTranslation();
    const lang = i18n.language.slice(0, 2);

    // 보여줄 요소들 지정
    const pokemonName = info.species?.names?.find(n => n.language.name === lang)?.name;
    // 가장 최신 도감 설명
    // const pokemonDesc = info.species?.flavor_text_entries.filter(n => n.language.name === "ko").pop()?.flavor_text;
    // 첫 도감 설명
    const pokemonDesc = info.species?.flavor_text_entries?.find(n => n.language.name === lang)?.flavor_text;
    const pokemonGenera = info.species?.genera?.find(g => g.language.name === lang)?.genus;
    const pokemonTypes = getTypeIds(info.pokemon.types);
    const damage = useTypeCalc(pokemonTypes);

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
            <div className={styles.wrapper}>
                {/*왼쪽 사진 부분*/}
                <div className={styles.section01}>
                    <div className={styles.nameWrapper}>
                        {/*도감번호 배경색에 66 더한 것은 투명도 조절 역할, bright보다 더 연한 색상으로 출력*/}
                        <div className={styles.id}
                             style={{background: types?.find(t => t.id === Number(pokemonTypes?.[0]))?.color?.bright + '66'}}>
                            {id.toString().padStart(4, "0")}
                        </div>
                        <div className={styles.name}>
                            {pokemonName}
                        </div>
                    </div>
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
                        className={styles.img}
                    />
                    <div className={styles.btnWrapper}>
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
                </div>

                {/*오른쪽 정보 부분*/}
                <div className={styles.section02}>
                    <table className={styles.infoTable}>
                        <tbody>
                        <tr>
                            <td colSpan={2} className={styles.infoTitle}>
                                <p>{pokemonGenera}</p>
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.infoLabel}>
                                {t('detail.height')}
                            </td>
                            <td className={styles.infoValue}>
                                {info.pokemon.height / 10} m
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.infoLabel}>
                                {t('detail.weight')}
                            </td>
                            <td className={styles.infoValue}>
                                {info.pokemon.weight / 10} kg
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.infoLabel}>
                                {t('detail.type')}
                            </td>
                            <td className={styles.infoValue}>
                                {pokemonTypes?.map(i => (
                                    <TypeBtn key={i} id={i}/>
                                ))}
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.infoLabel}>
                                {t('detail.abilities')}
                            </td>
                            <td className={styles.infoValue}>
                                {info.abilities?.map((a, idx) => (
                                    <div key={idx} className={styles.ablilty}>
                                        {info.pokemon.abilities[idx]?.is_hidden ?
                                            <span className={styles.hiddenMark}>*</span> : ""}
                                        {a.names.filter(n => n.language.name === lang).pop()?.name}
                                        <OverlayTrigger
                                            key={idx}
                                            placement="top"
                                            trigger={['hover', 'focus', 'click']}
                                            delay={{show: 250, hide: 250}}
                                            overlay={
                                                <Tooltip id={`tooltip-right`}>
                                                    {a.flavor_text_entries.filter(n => n.language.name === lang).pop()?.flavor_text}
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
                                                        options: {fallbackPlacements: ['bottom', 'right', 'left']}
                                                    },

                                                ],
                                            }}
                                        >
                                            <span style={{cursor: 'pointer'}}>
                                            <InfoIcon className={styles.infoIcon} fill={"lightgray"}/>
                                            </span>
                                        </OverlayTrigger>
                                    </div>
                                ))}
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} className={styles.infoDesc}>
                                {pokemonDesc}
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div className={styles.divider}></div>

                    <p className={styles.label}>{t('detail.evolutions')}</p>
                    <Evolution evolution={info.evolution}/>
                    <div className={styles.divider}></div>

                    <p className={styles.label}>{t('detail.effectiveness')}</p>
                    <DamageTable damage={damage}/>
                    <div className={styles.divider}></div>

                    <p className={styles.label}>{t('detail.stats')}({allStat})</p>
                    <StatChart data={statData}/>

                </div>
            </div>
        </Layout>
    )
}

export default Detail;