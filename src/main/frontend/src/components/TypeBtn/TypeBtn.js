import types from "../../data/types";
import styles from "./TypeBtn.module.css";

function TypeBtn({id}) {
    const typeData = types.find(t => t.id === Number(id));

    if (!typeData) return null;

    return <span className={styles.typeBtn}
        style={{
            backgroundColor: typeData.color.normal
        }}>
    <typeData.logo width={13} height={13}/>
        {typeData.names.ko}
    </span>
}

export default TypeBtn;