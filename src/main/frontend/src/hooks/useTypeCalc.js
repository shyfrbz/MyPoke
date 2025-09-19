import types from "../data/types";

function useTypeCalc(ids){
    const damage = {
        4:[],
        2:[],
        1:[],
        0.5:[],
        0.25:[],
        0:[]
    };
    const typeData = ids?.map(i =>
        types.find(t => t.id === Number(i))
    ).filter(Boolean);

    const result = {};
    for(let i=1; i<=18; i++){
        result[i] = 1;
    }

    for (const type of typeData || []) {
        for (const id of type.damage.double) result[id] *= 2;
        for (const id of type.damage.half) result[id] *= 0.5;
        for (const id of type.damage.no) result[id] *= 0;
    }

    for (let i = 1; i <= 18; i++) {
        const value = result[i];
        if (damage[value]) {
            damage[value].push(i);
        }
    }

    return damage;
}

export default useTypeCalc;