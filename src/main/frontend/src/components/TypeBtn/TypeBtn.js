import types from "../../data/types";

function TypeBtn({id}) {
    const typeData = types.find(t => t.id === Number(id));

    if (!typeData) return null;

    return <span
        style={{
            backgroundColor: typeData.color.normal,
            padding: "6px 20px",
            margin: "3px",
            borderRadius: "10px",
            color: "white",
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",                 // 아이콘과 텍스트 간격
            fontSize: "15px"
        }}>
    <typeData.logo width={13} height={13}/>
        {typeData.names.ko}
    </span>
}

export default TypeBtn;