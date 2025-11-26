import {Link, useNavigate} from "react-router-dom";
import styles from "./Home.module.css";
import {useTranslation} from 'react-i18next';
import Layout from "../../components/Layout";
import {Container, Carousel} from "react-bootstrap";
import {getTodayPokemon} from "../../utils/pokemon";
import allPokemonData from "../../data/allPokemonData";
import types from "../../data/types";
import TypeBtn from "../../components/TypeBtn/TypeBtn";
import Search from "../../components/Search/Search";

function Home() {
    const {i18n, t} = useTranslation();
    const lang = i18n.language.slice(0, 2);
    const navigate = useNavigate();

    const todayPokemon = getTodayPokemon(allPokemonData);

    return (
        <Layout>
            <Container className={styles.mainContainer}>

                <Search/>

                <div className={styles.carouselWrapper}>
                    <Carousel
                        indicators={false}
                        interval={3000}
                        fade={false}
                        className={styles.customCarousel}
                    >
                        {todayPokemon.map((p) => {
                            const baseColor = types?.find(t => t.id === Number(p.types?.[0]))?.color?.bright;
                            const cardColor = baseColor ? baseColor + '66' : '#77777766';

                            return (
                                <Carousel.Item key={p.id}>
                                    <div className={styles.cardPaddingWrapper}>
                                        <div
                                            className={styles.pokemonCard}
                                            onClick={() => navigate(`/detail/${p.id}`)}
                                            style={{ backgroundColor: cardColor }}
                                        >
                                            <img
                                                src={p.img.official}
                                                alt={p.names[lang]}
                                                className={styles.pokemonImg}
                                            />
                                            <h2 className={styles.pokemonName}>{p.names[lang]}</h2>

                                            <div className={styles.typeGroup}>
                                                {p.types.map(i => (
                                                    <TypeBtn key={i} id={i}/>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            );
                        })}
                    </Carousel>
                </div>

                <div className={styles.menuGrid}>
                    <Link to={"/list"} className={`${styles.menuBtn} ${styles.pokedexBtn}`}>
                        <span className={styles.icon}>📖</span>
                        <span>{t('nav.pokedex')}</span>
                    </Link>
                    <Link to={"/quiz/setup"} className={`${styles.menuBtn} ${styles.quizBtn}`}>
                        <span className={styles.icon}>🎮</span>
                        <span>{t('nav.quiz')}</span>
                    </Link>
                </div>

            </Container>
        </Layout>
    )
}

export default Home;