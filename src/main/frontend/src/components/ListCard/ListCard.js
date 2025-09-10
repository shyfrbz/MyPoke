import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import TypeBtn from "../TypeBtn/TypeBtn";
import styles from "./ListCard.module.css";

function ListCard({id, img, name, types}) {
    return <div className={styles.card}>
        <Link to={`/detail/${id}`} style={{textDecoration: "none"}}>
            <p>{id.toString().padStart(4,"0")}</p>
            <img src={img} alt={id} className={styles.img}/>
            <p>{name}</p>
        </Link>
        <div>
            {types.map(i => (
                <TypeBtn key={i} id={i}/>
            ))}
        </div>
    </div>
}

ListCard.propTypes = {
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.array.isRequired,
    types: PropTypes.array.isRequired,
};

export default ListCard;