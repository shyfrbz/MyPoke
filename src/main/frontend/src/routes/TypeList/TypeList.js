import ListCard from "../../components/ListCard/ListCard";
import {getTypeIds} from "../../utils/pokemon";
import {Container} from "react-bootstrap";
import styles from "./TypeList.module.css"
import Layout from "../../components/Layout";
import useTypeList from "../../hooks/useTypeList";
import {useParams} from "react-router-dom";
import AllTypes from "../../components/AllTypes/AllTypes";
import types from "../../data/types";
import Search from "../../components/Search/Search";

function TypeList() {
    const {id} = useParams();
    const {loading, typeList} = useTypeList(id);

    const typeData = types.find(t => t.id === Number(id));
    if (!typeData) return null;

    return (
        <Layout loading={loading && typeList.length === 0}>
            <Container className={styles.list}>
                <h3 className={styles.title} style={{backgroundColor:typeData.color.bright}}>
                    {typeData.names.ko} 타입
                </h3>
                <Search/>
                <AllTypes/>
                {typeList?.map(p =>
                    <ListCard
                        key={p.id}
                        id={p.id}
                        img={p.img}
                        name={p.name}
                        types={getTypeIds(p.types)}
                    />
                )}
            </Container>
        </Layout>
    )
}

export default TypeList;