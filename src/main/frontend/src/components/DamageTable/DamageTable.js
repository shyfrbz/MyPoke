import styles from "./DamageTable.module.css"
import PropTypes from "prop-types";
import TypeBtn from "../TypeBtn/TypeBtn";

function DamageTable({damage}) {
    return (
        <div>
            <table className={styles.damageTable}>
                <tbody>
                {damage && Object.keys(damage)
                    .filter(key => damage[key].length > 0)
                    .sort((a, b) => Number(b) - Number(a))
                    .map(key => (
                        <tr key={key}>
                            <td className={styles.tdKey}>{key} x</td>
                            <td className={styles.tdVal}>
                                {Array.isArray(damage[key]) && damage[key].map((item, index) =>
                                    <TypeBtn key={index} id={item}/>)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

DamageTable.propTypes = {
    damage: PropTypes.object.isRequired,
};

export default DamageTable;