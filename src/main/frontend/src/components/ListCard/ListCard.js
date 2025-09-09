import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import TypeBtn from "../TypeBtn/TypeBtn";

function ListCard({id, img, name, types}){
    return <div>
        <Link to={`/detail/${id}`} style={{textDecoration: "none"}}>
            <img src={img} alt={id}/>
            <p>{name}</p>
            <div>
                {types.map(i => (
                    <TypeBtn key={i} id={i} />
                ))}
            </div>
        </Link>
    </div>
}

ListCard.propTypes = {
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.array.isRequired,
    types: PropTypes.array.isRequired,
};

export default ListCard;