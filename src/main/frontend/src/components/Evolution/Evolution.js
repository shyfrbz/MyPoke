import PropTypes from "prop-types";
import {ReactComponent as RightIcon} from "../../assets/icons/chevron-right.svg";
import styles from "./Evolution.module.css"
import {Link} from "react-router-dom";

function Evolution({evolution}) {
    const hasEvolution = evolution.slice(1).some(stage => stage.data.length > 0);

    if (!hasEvolution) {
        return <p>진화하지 않는 포켓몬입니다.</p>;
    }

    return (
        <div className={styles.evolution_wrapper}>
            {evolution.map((e, idx) => (
                <div key={idx} className={styles.evolution_stage}>
                    <div className={styles.pokemon_list}>
                        {e.data.map(p => (
                            <Link to={`/detail/${p.pokemon.id}`} key={p.pokemon.id} className="text-dark text-decoration-none">
                            <div className={`pokemon_card ${idx >= 3 ? styles.second_row : ""}`}>
                                <img src={p.pokemon.sprites.front_default} alt={p.pokemon.name}/>
                                <p>{p.species.names.find(n => n.language.name === 'ko')?.name || p.pokemon.name}</p>
                            </div>
                            </Link>
                        ))}
                    </div>

                    {idx < evolution.length - 1 && evolution[idx + 1].data.length > 0 && (
                        <div className={styles.arrow}>
                            <RightIcon width={24.66} height={20} fill={"darkgray"} />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

Evolution.propTypes = {
    evolution: PropTypes.array.isRequired,
}

export default Evolution;