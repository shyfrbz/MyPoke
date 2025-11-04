import types from "../../data/types";
import styles from "./TypeBtn.module.css";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

function TypeBtn({id}) {
    const typeData = types.find(t => t.id === Number(id));
    const { t } = useTranslation();

    if (!typeData) return null;

    return <Link to={`/type/${id}`} className={styles.typeBtn}
        style={{
            backgroundColor: typeData.color.normal
        }}>
    <typeData.logo width={14} height={14}/>
        {typeData.names[t('lang')]}
    </Link>
}

export default TypeBtn;