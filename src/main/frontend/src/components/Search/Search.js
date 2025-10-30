import styles from "./Search.module.css"
import {useEffect, useState} from "react";
import allPokemonData from "../../data/allPokemonData";
import { useNavigate } from "react-router-dom";

function Search() {
    const [keyword, setKeyword] = useState('');                 // 검색어
    const [hasKeyword, setHasKeyword] = useState(false);      // 검색창 입력 여부
    const [dropdown, setDropdown] = useState([]);               // 드롭다운 리스트
    const [dropdownIdx, setDropdownIdx] = useState(-1);       // 드롭다운 리스트 중 선택된 인덱스

    const navigate = useNavigate();

    // 자동완성 드롭다운 목록 출력
    const showDropdown = () => {
        if (!keyword.trim()) {
            setHasKeyword(false);
            setDropdown([]);
            return;
        }

        const q = keyword.toLowerCase();

        const filteredList = allPokemonData.filter(p =>
            (p.names?.ko ?? "").toLowerCase().includes(q)
        ).slice(0, 7);

        // 추후 언어변경 시 이렇게
        // const filteredList = allPokemonData.filter(p =>
        //     ["ko","en","ja"].some(lang =>
        //         (p.name?.[lang] ?? "").toLowerCase().includes(q)
        //     )
        // );

        setDropdown(filteredList);
        setHasKeyword(true);
    };

    // 인풋박스 변경 이벤트리스너(onchange)
    const changeKeyword = event => {
        setKeyword(event.target.value);
        setHasKeyword(true);
    }

    // 자동완성 목록 중 하나 클릭 시
    const clickDropdown = clickedItem => {
        setKeyword(clickedItem.names.ko);
        setHasKeyword(false);
        navigate(`/search/${clickedItem.names.ko}`);
    }

    const handleSearch = (searchTerm = keyword) => {
        const q = searchTerm.trim();
        if (!q) return; // 빈값이면 실행하지 않음
        setHasKeyword(false); // 자동완성 닫기
        navigate(`/search/${q}`);
    };

    // 자동완성 목록 중 키보드로 선택
    const handleDropdownKey = event => {
        if (hasKeyword){
            // 아래 키 누르기 + 목록의 길이가 선택된 인덱스보다 클 때
            if (event.key === 'ArrowDown' && dropdown.length - 1 > dropdownIdx) {
                setDropdownIdx(dropdownIdx + 1);
            }

            // 위 키 누르기 + 선택된 인덱스가 0보다 크거나 같을 때
            if (event.key === 'ArrowUp' && dropdownIdx >= 0){
                setDropdownIdx(dropdownIdx - 1);
            }

            // 엔터 누르기 + 선택된 인덱스가 0보다 크거나 같을 때
            if (event.key === "Enter") {
                if (dropdownIdx >= 0) {
                    const selected = dropdown[dropdownIdx];
                    setKeyword(selected.names.ko);
                    handleSearch(selected.names.ko);
                } else {
                    handleSearch();
                }
                setDropdownIdx(-1);
            }
        }
    }

    useEffect(() => {
        showDropdown()
    }, [keyword]);


    return (
        <div className={styles.wrapper}>
            <input className={styles.input}
                   type="text"
                   value={keyword}
                   onChange={changeKeyword}
                   onKeyUp={handleDropdownKey}/>
            <span className={styles.icon} onClick={() => handleSearch()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="dimgray"
                     className="bi bi-search" viewBox="0 0 16 16">
                  <path
                      d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
            </span>
            {hasKeyword && (
                <ul>
                    {dropdown.length === 0 && (
                        <li>일치하는 포켓몬 이름이 없습니다.</li>
                    )}
                    {dropdown.map((item, idx) => {
                        return (
                            <li key={idx}
                                className={idx === dropdownIdx ? styles.active : ""}
                                onClick={() => clickDropdown(item)}
                                onMouseOver={() => setDropdownIdx(idx)}
                            >
                                {item.names.ko}
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}

export default Search;