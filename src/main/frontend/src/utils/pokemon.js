// URL에서 마지막 앞 숫자(id) 추출
export const getTypeIdFromUrl = (url) => {
    const parts = url.split("/");
    return parts[parts.length - 2];
};

// 포켓몬 타입 배열에서 id만 추출
export const getTypeIds = (types) => types?.map(t => getTypeIdFromUrl(t.type.url));