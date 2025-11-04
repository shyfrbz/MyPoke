import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import TypeBtn from "../TypeBtn/TypeBtn";
import styles from "./ListCard.module.css";
import {useTranslation} from "react-i18next";

function ListCard({id, img, name, types}) {
    const { i18n } = useTranslation();
    const lang = i18n.language.slice(0, 2);

    // 해당 언어 이름 찾기
    let displayName;

    if (Array.isArray(name)) {
        // 배열 형태 (API로 받은 경우)
        displayName = name.find(n => n.language.name === lang)?.name;
    } else if (typeof name === 'object') {
        // 객체 형태 (검색 데이터처럼 이미 정리된 경우)
        displayName = name?.[lang] || name?.ko;
    } else {
        displayName = name || '???';
    }


    return (
        <div className={styles.card}>
        <Link to={`/detail/${id}`}
              className="text-dark text-decoration-none">
            <p>{id.toString().padStart(4,"0")}</p>
            <img src={img} alt={id} className={styles.img}/>
            <p>{displayName}</p>
        </Link>
        <div>
            {types.map(i => (
                <TypeBtn key={i} id={i}/>
            ))}
        </div>
    </div>
    )
}

ListCard.propTypes = {
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.array.isRequired,
    types: PropTypes.array.isRequired,
};

export default ListCard;