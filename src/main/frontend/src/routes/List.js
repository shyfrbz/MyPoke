import ListCard from "../components/ListCard/ListCard";
import Loading from "../components/Loading/Loading";
import usePokemonList from "../hooks/usePokemonList";
import {getTypeIds} from "../utils/pokemon";

function List() {
    const { loading, list } = usePokemonList();

    return (
        <div>
            {loading ? (
                <Loading/>
            ) : (
                <div>
                    {list.map(p =>
                        <ListCard
                            key={p.pokemon.id}
                            id={p.pokemon.id}
                            img={p.pokemon.sprites.front_default}
                            name={p.species.names[2].name}
                            types={getTypeIds(p.pokemon.types)}
                        />
                    )}
                </div>)}
        </div>

    )
}

export default List;