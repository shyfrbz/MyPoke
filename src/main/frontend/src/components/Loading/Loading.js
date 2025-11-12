import styles from "./Loading.module.css"

function Loading() {
    return (
        <div className={styles.wrapper}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg"
                 alt="pocketball"
                 className={styles.img}/>
            <h1 className={styles.text}>Loading...</h1>
        </div>
    )
}

export default Loading;