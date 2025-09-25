import ListCard from "../../components/ListCard/ListCard";
import Loading from "../../components/Loading/Loading";
import usePokemonList from "../../hooks/usePokemonList";
import {getTypeIds} from "../../utils/pokemon";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {Container} from "react-bootstrap";
import styles from "./List.module.css"

function List() {
    const {loading, list} = usePokemonList();

    return (
        <div className="wrapper">
            {loading ? (
                <Loading/>
            ) : (
                <div>
                    <Header/>
                    <main>
                        <Container className={styles.list}>
                            {list.map(p =>
                                <ListCard
                                    key={p.pokemon.id}
                                    id={p.pokemon.id}
                                    img={p.pokemon.sprites.front_default}
                                    name={p.species.names[2].name}
                                    types={getTypeIds(p.pokemon.types)}
                                />
                            )}
                        </Container>
                    </main>
                    <Footer/>
                </div>)}
        </div>

    )
}

export default List;