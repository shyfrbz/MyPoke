import TypeBtn from "../TypeBtn/TypeBtn";
import styles from "./AllTypes.module.css"

function AllTypes() {
    const types = () => {
        const arr = [];
        for (let i = 1; i <= 18; i++) {
            arr.push(<TypeBtn key={i} id={i}/>);
        }
        return arr;
    }

    return (
        <div className={styles.box}>
            <div className={styles.wrapper}>
                {types()}
            </div>
        </div>
    )
}

export default AllTypes;