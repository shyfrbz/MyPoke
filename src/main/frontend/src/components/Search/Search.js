import styles from "./Search.module.css"
import {useEffect, useState} from "react";
import allPokemonData from "../../data/allPokemonData";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

function Search() {
    const [keyword, setKeyword] = useState('');                 // 검색어
    const [hasKeyword, setHasKeyword] = useState(false);      // 검색창 입력 여부
    const [dropdown, setDropdown] = useState([]);               // 드롭다운 리스트
    const [dropdownIdx, setDropdownIdx] = useState(-1);       // 드롭다운 리스트 중 선택된 인덱스

    const navigate = useNavigate();
    const {i18n,t} = useTranslation();
    const lang = i18n.language.slice(0, 2);

    // 히라가나 → 가타카나 변환 함수
    const toKatakana = (str) => {
        return str.replace(/[\u3041-\u3096]/g, ch =>
            String.fromCharCode(ch.charCodeAt(0) + 0x60)
        );
    };

    // // 가타카나 → 히라가나 변환 함수
    // const toHiragana = (str) => {
    //     return str.replace(/[\u30A1-\u30F6]/g, ch =>
    //         String.fromCharCode(ch.charCodeAt(0) - 0x60)
    //     );
    // };

    // 자동완성 드롭다운 목록 출력
    const showDropdown = () => {
        let q = keyword.toLowerCase().trim();

        if (!q) {
            setHasKeyword(false);
            setDropdown([]);
            return;
        }

        const filteredList = allPokemonData.filter(p => {
                let name = (p.names?.[lang]).toLowerCase();

                // 일본어일 경우, 이름을 히라가나로 변환해서 비교
                if (lang === "ja") {
                    q = toKatakana(q);
                }

                const idMatch = p.id.toString().includes(q);
                return name.includes(q) || idMatch;
            }
        ).slice(0, 7);

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
        setKeyword(clickedItem.names[lang]);
        setHasKeyword(false);
        navigate(`/search/${clickedItem.names[lang]}`);
    }

    const handleSearch = (searchTerm = keyword) => {
        const q = searchTerm.trim();
        if (!q) return; // 빈값이면 실행하지 않음
        setHasKeyword(false); // 자동완성 닫기
        navigate(`/search/${q}`);
        setKeyword('')
    };

    // 자동완성 목록 중 키보드로 선택
    const handleDropdownKey = event => {
        if (hasKeyword) {
            // 아래 키 누르기 + 목록의 길이가 선택된 인덱스보다 클 때
            if (event.key === 'ArrowDown' && dropdown.length - 1 > dropdownIdx) {
                setDropdownIdx(dropdownIdx + 1);
            }

            // 위 키 누르기 + 선택된 인덱스가 0보다 크거나 같을 때
            if (event.key === 'ArrowUp' && dropdownIdx >= 0) {
                setDropdownIdx(dropdownIdx - 1);
            }

            // 엔터 누르기 + 선택된 인덱스가 0보다 크거나 같을 때
            if (event.key === "Enter") {
                if (dropdownIdx >= 0) {
                    const selected = dropdown[dropdownIdx];
                    setKeyword(selected.names[lang]);
                    handleSearch(selected.names[lang]);
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
                   placeholder={t('search.placeholder')}
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
                    {dropdown.map((item, idx) => {
                        return (
                            <li key={idx}
                                className={idx === dropdownIdx ? styles.active : ""}
                                onClick={() => clickDropdown(item)}
                                onMouseOver={() => setDropdownIdx(idx)}
                            >
                                #{item.id.toString().padStart(4,"0")}&ensp;{item.names[lang]}<img src={item.img.default} alt={item.names[lang]} width="45px"/>
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}

export default Search;