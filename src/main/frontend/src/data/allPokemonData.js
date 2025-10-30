const allPokemonData = [
    {
        "id": 1,
        "names": {
            "en": "bulbasaur",
            "ko": "이상해씨",
            "ja": "フシギダネ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        },
        "types": [
            "12",
            "4"
        ]
    },
    {
        "id": 2,
        "names": {
            "en": "ivysaur",
            "ko": "이상해풀",
            "ja": "フシギソウ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
        },
        "types": [
            "12",
            "4"
        ]
    },
    {
        "id": 3,
        "names": {
            "en": "venusaur",
            "ko": "이상해꽃",
            "ja": "フシギバナ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
        },
        "types": [
            "12",
            "4"
        ]
    },
    {
        "id": 4,
        "names": {
            "en": "charmander",
            "ko": "파이리",
            "ja": "ヒトカゲ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
        },
        "types": [
            "10"
        ]
    },
    {
        "id": 5,
        "names": {
            "en": "charmeleon",
            "ko": "리자드",
            "ja": "リザード"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png"
        },
        "types": [
            "10"
        ]
    },
    {
        "id": 6,
        "names": {
            "en": "charizard",
            "ko": "리자몽",
            "ja": "リザードン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
        },
        "types": [
            "10",
            "3"
        ]
    },
    {
        "id": 7,
        "names": {
            "en": "squirtle",
            "ko": "꼬부기",
            "ja": "ゼニガメ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 8,
        "names": {
            "en": "wartortle",
            "ko": "어니부기",
            "ja": "カメール"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 9,
        "names": {
            "en": "blastoise",
            "ko": "거북왕",
            "ja": "カメックス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 10,
        "names": {
            "en": "caterpie",
            "ko": "캐터피",
            "ja": "キャタピー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png"
        },
        "types": [
            "7"
        ]
    },
    {
        "id": 11,
        "names": {
            "en": "metapod",
            "ko": "단데기",
            "ja": "トランセル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png"
        },
        "types": [
            "7"
        ]
    },
    {
        "id": 12,
        "names": {
            "en": "butterfree",
            "ko": "버터플",
            "ja": "バタフリー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png"
        },
        "types": [
            "7",
            "3"
        ]
    },
    {
        "id": 13,
        "names": {
            "en": "weedle",
            "ko": "뿔충이",
            "ja": "ビードル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png"
        },
        "types": [
            "7",
            "4"
        ]
    },
    {
        "id": 14,
        "names": {
            "en": "kakuna",
            "ko": "딱충이",
            "ja": "コクーン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png"
        },
        "types": [
            "7",
            "4"
        ]
    },
    {
        "id": 15,
        "names": {
            "en": "beedrill",
            "ko": "독침붕",
            "ja": "スピアー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png"
        },
        "types": [
            "7",
            "4"
        ]
    },
    {
        "id": 16,
        "names": {
            "en": "pidgey",
            "ko": "구구",
            "ja": "ポッポ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png"
        },
        "types": [
            "1",
            "3"
        ]
    },
    {
        "id": 17,
        "names": {
            "en": "pidgeotto",
            "ko": "피죤",
            "ja": "ピジョン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png"
        },
        "types": [
            "1",
            "3"
        ]
    },
    {
        "id": 18,
        "names": {
            "en": "pidgeot",
            "ko": "피죤투",
            "ja": "ピジョット"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png"
        },
        "types": [
            "1",
            "3"
        ]
    },
    {
        "id": 19,
        "names": {
            "en": "rattata",
            "ko": "꼬렛",
            "ja": "コラッタ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 20,
        "names": {
            "en": "raticate",
            "ko": "레트라",
            "ja": "ラッタ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 21,
        "names": {
            "en": "spearow",
            "ko": "깨비참",
            "ja": "オニスズメ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png"
        },
        "types": [
            "1",
            "3"
        ]
    },
    {
        "id": 22,
        "names": {
            "en": "fearow",
            "ko": "깨비드릴조",
            "ja": "オニドリル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png"
        },
        "types": [
            "1",
            "3"
        ]
    },
    {
        "id": 23,
        "names": {
            "en": "ekans",
            "ko": "아보",
            "ja": "アーボ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png"
        },
        "types": [
            "4"
        ]
    },
    {
        "id": 24,
        "names": {
            "en": "arbok",
            "ko": "아보크",
            "ja": "アーボック"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png"
        },
        "types": [
            "4"
        ]
    },
    {
        "id": 25,
        "names": {
            "en": "pikachu",
            "ko": "피카츄",
            "ja": "ピカチュウ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
        },
        "types": [
            "13"
        ]
    },
    {
        "id": 26,
        "names": {
            "en": "raichu",
            "ko": "라이츄",
            "ja": "ライチュウ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png"
        },
        "types": [
            "13"
        ]
    },
    {
        "id": 27,
        "names": {
            "en": "sandshrew",
            "ko": "모래두지",
            "ja": "サンド"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png"
        },
        "types": [
            "5"
        ]
    },
    {
        "id": 28,
        "names": {
            "en": "sandslash",
            "ko": "고지",
            "ja": "サンドパン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png"
        },
        "types": [
            "5"
        ]
    },
    {
        "id": 29,
        "names": {
            "en": "nidoran-f",
            "ko": "니드런♀",
            "ja": "ニドラン♀"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png"
        },
        "types": [
            "4"
        ]
    },
    {
        "id": 30,
        "names": {
            "en": "nidorina",
            "ko": "니드리나",
            "ja": "ニドリーナ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png"
        },
        "types": [
            "4"
        ]
    },
    {
        "id": 31,
        "names": {
            "en": "nidoqueen",
            "ko": "니드퀸",
            "ja": "ニドクイン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png"
        },
        "types": [
            "4",
            "5"
        ]
    },
    {
        "id": 32,
        "names": {
            "en": "nidoran-m",
            "ko": "니드런♂",
            "ja": "ニドラン♂"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png"
        },
        "types": [
            "4"
        ]
    },
    {
        "id": 33,
        "names": {
            "en": "nidorino",
            "ko": "니드리노",
            "ja": "ニドリーノ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png"
        },
        "types": [
            "4"
        ]
    },
    {
        "id": 34,
        "names": {
            "en": "nidoking",
            "ko": "니드킹",
            "ja": "ニドキング"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png"
        },
        "types": [
            "4",
            "5"
        ]
    },
    {
        "id": 35,
        "names": {
            "en": "clefairy",
            "ko": "삐삐",
            "ja": "ピッピ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png"
        },
        "types": [
            "18"
        ]
    },
    {
        "id": 36,
        "names": {
            "en": "clefable",
            "ko": "픽시",
            "ja": "ピクシー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png"
        },
        "types": [
            "18"
        ]
    },
    {
        "id": 37,
        "names": {
            "en": "vulpix",
            "ko": "식스테일",
            "ja": "ロコン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png"
        },
        "types": [
            "10"
        ]
    },
    {
        "id": 38,
        "names": {
            "en": "ninetales",
            "ko": "나인테일",
            "ja": "キュウコン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png"
        },
        "types": [
            "10"
        ]
    },
    {
        "id": 39,
        "names": {
            "en": "jigglypuff",
            "ko": "푸린",
            "ja": "プリン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png"
        },
        "types": [
            "1",
            "18"
        ]
    },
    {
        "id": 40,
        "names": {
            "en": "wigglytuff",
            "ko": "푸크린",
            "ja": "プクリン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png"
        },
        "types": [
            "1",
            "18"
        ]
    },
    {
        "id": 41,
        "names": {
            "en": "zubat",
            "ko": "주뱃",
            "ja": "ズバット"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png"
        },
        "types": [
            "4",
            "3"
        ]
    },
    {
        "id": 42,
        "names": {
            "en": "golbat",
            "ko": "골뱃",
            "ja": "ゴルバット"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png"
        },
        "types": [
            "4",
            "3"
        ]
    },
    {
        "id": 43,
        "names": {
            "en": "oddish",
            "ko": "뚜벅쵸",
            "ja": "ナゾノクサ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png"
        },
        "types": [
            "12",
            "4"
        ]
    },
    {
        "id": 44,
        "names": {
            "en": "gloom",
            "ko": "냄새꼬",
            "ja": "クサイハナ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png"
        },
        "types": [
            "12",
            "4"
        ]
    },
    {
        "id": 45,
        "names": {
            "en": "vileplume",
            "ko": "라플레시아",
            "ja": "ラフレシア"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png"
        },
        "types": [
            "12",
            "4"
        ]
    },
    {
        "id": 46,
        "names": {
            "en": "paras",
            "ko": "파라스",
            "ja": "パラス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png"
        },
        "types": [
            "7",
            "12"
        ]
    },
    {
        "id": 47,
        "names": {
            "en": "parasect",
            "ko": "파라섹트",
            "ja": "パラセクト"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png"
        },
        "types": [
            "7",
            "12"
        ]
    },
    {
        "id": 48,
        "names": {
            "en": "venonat",
            "ko": "콘팡",
            "ja": "コンパン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png"
        },
        "types": [
            "7",
            "4"
        ]
    },
    {
        "id": 49,
        "names": {
            "en": "venomoth",
            "ko": "도나리",
            "ja": "モルフォン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png"
        },
        "types": [
            "7",
            "4"
        ]
    },
    {
        "id": 50,
        "names": {
            "en": "diglett",
            "ko": "디그다",
            "ja": "ディグダ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png"
        },
        "types": [
            "5"
        ]
    },
    {
        "id": 51,
        "names": {
            "en": "dugtrio",
            "ko": "닥트리오",
            "ja": "ダグトリオ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png"
        },
        "types": [
            "5"
        ]
    },
    {
        "id": 52,
        "names": {
            "en": "meowth",
            "ko": "나옹",
            "ja": "ニャース"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 53,
        "names": {
            "en": "persian",
            "ko": "페르시온",
            "ja": "ペルシアン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 54,
        "names": {
            "en": "psyduck",
            "ko": "고라파덕",
            "ja": "コダック"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 55,
        "names": {
            "en": "golduck",
            "ko": "골덕",
            "ja": "ゴルダック"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 56,
        "names": {
            "en": "mankey",
            "ko": "망키",
            "ja": "マンキー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png"
        },
        "types": [
            "2"
        ]
    },
    {
        "id": 57,
        "names": {
            "en": "primeape",
            "ko": "성원숭",
            "ja": "オコリザル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png"
        },
        "types": [
            "2"
        ]
    },
    {
        "id": 58,
        "names": {
            "en": "growlithe",
            "ko": "가디",
            "ja": "ガーディ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png"
        },
        "types": [
            "10"
        ]
    },
    {
        "id": 59,
        "names": {
            "en": "arcanine",
            "ko": "윈디",
            "ja": "ウインディ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png"
        },
        "types": [
            "10"
        ]
    },
    {
        "id": 60,
        "names": {
            "en": "poliwag",
            "ko": "발챙이",
            "ja": "ニョロモ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 61,
        "names": {
            "en": "poliwhirl",
            "ko": "슈륙챙이",
            "ja": "ニョロゾ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 62,
        "names": {
            "en": "poliwrath",
            "ko": "강챙이",
            "ja": "ニョロボン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png"
        },
        "types": [
            "11",
            "2"
        ]
    },
    {
        "id": 63,
        "names": {
            "en": "abra",
            "ko": "캐이시",
            "ja": "ケーシィ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png"
        },
        "types": [
            "14"
        ]
    },
    {
        "id": 64,
        "names": {
            "en": "kadabra",
            "ko": "윤겔라",
            "ja": "ユンゲラー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png"
        },
        "types": [
            "14"
        ]
    },
    {
        "id": 65,
        "names": {
            "en": "alakazam",
            "ko": "후딘",
            "ja": "フーディン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png"
        },
        "types": [
            "14"
        ]
    },
    {
        "id": 66,
        "names": {
            "en": "machop",
            "ko": "알통몬",
            "ja": "ワンリキー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png"
        },
        "types": [
            "2"
        ]
    },
    {
        "id": 67,
        "names": {
            "en": "machoke",
            "ko": "근육몬",
            "ja": "ゴーリキー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png"
        },
        "types": [
            "2"
        ]
    },
    {
        "id": 68,
        "names": {
            "en": "machamp",
            "ko": "괴력몬",
            "ja": "カイリキー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png"
        },
        "types": [
            "2"
        ]
    },
    {
        "id": 69,
        "names": {
            "en": "bellsprout",
            "ko": "모다피",
            "ja": "マダツボミ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png"
        },
        "types": [
            "12",
            "4"
        ]
    },
    {
        "id": 70,
        "names": {
            "en": "weepinbell",
            "ko": "우츠동",
            "ja": "ウツドン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png"
        },
        "types": [
            "12",
            "4"
        ]
    },
    {
        "id": 71,
        "names": {
            "en": "victreebel",
            "ko": "우츠보트",
            "ja": "ウツボット"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png"
        },
        "types": [
            "12",
            "4"
        ]
    },
    {
        "id": 72,
        "names": {
            "en": "tentacool",
            "ko": "왕눈해",
            "ja": "メノクラゲ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png"
        },
        "types": [
            "11",
            "4"
        ]
    },
    {
        "id": 73,
        "names": {
            "en": "tentacruel",
            "ko": "독파리",
            "ja": "ドククラゲ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png"
        },
        "types": [
            "11",
            "4"
        ]
    },
    {
        "id": 74,
        "names": {
            "en": "geodude",
            "ko": "꼬마돌",
            "ja": "イシツブテ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png"
        },
        "types": [
            "6",
            "5"
        ]
    },
    {
        "id": 75,
        "names": {
            "en": "graveler",
            "ko": "데구리",
            "ja": "ゴローン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png"
        },
        "types": [
            "6",
            "5"
        ]
    },
    {
        "id": 76,
        "names": {
            "en": "golem",
            "ko": "딱구리",
            "ja": "ゴローニャ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png"
        },
        "types": [
            "6",
            "5"
        ]
    },
    {
        "id": 77,
        "names": {
            "en": "ponyta",
            "ko": "포니타",
            "ja": "ポニータ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png"
        },
        "types": [
            "10"
        ]
    },
    {
        "id": 78,
        "names": {
            "en": "rapidash",
            "ko": "날쌩마",
            "ja": "ギャロップ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png"
        },
        "types": [
            "10"
        ]
    },
    {
        "id": 79,
        "names": {
            "en": "slowpoke",
            "ko": "야돈",
            "ja": "ヤドン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png"
        },
        "types": [
            "11",
            "14"
        ]
    },
    {
        "id": 80,
        "names": {
            "en": "slowbro",
            "ko": "야도란",
            "ja": "ヤドラン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png"
        },
        "types": [
            "11",
            "14"
        ]
    },
    {
        "id": 81,
        "names": {
            "en": "magnemite",
            "ko": "코일",
            "ja": "コイル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png"
        },
        "types": [
            "13",
            "9"
        ]
    },
    {
        "id": 82,
        "names": {
            "en": "magneton",
            "ko": "레어코일",
            "ja": "レアコイル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png"
        },
        "types": [
            "13",
            "9"
        ]
    },
    {
        "id": 83,
        "names": {
            "en": "farfetchd",
            "ko": "파오리",
            "ja": "カモネギ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png"
        },
        "types": [
            "1",
            "3"
        ]
    },
    {
        "id": 84,
        "names": {
            "en": "doduo",
            "ko": "두두",
            "ja": "ドードー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png"
        },
        "types": [
            "1",
            "3"
        ]
    },
    {
        "id": 85,
        "names": {
            "en": "dodrio",
            "ko": "두트리오",
            "ja": "ドードリオ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png"
        },
        "types": [
            "1",
            "3"
        ]
    },
    {
        "id": 86,
        "names": {
            "en": "seel",
            "ko": "쥬쥬",
            "ja": "パウワウ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 87,
        "names": {
            "en": "dewgong",
            "ko": "쥬레곤",
            "ja": "ジュゴン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png"
        },
        "types": [
            "11",
            "15"
        ]
    },
    {
        "id": 88,
        "names": {
            "en": "grimer",
            "ko": "질퍽이",
            "ja": "ベトベター"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png"
        },
        "types": [
            "4"
        ]
    },
    {
        "id": 89,
        "names": {
            "en": "muk",
            "ko": "질뻐기",
            "ja": "ベトベトン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png"
        },
        "types": [
            "4"
        ]
    },
    {
        "id": 90,
        "names": {
            "en": "shellder",
            "ko": "셀러",
            "ja": "シェルダー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 91,
        "names": {
            "en": "cloyster",
            "ko": "파르셀",
            "ja": "パルシェン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png"
        },
        "types": [
            "11",
            "15"
        ]
    },
    {
        "id": 92,
        "names": {
            "en": "gastly",
            "ko": "고오스",
            "ja": "ゴース"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png"
        },
        "types": [
            "8",
            "4"
        ]
    },
    {
        "id": 93,
        "names": {
            "en": "haunter",
            "ko": "고우스트",
            "ja": "ゴースト"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png"
        },
        "types": [
            "8",
            "4"
        ]
    },
    {
        "id": 94,
        "names": {
            "en": "gengar",
            "ko": "팬텀",
            "ja": "ゲンガー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png"
        },
        "types": [
            "8",
            "4"
        ]
    },
    {
        "id": 95,
        "names": {
            "en": "onix",
            "ko": "롱스톤",
            "ja": "イワーク"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png"
        },
        "types": [
            "6",
            "5"
        ]
    },
    {
        "id": 96,
        "names": {
            "en": "drowzee",
            "ko": "슬리프",
            "ja": "スリープ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png"
        },
        "types": [
            "14"
        ]
    },
    {
        "id": 97,
        "names": {
            "en": "hypno",
            "ko": "슬리퍼",
            "ja": "スリーパー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png"
        },
        "types": [
            "14"
        ]
    },
    {
        "id": 98,
        "names": {
            "en": "krabby",
            "ko": "크랩",
            "ja": "クラブ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 99,
        "names": {
            "en": "kingler",
            "ko": "킹크랩",
            "ja": "キングラー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 100,
        "names": {
            "en": "voltorb",
            "ko": "찌리리공",
            "ja": "ビリリダマ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png"
        },
        "types": [
            "13"
        ]
    },
    {
        "id": 101,
        "names": {
            "en": "electrode",
            "ko": "붐볼",
            "ja": "マルマイン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png"
        },
        "types": [
            "13"
        ]
    },
    {
        "id": 102,
        "names": {
            "en": "exeggcute",
            "ko": "아라리",
            "ja": "タマタマ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png"
        },
        "types": [
            "12",
            "14"
        ]
    },
    {
        "id": 103,
        "names": {
            "en": "exeggutor",
            "ko": "나시",
            "ja": "ナッシー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png"
        },
        "types": [
            "12",
            "14"
        ]
    },
    {
        "id": 104,
        "names": {
            "en": "cubone",
            "ko": "탕구리",
            "ja": "カラカラ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png"
        },
        "types": [
            "5"
        ]
    },
    {
        "id": 105,
        "names": {
            "en": "marowak",
            "ko": "텅구리",
            "ja": "ガラガラ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png"
        },
        "types": [
            "5"
        ]
    },
    {
        "id": 106,
        "names": {
            "en": "hitmonlee",
            "ko": "시라소몬",
            "ja": "サワムラー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png"
        },
        "types": [
            "2"
        ]
    },
    {
        "id": 107,
        "names": {
            "en": "hitmonchan",
            "ko": "홍수몬",
            "ja": "エビワラー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png"
        },
        "types": [
            "2"
        ]
    },
    {
        "id": 108,
        "names": {
            "en": "lickitung",
            "ko": "내루미",
            "ja": "ベロリンガ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 109,
        "names": {
            "en": "koffing",
            "ko": "또가스",
            "ja": "ドガース"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png"
        },
        "types": [
            "4"
        ]
    },
    {
        "id": 110,
        "names": {
            "en": "weezing",
            "ko": "또도가스",
            "ja": "マタドガス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png"
        },
        "types": [
            "4"
        ]
    },
    {
        "id": 111,
        "names": {
            "en": "rhyhorn",
            "ko": "뿔카노",
            "ja": "サイホーン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png"
        },
        "types": [
            "5",
            "6"
        ]
    },
    {
        "id": 112,
        "names": {
            "en": "rhydon",
            "ko": "코뿌리",
            "ja": "サイドン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png"
        },
        "types": [
            "5",
            "6"
        ]
    },
    {
        "id": 113,
        "names": {
            "en": "chansey",
            "ko": "럭키",
            "ja": "ラッキー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 114,
        "names": {
            "en": "tangela",
            "ko": "덩쿠리",
            "ja": "モンジャラ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 115,
        "names": {
            "en": "kangaskhan",
            "ko": "캥카",
            "ja": "ガルーラ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 116,
        "names": {
            "en": "horsea",
            "ko": "쏘드라",
            "ja": "タッツー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 117,
        "names": {
            "en": "seadra",
            "ko": "시드라",
            "ja": "シードラ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 118,
        "names": {
            "en": "goldeen",
            "ko": "콘치",
            "ja": "トサキント"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 119,
        "names": {
            "en": "seaking",
            "ko": "왕콘치",
            "ja": "アズマオウ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 120,
        "names": {
            "en": "staryu",
            "ko": "별가사리",
            "ja": "ヒトデマン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 121,
        "names": {
            "en": "starmie",
            "ko": "아쿠스타",
            "ja": "スターミー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png"
        },
        "types": [
            "11",
            "14"
        ]
    },
    {
        "id": 122,
        "names": {
            "en": "mr-mime",
            "ko": "마임맨",
            "ja": "バリヤード"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png"
        },
        "types": [
            "14",
            "18"
        ]
    },
    {
        "id": 123,
        "names": {
            "en": "scyther",
            "ko": "스라크",
            "ja": "ストライク"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png"
        },
        "types": [
            "7",
            "3"
        ]
    },
    {
        "id": 124,
        "names": {
            "en": "jynx",
            "ko": "루주라",
            "ja": "ルージュラ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png"
        },
        "types": [
            "15",
            "14"
        ]
    },
    {
        "id": 125,
        "names": {
            "en": "electabuzz",
            "ko": "에레브",
            "ja": "エレブー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png"
        },
        "types": [
            "13"
        ]
    },
    {
        "id": 126,
        "names": {
            "en": "magmar",
            "ko": "마그마",
            "ja": "ブーバー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png"
        },
        "types": [
            "10"
        ]
    },
    {
        "id": 127,
        "names": {
            "en": "pinsir",
            "ko": "쁘사이저",
            "ja": "カイロス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png"
        },
        "types": [
            "7"
        ]
    },
    {
        "id": 128,
        "names": {
            "en": "tauros",
            "ko": "켄타로스",
            "ja": "ケンタロス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 129,
        "names": {
            "en": "magikarp",
            "ko": "잉어킹",
            "ja": "コイキング"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 130,
        "names": {
            "en": "gyarados",
            "ko": "갸라도스",
            "ja": "ギャラドス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png"
        },
        "types": [
            "11",
            "3"
        ]
    },
    {
        "id": 131,
        "names": {
            "en": "lapras",
            "ko": "라프라스",
            "ja": "ラプラス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png"
        },
        "types": [
            "11",
            "15"
        ]
    },
    {
        "id": 132,
        "names": {
            "en": "ditto",
            "ko": "메타몽",
            "ja": "メタモン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 133,
        "names": {
            "en": "eevee",
            "ko": "이브이",
            "ja": "イーブイ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 134,
        "names": {
            "en": "vaporeon",
            "ko": "샤미드",
            "ja": "シャワーズ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 135,
        "names": {
            "en": "jolteon",
            "ko": "쥬피썬더",
            "ja": "サンダース"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png"
        },
        "types": [
            "13"
        ]
    },
    {
        "id": 136,
        "names": {
            "en": "flareon",
            "ko": "부스터",
            "ja": "ブースター"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png"
        },
        "types": [
            "10"
        ]
    },
    {
        "id": 137,
        "names": {
            "en": "porygon",
            "ko": "폴리곤",
            "ja": "ポリゴン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 138,
        "names": {
            "en": "omanyte",
            "ko": "암나이트",
            "ja": "オムナイト"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/138.png"
        },
        "types": [
            "6",
            "11"
        ]
    },
    {
        "id": 139,
        "names": {
            "en": "omastar",
            "ko": "암스타",
            "ja": "オムスター"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png"
        },
        "types": [
            "6",
            "11"
        ]
    },
    {
        "id": 140,
        "names": {
            "en": "kabuto",
            "ko": "투구",
            "ja": "カブト"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png"
        },
        "types": [
            "6",
            "11"
        ]
    },
    {
        "id": 141,
        "names": {
            "en": "kabutops",
            "ko": "투구푸스",
            "ja": "カブトプス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png"
        },
        "types": [
            "6",
            "11"
        ]
    },
    {
        "id": 142,
        "names": {
            "en": "aerodactyl",
            "ko": "프테라",
            "ja": "プテラ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png"
        },
        "types": [
            "6",
            "3"
        ]
    },
    {
        "id": 143,
        "names": {
            "en": "snorlax",
            "ko": "잠만보",
            "ja": "カビゴン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 144,
        "names": {
            "en": "articuno",
            "ko": "프리져",
            "ja": "フリーザー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png"
        },
        "types": [
            "15",
            "3"
        ]
    },
    {
        "id": 145,
        "names": {
            "en": "zapdos",
            "ko": "썬더",
            "ja": "サンダー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png"
        },
        "types": [
            "13",
            "3"
        ]
    },
    {
        "id": 146,
        "names": {
            "en": "moltres",
            "ko": "파이어",
            "ja": "ファイヤー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png"
        },
        "types": [
            "10",
            "3"
        ]
    },
    {
        "id": 147,
        "names": {
            "en": "dratini",
            "ko": "미뇽",
            "ja": "ミニリュウ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png"
        },
        "types": [
            "16"
        ]
    },
    {
        "id": 148,
        "names": {
            "en": "dragonair",
            "ko": "신뇽",
            "ja": "ハクリュー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png"
        },
        "types": [
            "16"
        ]
    },
    {
        "id": 149,
        "names": {
            "en": "dragonite",
            "ko": "망나뇽",
            "ja": "カイリュー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png"
        },
        "types": [
            "16",
            "3"
        ]
    },
    {
        "id": 150,
        "names": {
            "en": "mewtwo",
            "ko": "뮤츠",
            "ja": "ミュウツー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
        },
        "types": [
            "14"
        ]
    },
    {
        "id": 151,
        "names": {
            "en": "mew",
            "ko": "뮤",
            "ja": "ミュウ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png"
        },
        "types": [
            "14"
        ]
    },
    {
        "id": 152,
        "names": {
            "en": "chikorita",
            "ko": "치코리타",
            "ja": "チコリータ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 153,
        "names": {
            "en": "bayleef",
            "ko": "베이리프",
            "ja": "ベイリーフ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/153.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/153.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 154,
        "names": {
            "en": "meganium",
            "ko": "메가니움",
            "ja": "メガニウム"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/154.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 155,
        "names": {
            "en": "cyndaquil",
            "ko": "브케인",
            "ja": "ヒノアラシ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/155.png"
        },
        "types": [
            "10"
        ]
    },
    {
        "id": 156,
        "names": {
            "en": "quilava",
            "ko": "마그케인",
            "ja": "マグマラシ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/156.png"
        },
        "types": [
            "10"
        ]
    },
    {
        "id": 157,
        "names": {
            "en": "typhlosion",
            "ko": "블레이범",
            "ja": "バクフーン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/157.png"
        },
        "types": [
            "10"
        ]
    },
    {
        "id": 158,
        "names": {
            "en": "totodile",
            "ko": "리아코",
            "ja": "ワニノコ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/158.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 159,
        "names": {
            "en": "croconaw",
            "ko": "엘리게이",
            "ja": "アリゲイツ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/159.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/159.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 160,
        "names": {
            "en": "feraligatr",
            "ko": "장크로다일",
            "ja": "オーダイル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/160.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 161,
        "names": {
            "en": "sentret",
            "ko": "꼬리선",
            "ja": "オタチ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/161.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/161.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 162,
        "names": {
            "en": "furret",
            "ko": "다꼬리",
            "ja": "オオタチ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/162.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/162.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 163,
        "names": {
            "en": "hoothoot",
            "ko": "부우부",
            "ja": "ホーホー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/163.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/163.png"
        },
        "types": [
            "1",
            "3"
        ]
    },
    {
        "id": 164,
        "names": {
            "en": "noctowl",
            "ko": "야부엉",
            "ja": "ヨルノズク"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/164.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/164.png"
        },
        "types": [
            "1",
            "3"
        ]
    },
    {
        "id": 165,
        "names": {
            "en": "ledyba",
            "ko": "레디바",
            "ja": "レディバ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/165.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/165.png"
        },
        "types": [
            "7",
            "3"
        ]
    },
    {
        "id": 166,
        "names": {
            "en": "ledian",
            "ko": "레디안",
            "ja": "レディアン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/166.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/166.png"
        },
        "types": [
            "7",
            "3"
        ]
    },
    {
        "id": 167,
        "names": {
            "en": "spinarak",
            "ko": "페이검",
            "ja": "イトマル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/167.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/167.png"
        },
        "types": [
            "7",
            "4"
        ]
    },
    {
        "id": 168,
        "names": {
            "en": "ariados",
            "ko": "아리아도스",
            "ja": "アリアドス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/168.png"
        },
        "types": [
            "7",
            "4"
        ]
    },
    {
        "id": 169,
        "names": {
            "en": "crobat",
            "ko": "크로뱃",
            "ja": "クロバット"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/169.png"
        },
        "types": [
            "4",
            "3"
        ]
    },
    {
        "id": 170,
        "names": {
            "en": "chinchou",
            "ko": "초라기",
            "ja": "チョンチー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/170.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/170.png"
        },
        "types": [
            "11",
            "13"
        ]
    },
    {
        "id": 171,
        "names": {
            "en": "lanturn",
            "ko": "랜턴",
            "ja": "ランターン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/171.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/171.png"
        },
        "types": [
            "11",
            "13"
        ]
    },
    {
        "id": 172,
        "names": {
            "en": "pichu",
            "ko": "피츄",
            "ja": "ピチュー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png"
        },
        "types": [
            "13"
        ]
    },
    {
        "id": 173,
        "names": {
            "en": "cleffa",
            "ko": "삐",
            "ja": "ピィ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/173.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/173.png"
        },
        "types": [
            "18"
        ]
    },
    {
        "id": 174,
        "names": {
            "en": "igglybuff",
            "ko": "푸푸린",
            "ja": "ププリン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/174.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/174.png"
        },
        "types": [
            "1",
            "18"
        ]
    },
    {
        "id": 175,
        "names": {
            "en": "togepi",
            "ko": "토게피",
            "ja": "トゲピー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/175.png"
        },
        "types": [
            "18"
        ]
    },
    {
        "id": 176,
        "names": {
            "en": "togetic",
            "ko": "토게틱",
            "ja": "トゲチック"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/176.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/176.png"
        },
        "types": [
            "18",
            "3"
        ]
    },
    {
        "id": 177,
        "names": {
            "en": "natu",
            "ko": "네이티",
            "ja": "ネイティ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/177.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/177.png"
        },
        "types": [
            "14",
            "3"
        ]
    },
    {
        "id": 178,
        "names": {
            "en": "xatu",
            "ko": "네이티오",
            "ja": "ネイティオ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/178.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/178.png"
        },
        "types": [
            "14",
            "3"
        ]
    },
    {
        "id": 179,
        "names": {
            "en": "mareep",
            "ko": "메리프",
            "ja": "メリープ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/179.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/179.png"
        },
        "types": [
            "13"
        ]
    },
    {
        "id": 180,
        "names": {
            "en": "flaaffy",
            "ko": "보송송",
            "ja": "モココ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/180.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/180.png"
        },
        "types": [
            "13"
        ]
    },
    {
        "id": 181,
        "names": {
            "en": "ampharos",
            "ko": "전룡",
            "ja": "デンリュウ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/181.png"
        },
        "types": [
            "13"
        ]
    },
    {
        "id": 182,
        "names": {
            "en": "bellossom",
            "ko": "아르코",
            "ja": "キレイハナ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/182.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/182.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 183,
        "names": {
            "en": "marill",
            "ko": "마릴",
            "ja": "マリル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/183.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/183.png"
        },
        "types": [
            "11",
            "18"
        ]
    },
    {
        "id": 184,
        "names": {
            "en": "azumarill",
            "ko": "마릴리",
            "ja": "マリルリ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/184.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/184.png"
        },
        "types": [
            "11",
            "18"
        ]
    },
    {
        "id": 185,
        "names": {
            "en": "sudowoodo",
            "ko": "꼬지모",
            "ja": "ウソッキー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/185.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/185.png"
        },
        "types": [
            "6"
        ]
    },
    {
        "id": 186,
        "names": {
            "en": "politoed",
            "ko": "왕구리",
            "ja": "ニョロトノ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/186.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/186.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 187,
        "names": {
            "en": "hoppip",
            "ko": "통통코",
            "ja": "ハネッコ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/187.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/187.png"
        },
        "types": [
            "12",
            "3"
        ]
    },
    {
        "id": 188,
        "names": {
            "en": "skiploom",
            "ko": "두코",
            "ja": "ポポッコ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/188.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/188.png"
        },
        "types": [
            "12",
            "3"
        ]
    },
    {
        "id": 189,
        "names": {
            "en": "jumpluff",
            "ko": "솜솜코",
            "ja": "ワタッコ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/189.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/189.png"
        },
        "types": [
            "12",
            "3"
        ]
    },
    {
        "id": 190,
        "names": {
            "en": "aipom",
            "ko": "에이팜",
            "ja": "エイパム"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/190.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/190.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 191,
        "names": {
            "en": "sunkern",
            "ko": "해너츠",
            "ja": "ヒマナッツ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/191.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/191.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 192,
        "names": {
            "en": "sunflora",
            "ko": "해루미",
            "ja": "キマワリ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/192.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/192.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 193,
        "names": {
            "en": "yanma",
            "ko": "왕자리",
            "ja": "ヤンヤンマ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/193.png"
        },
        "types": [
            "7",
            "3"
        ]
    },
    {
        "id": 194,
        "names": {
            "en": "wooper",
            "ko": "우파",
            "ja": "ウパー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/194.png"
        },
        "types": [
            "11",
            "5"
        ]
    },
    {
        "id": 195,
        "names": {
            "en": "quagsire",
            "ko": "누오",
            "ja": "ヌオー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/195.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/195.png"
        },
        "types": [
            "11",
            "5"
        ]
    },
    {
        "id": 196,
        "names": {
            "en": "espeon",
            "ko": "에브이",
            "ja": "エーフィ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/196.png"
        },
        "types": [
            "14"
        ]
    },
    {
        "id": 197,
        "names": {
            "en": "umbreon",
            "ko": "블래키",
            "ja": "ブラッキー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png"
        },
        "types": [
            "17"
        ]
    },
    {
        "id": 198,
        "names": {
            "en": "murkrow",
            "ko": "니로우",
            "ja": "ヤミカラス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/198.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/198.png"
        },
        "types": [
            "17",
            "3"
        ]
    },
    {
        "id": 199,
        "names": {
            "en": "slowking",
            "ko": "야도킹",
            "ja": "ヤドキング"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/199.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/199.png"
        },
        "types": [
            "11",
            "14"
        ]
    },
    {
        "id": 200,
        "names": {
            "en": "misdreavus",
            "ko": "무우마",
            "ja": "ムウマ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/200.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/200.png"
        },
        "types": [
            "8"
        ]
    },
    {
        "id": 201,
        "names": {
            "en": "unown",
            "ko": "안농",
            "ja": "アンノーン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/201.png"
        },
        "types": [
            "14"
        ]
    },
    {
        "id": 202,
        "names": {
            "en": "wobbuffet",
            "ko": "마자용",
            "ja": "ソーナンス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/202.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/202.png"
        },
        "types": [
            "14"
        ]
    },
    {
        "id": 203,
        "names": {
            "en": "girafarig",
            "ko": "키링키",
            "ja": "キリンリキ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/203.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/203.png"
        },
        "types": [
            "1",
            "14"
        ]
    },
    {
        "id": 204,
        "names": {
            "en": "pineco",
            "ko": "피콘",
            "ja": "クヌギダマ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/204.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/204.png"
        },
        "types": [
            "7"
        ]
    },
    {
        "id": 205,
        "names": {
            "en": "forretress",
            "ko": "쏘콘",
            "ja": "フォレトス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/205.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/205.png"
        },
        "types": [
            "7",
            "9"
        ]
    },
    {
        "id": 206,
        "names": {
            "en": "dunsparce",
            "ko": "노고치",
            "ja": "ノコッチ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/206.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/206.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 207,
        "names": {
            "en": "gligar",
            "ko": "글라이거",
            "ja": "グライガー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/207.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/207.png"
        },
        "types": [
            "5",
            "3"
        ]
    },
    {
        "id": 208,
        "names": {
            "en": "steelix",
            "ko": "강철톤",
            "ja": "ハガネール"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/208.png"
        },
        "types": [
            "9",
            "5"
        ]
    },
    {
        "id": 209,
        "names": {
            "en": "snubbull",
            "ko": "블루",
            "ja": "ブルー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/209.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/209.png"
        },
        "types": [
            "18"
        ]
    },
    {
        "id": 210,
        "names": {
            "en": "granbull",
            "ko": "그랑블루",
            "ja": "グランブル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/210.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/210.png"
        },
        "types": [
            "18"
        ]
    },
    {
        "id": 211,
        "names": {
            "en": "qwilfish",
            "ko": "침바루",
            "ja": "ハリーセン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/211.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/211.png"
        },
        "types": [
            "11",
            "4"
        ]
    },
    {
        "id": 212,
        "names": {
            "en": "scizor",
            "ko": "핫삼",
            "ja": "ハッサム"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/212.png"
        },
        "types": [
            "7",
            "9"
        ]
    },
    {
        "id": 213,
        "names": {
            "en": "shuckle",
            "ko": "단단지",
            "ja": "ツボツボ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/213.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/213.png"
        },
        "types": [
            "7",
            "6"
        ]
    },
    {
        "id": 214,
        "names": {
            "en": "heracross",
            "ko": "헤라크로스",
            "ja": "ヘラクロス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/214.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/214.png"
        },
        "types": [
            "7",
            "2"
        ]
    },
    {
        "id": 215,
        "names": {
            "en": "sneasel",
            "ko": "포푸니",
            "ja": "ニューラ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/215.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/215.png"
        },
        "types": [
            "17",
            "15"
        ]
    },
    {
        "id": 216,
        "names": {
            "en": "teddiursa",
            "ko": "깜지곰",
            "ja": "ヒメグマ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/216.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/216.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 217,
        "names": {
            "en": "ursaring",
            "ko": "링곰",
            "ja": "リングマ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/217.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/217.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 218,
        "names": {
            "en": "slugma",
            "ko": "마그마그",
            "ja": "マグマッグ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/218.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/218.png"
        },
        "types": [
            "10"
        ]
    },
    {
        "id": 219,
        "names": {
            "en": "magcargo",
            "ko": "마그카르고",
            "ja": "マグカルゴ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/219.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/219.png"
        },
        "types": [
            "10",
            "6"
        ]
    },
    {
        "id": 220,
        "names": {
            "en": "swinub",
            "ko": "꾸꾸리",
            "ja": "ウリムー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/220.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/220.png"
        },
        "types": [
            "15",
            "5"
        ]
    },
    {
        "id": 221,
        "names": {
            "en": "piloswine",
            "ko": "메꾸리",
            "ja": "イノムー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/221.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/221.png"
        },
        "types": [
            "15",
            "5"
        ]
    },
    {
        "id": 222,
        "names": {
            "en": "corsola",
            "ko": "코산호",
            "ja": "サニーゴ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/222.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/222.png"
        },
        "types": [
            "11",
            "6"
        ]
    },
    {
        "id": 223,
        "names": {
            "en": "remoraid",
            "ko": "총어",
            "ja": "テッポウオ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/223.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/223.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 224,
        "names": {
            "en": "octillery",
            "ko": "대포무노",
            "ja": "オクタン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/224.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/224.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 225,
        "names": {
            "en": "delibird",
            "ko": "딜리버드",
            "ja": "デリバード"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/225.png"
        },
        "types": [
            "15",
            "3"
        ]
    },
    {
        "id": 226,
        "names": {
            "en": "mantine",
            "ko": "만타인",
            "ja": "マンタイン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/226.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/226.png"
        },
        "types": [
            "11",
            "3"
        ]
    },
    {
        "id": 227,
        "names": {
            "en": "skarmory",
            "ko": "무장조",
            "ja": "エアームド"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/227.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/227.png"
        },
        "types": [
            "9",
            "3"
        ]
    },
    {
        "id": 228,
        "names": {
            "en": "houndour",
            "ko": "델빌",
            "ja": "デルビル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/228.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/228.png"
        },
        "types": [
            "17",
            "10"
        ]
    },
    {
        "id": 229,
        "names": {
            "en": "houndoom",
            "ko": "헬가",
            "ja": "ヘルガー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/229.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/229.png"
        },
        "types": [
            "17",
            "10"
        ]
    },
    {
        "id": 230,
        "names": {
            "en": "kingdra",
            "ko": "킹드라",
            "ja": "キングドラ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/230.png"
        },
        "types": [
            "11",
            "16"
        ]
    },
    {
        "id": 231,
        "names": {
            "en": "phanpy",
            "ko": "코코리",
            "ja": "ゴマゾウ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/231.png"
        },
        "types": [
            "5"
        ]
    },
    {
        "id": 232,
        "names": {
            "en": "donphan",
            "ko": "코리갑",
            "ja": "ドンファン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/232.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/232.png"
        },
        "types": [
            "5"
        ]
    },
    {
        "id": 233,
        "names": {
            "en": "porygon2",
            "ko": "폴리곤2",
            "ja": "ポリゴン２"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/233.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/233.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 234,
        "names": {
            "en": "stantler",
            "ko": "노라키",
            "ja": "オドシシ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/234.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/234.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 235,
        "names": {
            "en": "smeargle",
            "ko": "루브도",
            "ja": "ドーブル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/235.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/235.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 236,
        "names": {
            "en": "tyrogue",
            "ko": "배루키",
            "ja": "バルキー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/236.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/236.png"
        },
        "types": [
            "2"
        ]
    },
    {
        "id": 237,
        "names": {
            "en": "hitmontop",
            "ko": "카포에라",
            "ja": "カポエラー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/237.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/237.png"
        },
        "types": [
            "2"
        ]
    },
    {
        "id": 238,
        "names": {
            "en": "smoochum",
            "ko": "뽀뽀라",
            "ja": "ムチュール"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/238.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/238.png"
        },
        "types": [
            "15",
            "14"
        ]
    },
    {
        "id": 239,
        "names": {
            "en": "elekid",
            "ko": "에레키드",
            "ja": "エレキッド"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/239.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/239.png"
        },
        "types": [
            "13"
        ]
    },
    {
        "id": 240,
        "names": {
            "en": "magby",
            "ko": "마그비",
            "ja": "ブビィ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/240.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/240.png"
        },
        "types": [
            "10"
        ]
    },
    {
        "id": 241,
        "names": {
            "en": "miltank",
            "ko": "밀탱크",
            "ja": "ミルタンク"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/241.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 242,
        "names": {
            "en": "blissey",
            "ko": "해피너스",
            "ja": "ハピナス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/242.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/242.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 243,
        "names": {
            "en": "raikou",
            "ko": "라이코",
            "ja": "ライコウ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/243.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/243.png"
        },
        "types": [
            "13"
        ]
    },
    {
        "id": 244,
        "names": {
            "en": "entei",
            "ko": "앤테이",
            "ja": "エンテイ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/244.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/244.png"
        },
        "types": [
            "10"
        ]
    },
    {
        "id": 245,
        "names": {
            "en": "suicune",
            "ko": "스이쿤",
            "ja": "スイクン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/245.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 246,
        "names": {
            "en": "larvitar",
            "ko": "애버라스",
            "ja": "ヨーギラス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/246.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/246.png"
        },
        "types": [
            "6",
            "5"
        ]
    },
    {
        "id": 247,
        "names": {
            "en": "pupitar",
            "ko": "데기라스",
            "ja": "サナギラス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/247.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/247.png"
        },
        "types": [
            "6",
            "5"
        ]
    },
    {
        "id": 248,
        "names": {
            "en": "tyranitar",
            "ko": "마기라스",
            "ja": "バンギラス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/248.png"
        },
        "types": [
            "6",
            "17"
        ]
    },
    {
        "id": 249,
        "names": {
            "en": "lugia",
            "ko": "루기아",
            "ja": "ルギア"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png"
        },
        "types": [
            "14",
            "3"
        ]
    },
    {
        "id": 250,
        "names": {
            "en": "ho-oh",
            "ko": "칠색조",
            "ja": "ホウオウ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/250.png"
        },
        "types": [
            "10",
            "3"
        ]
    },
    {
        "id": 251,
        "names": {
            "en": "celebi",
            "ko": "세레비",
            "ja": "セレビィ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/251.png"
        },
        "types": [
            "14",
            "12"
        ]
    },
    {
        "id": 252,
        "names": {
            "en": "treecko",
            "ko": "나무지기",
            "ja": "キモリ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/252.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 253,
        "names": {
            "en": "grovyle",
            "ko": "나무돌이",
            "ja": "ジュプトル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/253.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/253.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 254,
        "names": {
            "en": "sceptile",
            "ko": "나무킹",
            "ja": "ジュカイン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/254.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 255,
        "names": {
            "en": "torchic",
            "ko": "아차모",
            "ja": "アチャモ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/255.png"
        },
        "types": [
            "10"
        ]
    },
    {
        "id": 256,
        "names": {
            "en": "combusken",
            "ko": "영치코",
            "ja": "ワカシャモ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/256.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/256.png"
        },
        "types": [
            "10",
            "2"
        ]
    },
    {
        "id": 257,
        "names": {
            "en": "blaziken",
            "ko": "번치코",
            "ja": "バシャーモ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/257.png"
        },
        "types": [
            "10",
            "2"
        ]
    },
    {
        "id": 258,
        "names": {
            "en": "mudkip",
            "ko": "물짱이",
            "ja": "ミズゴロウ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/258.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 259,
        "names": {
            "en": "marshtomp",
            "ko": "늪짱이",
            "ja": "ヌマクロー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/259.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/259.png"
        },
        "types": [
            "11",
            "5"
        ]
    },
    {
        "id": 260,
        "names": {
            "en": "swampert",
            "ko": "대짱이",
            "ja": "ラグラージ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/260.png"
        },
        "types": [
            "11",
            "5"
        ]
    },
    {
        "id": 261,
        "names": {
            "en": "poochyena",
            "ko": "포챠나",
            "ja": "ポチエナ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/261.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/261.png"
        },
        "types": [
            "17"
        ]
    },
    {
        "id": 262,
        "names": {
            "en": "mightyena",
            "ko": "그라에나",
            "ja": "グラエナ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/262.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/262.png"
        },
        "types": [
            "17"
        ]
    },
    {
        "id": 263,
        "names": {
            "en": "zigzagoon",
            "ko": "지그제구리",
            "ja": "ジグザグマ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/263.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/263.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 264,
        "names": {
            "en": "linoone",
            "ko": "직구리",
            "ja": "マッスグマ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/264.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/264.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 265,
        "names": {
            "en": "wurmple",
            "ko": "개무소",
            "ja": "ケムッソ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/265.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/265.png"
        },
        "types": [
            "7"
        ]
    },
    {
        "id": 266,
        "names": {
            "en": "silcoon",
            "ko": "실쿤",
            "ja": "カラサリス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/266.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/266.png"
        },
        "types": [
            "7"
        ]
    },
    {
        "id": 267,
        "names": {
            "en": "beautifly",
            "ko": "뷰티플라이",
            "ja": "アゲハント"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/267.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/267.png"
        },
        "types": [
            "7",
            "3"
        ]
    },
    {
        "id": 268,
        "names": {
            "en": "cascoon",
            "ko": "카스쿤",
            "ja": "マユルド"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/268.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/268.png"
        },
        "types": [
            "7"
        ]
    },
    {
        "id": 269,
        "names": {
            "en": "dustox",
            "ko": "독케일",
            "ja": "ドクケイル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/269.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/269.png"
        },
        "types": [
            "7",
            "4"
        ]
    },
    {
        "id": 270,
        "names": {
            "en": "lotad",
            "ko": "연꽃몬",
            "ja": "ハスボー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/270.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/270.png"
        },
        "types": [
            "11",
            "12"
        ]
    },
    {
        "id": 271,
        "names": {
            "en": "lombre",
            "ko": "로토스",
            "ja": "ハスブレロ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/271.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/271.png"
        },
        "types": [
            "11",
            "12"
        ]
    },
    {
        "id": 272,
        "names": {
            "en": "ludicolo",
            "ko": "로파파",
            "ja": "ルンパッパ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/272.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/272.png"
        },
        "types": [
            "11",
            "12"
        ]
    },
    {
        "id": 273,
        "names": {
            "en": "seedot",
            "ko": "도토링",
            "ja": "タネボー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/273.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/273.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 274,
        "names": {
            "en": "nuzleaf",
            "ko": "잎새코",
            "ja": "コノハナ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/274.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/274.png"
        },
        "types": [
            "12",
            "17"
        ]
    },
    {
        "id": 275,
        "names": {
            "en": "shiftry",
            "ko": "다탱구",
            "ja": "ダーテング"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/275.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/275.png"
        },
        "types": [
            "12",
            "17"
        ]
    },
    {
        "id": 276,
        "names": {
            "en": "taillow",
            "ko": "테일로",
            "ja": "スバメ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/276.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/276.png"
        },
        "types": [
            "1",
            "3"
        ]
    },
    {
        "id": 277,
        "names": {
            "en": "swellow",
            "ko": "스왈로",
            "ja": "オオスバメ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/277.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/277.png"
        },
        "types": [
            "1",
            "3"
        ]
    },
    {
        "id": 278,
        "names": {
            "en": "wingull",
            "ko": "갈모매",
            "ja": "キャモメ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/278.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/278.png"
        },
        "types": [
            "11",
            "3"
        ]
    },
    {
        "id": 279,
        "names": {
            "en": "pelipper",
            "ko": "패리퍼",
            "ja": "ペリッパー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/279.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/279.png"
        },
        "types": [
            "11",
            "3"
        ]
    },
    {
        "id": 280,
        "names": {
            "en": "ralts",
            "ko": "랄토스",
            "ja": "ラルトス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/280.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/280.png"
        },
        "types": [
            "14",
            "18"
        ]
    },
    {
        "id": 281,
        "names": {
            "en": "kirlia",
            "ko": "킬리아",
            "ja": "キルリア"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/281.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/281.png"
        },
        "types": [
            "14",
            "18"
        ]
    },
    {
        "id": 282,
        "names": {
            "en": "gardevoir",
            "ko": "가디안",
            "ja": "サーナイト"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/282.png"
        },
        "types": [
            "14",
            "18"
        ]
    },
    {
        "id": 283,
        "names": {
            "en": "surskit",
            "ko": "비구술",
            "ja": "アメタマ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/283.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/283.png"
        },
        "types": [
            "7",
            "11"
        ]
    },
    {
        "id": 284,
        "names": {
            "en": "masquerain",
            "ko": "비나방",
            "ja": "アメモース"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/284.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/284.png"
        },
        "types": [
            "7",
            "3"
        ]
    },
    {
        "id": 285,
        "names": {
            "en": "shroomish",
            "ko": "버섯꼬",
            "ja": "キノココ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/285.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/285.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 286,
        "names": {
            "en": "breloom",
            "ko": "버섯모",
            "ja": "キノガッサ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/286.png"
        },
        "types": [
            "12",
            "2"
        ]
    },
    {
        "id": 287,
        "names": {
            "en": "slakoth",
            "ko": "게을로",
            "ja": "ナマケロ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/287.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/287.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 288,
        "names": {
            "en": "vigoroth",
            "ko": "발바로",
            "ja": "ヤルキモノ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/288.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/288.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 289,
        "names": {
            "en": "slaking",
            "ko": "게을킹",
            "ja": "ケッキング"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/289.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/289.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 290,
        "names": {
            "en": "nincada",
            "ko": "토중몬",
            "ja": "ツチニン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/290.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/290.png"
        },
        "types": [
            "7",
            "5"
        ]
    },
    {
        "id": 291,
        "names": {
            "en": "ninjask",
            "ko": "아이스크",
            "ja": "テッカニン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/291.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/291.png"
        },
        "types": [
            "7",
            "3"
        ]
    },
    {
        "id": 292,
        "names": {
            "en": "shedinja",
            "ko": "껍질몬",
            "ja": "ヌケニン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/292.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/292.png"
        },
        "types": [
            "7",
            "8"
        ]
    },
    {
        "id": 293,
        "names": {
            "en": "whismur",
            "ko": "소곤룡",
            "ja": "ゴニョニョ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/293.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/293.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 294,
        "names": {
            "en": "loudred",
            "ko": "노공룡",
            "ja": "ドゴーム"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/294.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/294.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 295,
        "names": {
            "en": "exploud",
            "ko": "폭음룡",
            "ja": "バクオング"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/295.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/295.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 296,
        "names": {
            "en": "makuhita",
            "ko": "마크탕",
            "ja": "マクノシタ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/296.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/296.png"
        },
        "types": [
            "2"
        ]
    },
    {
        "id": 297,
        "names": {
            "en": "hariyama",
            "ko": "하리뭉",
            "ja": "ハリテヤマ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/297.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/297.png"
        },
        "types": [
            "2"
        ]
    },
    {
        "id": 298,
        "names": {
            "en": "azurill",
            "ko": "루리리",
            "ja": "ルリリ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/298.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/298.png"
        },
        "types": [
            "1",
            "18"
        ]
    },
    {
        "id": 299,
        "names": {
            "en": "nosepass",
            "ko": "코코파스",
            "ja": "ノズパス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/299.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/299.png"
        },
        "types": [
            "6"
        ]
    },
    {
        "id": 300,
        "names": {
            "en": "skitty",
            "ko": "에나비",
            "ja": "エネコ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/300.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/300.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 301,
        "names": {
            "en": "delcatty",
            "ko": "델케티",
            "ja": "エネコロロ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/301.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/301.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 302,
        "names": {
            "en": "sableye",
            "ko": "깜까미",
            "ja": "ヤミラミ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/302.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/302.png"
        },
        "types": [
            "17",
            "8"
        ]
    },
    {
        "id": 303,
        "names": {
            "en": "mawile",
            "ko": "입치트",
            "ja": "クチート"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/303.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/303.png"
        },
        "types": [
            "9",
            "18"
        ]
    },
    {
        "id": 304,
        "names": {
            "en": "aron",
            "ko": "가보리",
            "ja": "ココドラ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/304.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/304.png"
        },
        "types": [
            "9",
            "6"
        ]
    },
    {
        "id": 305,
        "names": {
            "en": "lairon",
            "ko": "갱도라",
            "ja": "コドラ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/305.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/305.png"
        },
        "types": [
            "9",
            "6"
        ]
    },
    {
        "id": 306,
        "names": {
            "en": "aggron",
            "ko": "보스로라",
            "ja": "ボスゴドラ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/306.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/306.png"
        },
        "types": [
            "9",
            "6"
        ]
    },
    {
        "id": 307,
        "names": {
            "en": "meditite",
            "ko": "요가랑",
            "ja": "アサナン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/307.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/307.png"
        },
        "types": [
            "2",
            "14"
        ]
    },
    {
        "id": 308,
        "names": {
            "en": "medicham",
            "ko": "요가램",
            "ja": "チャーレム"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/308.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/308.png"
        },
        "types": [
            "2",
            "14"
        ]
    },
    {
        "id": 309,
        "names": {
            "en": "electrike",
            "ko": "썬더라이",
            "ja": "ラクライ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/309.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/309.png"
        },
        "types": [
            "13"
        ]
    },
    {
        "id": 310,
        "names": {
            "en": "manectric",
            "ko": "썬더볼트",
            "ja": "ライボルト"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/310.png"
        },
        "types": [
            "13"
        ]
    },
    {
        "id": 311,
        "names": {
            "en": "plusle",
            "ko": "플러시",
            "ja": "プラスル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/311.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/311.png"
        },
        "types": [
            "13"
        ]
    },
    {
        "id": 312,
        "names": {
            "en": "minun",
            "ko": "마이농",
            "ja": "マイナン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/312.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/312.png"
        },
        "types": [
            "13"
        ]
    },
    {
        "id": 313,
        "names": {
            "en": "volbeat",
            "ko": "볼비트",
            "ja": "バルビート"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/313.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/313.png"
        },
        "types": [
            "7"
        ]
    },
    {
        "id": 314,
        "names": {
            "en": "illumise",
            "ko": "네오비트",
            "ja": "イルミーゼ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/314.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/314.png"
        },
        "types": [
            "7"
        ]
    },
    {
        "id": 315,
        "names": {
            "en": "roselia",
            "ko": "로젤리아",
            "ja": "ロゼリア"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/315.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/315.png"
        },
        "types": [
            "12",
            "4"
        ]
    },
    {
        "id": 316,
        "names": {
            "en": "gulpin",
            "ko": "꼴깍몬",
            "ja": "ゴクリン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/316.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/316.png"
        },
        "types": [
            "4"
        ]
    },
    {
        "id": 317,
        "names": {
            "en": "swalot",
            "ko": "꿀꺽몬",
            "ja": "マルノーム"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/317.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/317.png"
        },
        "types": [
            "4"
        ]
    },
    {
        "id": 318,
        "names": {
            "en": "carvanha",
            "ko": "샤프니아",
            "ja": "キバニア"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/318.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/318.png"
        },
        "types": [
            "11",
            "17"
        ]
    },
    {
        "id": 319,
        "names": {
            "en": "sharpedo",
            "ko": "샤크니아",
            "ja": "サメハダー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/319.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/319.png"
        },
        "types": [
            "11",
            "17"
        ]
    },
    {
        "id": 320,
        "names": {
            "en": "wailmer",
            "ko": "고래왕자",
            "ja": "ホエルコ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/320.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/320.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 321,
        "names": {
            "en": "wailord",
            "ko": "고래왕",
            "ja": "ホエルオー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/321.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/321.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 322,
        "names": {
            "en": "numel",
            "ko": "둔타",
            "ja": "ドンメル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/322.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/322.png"
        },
        "types": [
            "10",
            "5"
        ]
    },
    {
        "id": 323,
        "names": {
            "en": "camerupt",
            "ko": "폭타",
            "ja": "バクーダ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/323.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/323.png"
        },
        "types": [
            "10",
            "5"
        ]
    },
    {
        "id": 324,
        "names": {
            "en": "torkoal",
            "ko": "코터스",
            "ja": "コータス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/324.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/324.png"
        },
        "types": [
            "10"
        ]
    },
    {
        "id": 325,
        "names": {
            "en": "spoink",
            "ko": "피그점프",
            "ja": "バネブー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/325.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/325.png"
        },
        "types": [
            "14"
        ]
    },
    {
        "id": 326,
        "names": {
            "en": "grumpig",
            "ko": "피그킹",
            "ja": "ブーピッグ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/326.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/326.png"
        },
        "types": [
            "14"
        ]
    },
    {
        "id": 327,
        "names": {
            "en": "spinda",
            "ko": "얼루기",
            "ja": "パッチール"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/327.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/327.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 328,
        "names": {
            "en": "trapinch",
            "ko": "톱치",
            "ja": "ナックラー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/328.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/328.png"
        },
        "types": [
            "5"
        ]
    },
    {
        "id": 329,
        "names": {
            "en": "vibrava",
            "ko": "비브라바",
            "ja": "ビブラーバ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/329.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/329.png"
        },
        "types": [
            "5",
            "16"
        ]
    },
    {
        "id": 330,
        "names": {
            "en": "flygon",
            "ko": "플라이곤",
            "ja": "フライゴン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/330.png"
        },
        "types": [
            "5",
            "16"
        ]
    },
    {
        "id": 331,
        "names": {
            "en": "cacnea",
            "ko": "선인왕",
            "ja": "サボネア"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/331.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/331.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 332,
        "names": {
            "en": "cacturne",
            "ko": "밤선인",
            "ja": "ノクタス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/332.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/332.png"
        },
        "types": [
            "12",
            "17"
        ]
    },
    {
        "id": 333,
        "names": {
            "en": "swablu",
            "ko": "파비코",
            "ja": "チルット"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/333.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/333.png"
        },
        "types": [
            "1",
            "3"
        ]
    },
    {
        "id": 334,
        "names": {
            "en": "altaria",
            "ko": "파비코리",
            "ja": "チルタリス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/334.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/334.png"
        },
        "types": [
            "16",
            "3"
        ]
    },
    {
        "id": 335,
        "names": {
            "en": "zangoose",
            "ko": "쟝고",
            "ja": "ザングース"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/335.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/335.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 336,
        "names": {
            "en": "seviper",
            "ko": "세비퍼",
            "ja": "ハブネーク"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/336.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/336.png"
        },
        "types": [
            "4"
        ]
    },
    {
        "id": 337,
        "names": {
            "en": "lunatone",
            "ko": "루나톤",
            "ja": "ルナトーン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/337.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/337.png"
        },
        "types": [
            "6",
            "14"
        ]
    },
    {
        "id": 338,
        "names": {
            "en": "solrock",
            "ko": "솔록",
            "ja": "ソルロック"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/338.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/338.png"
        },
        "types": [
            "6",
            "14"
        ]
    },
    {
        "id": 339,
        "names": {
            "en": "barboach",
            "ko": "미꾸리",
            "ja": "ドジョッチ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/339.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/339.png"
        },
        "types": [
            "11",
            "5"
        ]
    },
    {
        "id": 340,
        "names": {
            "en": "whiscash",
            "ko": "메깅",
            "ja": "ナマズン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/340.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/340.png"
        },
        "types": [
            "11",
            "5"
        ]
    },
    {
        "id": 341,
        "names": {
            "en": "corphish",
            "ko": "가재군",
            "ja": "ヘイガニ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/341.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/341.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 342,
        "names": {
            "en": "crawdaunt",
            "ko": "가재장군",
            "ja": "シザリガー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/342.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/342.png"
        },
        "types": [
            "11",
            "17"
        ]
    },
    {
        "id": 343,
        "names": {
            "en": "baltoy",
            "ko": "오뚝군",
            "ja": "ヤジロン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/343.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/343.png"
        },
        "types": [
            "5",
            "14"
        ]
    },
    {
        "id": 344,
        "names": {
            "en": "claydol",
            "ko": "점토도리",
            "ja": "ネンドール"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/344.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/344.png"
        },
        "types": [
            "5",
            "14"
        ]
    },
    {
        "id": 345,
        "names": {
            "en": "lileep",
            "ko": "릴링",
            "ja": "リリーラ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/345.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/345.png"
        },
        "types": [
            "6",
            "12"
        ]
    },
    {
        "id": 346,
        "names": {
            "en": "cradily",
            "ko": "릴리요",
            "ja": "ユレイドル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/346.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/346.png"
        },
        "types": [
            "6",
            "12"
        ]
    },
    {
        "id": 347,
        "names": {
            "en": "anorith",
            "ko": "아노딥스",
            "ja": "アノプス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/347.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/347.png"
        },
        "types": [
            "6",
            "7"
        ]
    },
    {
        "id": 348,
        "names": {
            "en": "armaldo",
            "ko": "아말도",
            "ja": "アーマルド"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/348.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/348.png"
        },
        "types": [
            "6",
            "7"
        ]
    },
    {
        "id": 349,
        "names": {
            "en": "feebas",
            "ko": "빈티나",
            "ja": "ヒンバス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/349.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/349.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 350,
        "names": {
            "en": "milotic",
            "ko": "밀로틱",
            "ja": "ミロカロス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/350.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 351,
        "names": {
            "en": "castform",
            "ko": "캐스퐁",
            "ja": "ポワルン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/351.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/351.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 352,
        "names": {
            "en": "kecleon",
            "ko": "켈리몬",
            "ja": "カクレオン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/352.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/352.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 353,
        "names": {
            "en": "shuppet",
            "ko": "어둠대신",
            "ja": "カゲボウズ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/353.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/353.png"
        },
        "types": [
            "8"
        ]
    },
    {
        "id": 354,
        "names": {
            "en": "banette",
            "ko": "다크펫",
            "ja": "ジュペッタ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/354.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/354.png"
        },
        "types": [
            "8"
        ]
    },
    {
        "id": 355,
        "names": {
            "en": "duskull",
            "ko": "해골몽",
            "ja": "ヨマワル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/355.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/355.png"
        },
        "types": [
            "8"
        ]
    },
    {
        "id": 356,
        "names": {
            "en": "dusclops",
            "ko": "미라몽",
            "ja": "サマヨール"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/356.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/356.png"
        },
        "types": [
            "8"
        ]
    },
    {
        "id": 357,
        "names": {
            "en": "tropius",
            "ko": "트로피우스",
            "ja": "トロピウス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/357.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/357.png"
        },
        "types": [
            "12",
            "3"
        ]
    },
    {
        "id": 358,
        "names": {
            "en": "chimecho",
            "ko": "치렁",
            "ja": "チリーン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/358.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/358.png"
        },
        "types": [
            "14"
        ]
    },
    {
        "id": 359,
        "names": {
            "en": "absol",
            "ko": "앱솔",
            "ja": "アブソル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/359.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/359.png"
        },
        "types": [
            "17"
        ]
    },
    {
        "id": 360,
        "names": {
            "en": "wynaut",
            "ko": "마자",
            "ja": "ソーナノ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/360.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/360.png"
        },
        "types": [
            "14"
        ]
    },
    {
        "id": 361,
        "names": {
            "en": "snorunt",
            "ko": "눈꼬마",
            "ja": "ユキワラシ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/361.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/361.png"
        },
        "types": [
            "15"
        ]
    },
    {
        "id": 362,
        "names": {
            "en": "glalie",
            "ko": "얼음귀신",
            "ja": "オニゴーリ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/362.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/362.png"
        },
        "types": [
            "15"
        ]
    },
    {
        "id": 363,
        "names": {
            "en": "spheal",
            "ko": "대굴레오",
            "ja": "タマザラシ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/363.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/363.png"
        },
        "types": [
            "15",
            "11"
        ]
    },
    {
        "id": 364,
        "names": {
            "en": "sealeo",
            "ko": "씨레오",
            "ja": "トドグラー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/364.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/364.png"
        },
        "types": [
            "15",
            "11"
        ]
    },
    {
        "id": 365,
        "names": {
            "en": "walrein",
            "ko": "씨카이저",
            "ja": "トドゼルガ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/365.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/365.png"
        },
        "types": [
            "15",
            "11"
        ]
    },
    {
        "id": 366,
        "names": {
            "en": "clamperl",
            "ko": "진주몽",
            "ja": "パールル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/366.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/366.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 367,
        "names": {
            "en": "huntail",
            "ko": "헌테일",
            "ja": "ハンテール"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/367.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/367.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 368,
        "names": {
            "en": "gorebyss",
            "ko": "분홍장이",
            "ja": "サクラビス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/368.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/368.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 369,
        "names": {
            "en": "relicanth",
            "ko": "시라칸",
            "ja": "ジーランス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/369.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/369.png"
        },
        "types": [
            "11",
            "6"
        ]
    },
    {
        "id": 370,
        "names": {
            "en": "luvdisc",
            "ko": "사랑동이",
            "ja": "ラブカス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/370.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/370.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 371,
        "names": {
            "en": "bagon",
            "ko": "아공이",
            "ja": "タツベイ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/371.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/371.png"
        },
        "types": [
            "16"
        ]
    },
    {
        "id": 372,
        "names": {
            "en": "shelgon",
            "ko": "쉘곤",
            "ja": "コモルー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/372.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/372.png"
        },
        "types": [
            "16"
        ]
    },
    {
        "id": 373,
        "names": {
            "en": "salamence",
            "ko": "보만다",
            "ja": "ボーマンダ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/373.png"
        },
        "types": [
            "16",
            "3"
        ]
    },
    {
        "id": 374,
        "names": {
            "en": "beldum",
            "ko": "메탕",
            "ja": "ダンバル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/374.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/374.png"
        },
        "types": [
            "9",
            "14"
        ]
    },
    {
        "id": 375,
        "names": {
            "en": "metang",
            "ko": "메탕구",
            "ja": "メタング"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/375.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/375.png"
        },
        "types": [
            "9",
            "14"
        ]
    },
    {
        "id": 376,
        "names": {
            "en": "metagross",
            "ko": "메타그로스",
            "ja": "メタグロス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/376.png"
        },
        "types": [
            "9",
            "14"
        ]
    },
    {
        "id": 377,
        "names": {
            "en": "regirock",
            "ko": "레지락",
            "ja": "レジロック"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/377.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/377.png"
        },
        "types": [
            "6"
        ]
    },
    {
        "id": 378,
        "names": {
            "en": "regice",
            "ko": "레지아이스",
            "ja": "レジアイス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/378.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/378.png"
        },
        "types": [
            "15"
        ]
    },
    {
        "id": 379,
        "names": {
            "en": "registeel",
            "ko": "레지스틸",
            "ja": "レジスチル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/379.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/379.png"
        },
        "types": [
            "9"
        ]
    },
    {
        "id": 380,
        "names": {
            "en": "latias",
            "ko": "라티아스",
            "ja": "ラティアス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/380.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/380.png"
        },
        "types": [
            "16",
            "14"
        ]
    },
    {
        "id": 381,
        "names": {
            "en": "latios",
            "ko": "라티오스",
            "ja": "ラティオス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/381.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/381.png"
        },
        "types": [
            "16",
            "14"
        ]
    },
    {
        "id": 382,
        "names": {
            "en": "kyogre",
            "ko": "가이오가",
            "ja": "カイオーガ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/382.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 383,
        "names": {
            "en": "groudon",
            "ko": "그란돈",
            "ja": "グラードン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/383.png"
        },
        "types": [
            "5"
        ]
    },
    {
        "id": 384,
        "names": {
            "en": "rayquaza",
            "ko": "레쿠쟈",
            "ja": "レックウザ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png"
        },
        "types": [
            "16",
            "3"
        ]
    },
    {
        "id": 385,
        "names": {
            "en": "jirachi",
            "ko": "지라치",
            "ja": "ジラーチ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/385.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/385.png"
        },
        "types": [
            "9",
            "14"
        ]
    },
    {
        "id": 386,
        "names": {
            "en": "deoxys",
            "ko": "테오키스",
            "ja": "デオキシス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/386.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/386.png"
        },
        "types": [
            "14"
        ]
    },
    {
        "id": 387,
        "names": {
            "en": "turtwig",
            "ko": "모부기",
            "ja": "ナエトル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/387.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 388,
        "names": {
            "en": "grotle",
            "ko": "수풀부기",
            "ja": "ハヤシガメ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/388.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/388.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 389,
        "names": {
            "en": "torterra",
            "ko": "토대부기",
            "ja": "ドダイトス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/389.png"
        },
        "types": [
            "12",
            "5"
        ]
    },
    {
        "id": 390,
        "names": {
            "en": "chimchar",
            "ko": "불꽃숭이",
            "ja": "ヒコザル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/390.png"
        },
        "types": [
            "10"
        ]
    },
    {
        "id": 391,
        "names": {
            "en": "monferno",
            "ko": "파이숭이",
            "ja": "モウカザル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/391.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/391.png"
        },
        "types": [
            "10",
            "2"
        ]
    },
    {
        "id": 392,
        "names": {
            "en": "infernape",
            "ko": "초염몽",
            "ja": "ゴウカザル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/392.png"
        },
        "types": [
            "10",
            "2"
        ]
    },
    {
        "id": 393,
        "names": {
            "en": "piplup",
            "ko": "팽도리",
            "ja": "ポッチャマ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/393.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 394,
        "names": {
            "en": "prinplup",
            "ko": "팽태자",
            "ja": "ポッタイシ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/394.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/394.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 395,
        "names": {
            "en": "empoleon",
            "ko": "엠페르트",
            "ja": "エンペルト"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/395.png"
        },
        "types": [
            "11",
            "9"
        ]
    },
    {
        "id": 396,
        "names": {
            "en": "starly",
            "ko": "찌르꼬",
            "ja": "ムックル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/396.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/396.png"
        },
        "types": [
            "1",
            "3"
        ]
    },
    {
        "id": 397,
        "names": {
            "en": "staravia",
            "ko": "찌르버드",
            "ja": "ムクバード"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/397.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/397.png"
        },
        "types": [
            "1",
            "3"
        ]
    },
    {
        "id": 398,
        "names": {
            "en": "staraptor",
            "ko": "찌르호크",
            "ja": "ムクホーク"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/398.png"
        },
        "types": [
            "1",
            "3"
        ]
    },
    {
        "id": 399,
        "names": {
            "en": "bidoof",
            "ko": "비버니",
            "ja": "ビッパ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/399.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/399.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 400,
        "names": {
            "en": "bibarel",
            "ko": "비버통",
            "ja": "ビーダル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/400.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/400.png"
        },
        "types": [
            "1",
            "11"
        ]
    },
    {
        "id": 401,
        "names": {
            "en": "kricketot",
            "ko": "귀뚤뚜기",
            "ja": "コロボーシ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/401.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/401.png"
        },
        "types": [
            "7"
        ]
    },
    {
        "id": 402,
        "names": {
            "en": "kricketune",
            "ko": "귀뚤톡크",
            "ja": "コロトック"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/402.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/402.png"
        },
        "types": [
            "7"
        ]
    },
    {
        "id": 403,
        "names": {
            "en": "shinx",
            "ko": "꼬링크",
            "ja": "コリンク"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/403.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/403.png"
        },
        "types": [
            "13"
        ]
    },
    {
        "id": 404,
        "names": {
            "en": "luxio",
            "ko": "럭시오",
            "ja": "ルクシオ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/404.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/404.png"
        },
        "types": [
            "13"
        ]
    },
    {
        "id": 405,
        "names": {
            "en": "luxray",
            "ko": "렌트라",
            "ja": "レントラー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/405.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/405.png"
        },
        "types": [
            "13"
        ]
    },
    {
        "id": 406,
        "names": {
            "en": "budew",
            "ko": "꼬몽울",
            "ja": "スボミー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/406.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/406.png"
        },
        "types": [
            "12",
            "4"
        ]
    },
    {
        "id": 407,
        "names": {
            "en": "roserade",
            "ko": "로즈레이드",
            "ja": "ロズレイド"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/407.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/407.png"
        },
        "types": [
            "12",
            "4"
        ]
    },
    {
        "id": 408,
        "names": {
            "en": "cranidos",
            "ko": "두개도스",
            "ja": "ズガイドス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/408.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/408.png"
        },
        "types": [
            "6"
        ]
    },
    {
        "id": 409,
        "names": {
            "en": "rampardos",
            "ko": "램펄드",
            "ja": "ラムパルド"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/409.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/409.png"
        },
        "types": [
            "6"
        ]
    },
    {
        "id": 410,
        "names": {
            "en": "shieldon",
            "ko": "방패톱스",
            "ja": "タテトプス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/410.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/410.png"
        },
        "types": [
            "6",
            "9"
        ]
    },
    {
        "id": 411,
        "names": {
            "en": "bastiodon",
            "ko": "바리톱스",
            "ja": "トリデプス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/411.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/411.png"
        },
        "types": [
            "6",
            "9"
        ]
    },
    {
        "id": 412,
        "names": {
            "en": "burmy",
            "ko": "도롱충이",
            "ja": "ミノムッチ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/412.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/412.png"
        },
        "types": [
            "7"
        ]
    },
    {
        "id": 413,
        "names": {
            "en": "wormadam",
            "ko": "도롱마담",
            "ja": "ミノマダム"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/413.png"
        },
        "types": [
            "7",
            "12"
        ]
    },
    {
        "id": 414,
        "names": {
            "en": "mothim",
            "ko": "나메일",
            "ja": "ガーメイル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/414.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/414.png"
        },
        "types": [
            "7",
            "3"
        ]
    },
    {
        "id": 415,
        "names": {
            "en": "combee",
            "ko": "세꿀버리",
            "ja": "ミツハニー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/415.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/415.png"
        },
        "types": [
            "7",
            "3"
        ]
    },
    {
        "id": 416,
        "names": {
            "en": "vespiquen",
            "ko": "비퀸",
            "ja": "ビークイン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/416.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/416.png"
        },
        "types": [
            "7",
            "3"
        ]
    },
    {
        "id": 417,
        "names": {
            "en": "pachirisu",
            "ko": "파치리스",
            "ja": "パチリス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/417.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/417.png"
        },
        "types": [
            "13"
        ]
    },
    {
        "id": 418,
        "names": {
            "en": "buizel",
            "ko": "브이젤",
            "ja": "ブイゼル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/418.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/418.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 419,
        "names": {
            "en": "floatzel",
            "ko": "플로젤",
            "ja": "フローゼル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/419.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/419.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 420,
        "names": {
            "en": "cherubi",
            "ko": "체리버",
            "ja": "チェリンボ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/420.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/420.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 421,
        "names": {
            "en": "cherrim",
            "ko": "체리꼬",
            "ja": "チェリム"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/421.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/421.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 422,
        "names": {
            "en": "shellos",
            "ko": "깝질무",
            "ja": "カラナクシ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/422.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/422.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 423,
        "names": {
            "en": "gastrodon",
            "ko": "트리토돈",
            "ja": "トリトドン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/423.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/423.png"
        },
        "types": [
            "11",
            "5"
        ]
    },
    {
        "id": 424,
        "names": {
            "en": "ambipom",
            "ko": "겟핸보숭",
            "ja": "エテボース"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/424.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/424.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 425,
        "names": {
            "en": "drifloon",
            "ko": "흔들풍손",
            "ja": "フワンテ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/425.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/425.png"
        },
        "types": [
            "8",
            "3"
        ]
    },
    {
        "id": 426,
        "names": {
            "en": "drifblim",
            "ko": "둥실라이드",
            "ja": "フワライド"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/426.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/426.png"
        },
        "types": [
            "8",
            "3"
        ]
    },
    {
        "id": 427,
        "names": {
            "en": "buneary",
            "ko": "이어롤",
            "ja": "ミミロル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/427.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/427.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 428,
        "names": {
            "en": "lopunny",
            "ko": "이어롭",
            "ja": "ミミロップ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/428.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/428.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 429,
        "names": {
            "en": "mismagius",
            "ko": "무우마직",
            "ja": "ムウマージ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/429.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/429.png"
        },
        "types": [
            "8"
        ]
    },
    {
        "id": 430,
        "names": {
            "en": "honchkrow",
            "ko": "돈크로우",
            "ja": "ドンカラス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/430.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/430.png"
        },
        "types": [
            "17",
            "3"
        ]
    },
    {
        "id": 431,
        "names": {
            "en": "glameow",
            "ko": "나옹마",
            "ja": "ニャルマー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/431.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/431.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 432,
        "names": {
            "en": "purugly",
            "ko": "몬냥이",
            "ja": "ブニャット"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/432.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/432.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 433,
        "names": {
            "en": "chingling",
            "ko": "랑딸랑",
            "ja": "リーシャン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/433.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/433.png"
        },
        "types": [
            "14"
        ]
    },
    {
        "id": 434,
        "names": {
            "en": "stunky",
            "ko": "스컹뿡",
            "ja": "スカンプー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/434.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/434.png"
        },
        "types": [
            "4",
            "17"
        ]
    },
    {
        "id": 435,
        "names": {
            "en": "skuntank",
            "ko": "스컹탱크",
            "ja": "スカタンク"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/435.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/435.png"
        },
        "types": [
            "4",
            "17"
        ]
    },
    {
        "id": 436,
        "names": {
            "en": "bronzor",
            "ko": "동미러",
            "ja": "ドーミラー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/436.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/436.png"
        },
        "types": [
            "9",
            "14"
        ]
    },
    {
        "id": 437,
        "names": {
            "en": "bronzong",
            "ko": "동탁군",
            "ja": "ドータクン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/437.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/437.png"
        },
        "types": [
            "9",
            "14"
        ]
    },
    {
        "id": 438,
        "names": {
            "en": "bonsly",
            "ko": "꼬지지",
            "ja": "ウソハチ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/438.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/438.png"
        },
        "types": [
            "6"
        ]
    },
    {
        "id": 439,
        "names": {
            "en": "mime-jr",
            "ko": "흉내내",
            "ja": "マネネ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/439.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/439.png"
        },
        "types": [
            "14",
            "18"
        ]
    },
    {
        "id": 440,
        "names": {
            "en": "happiny",
            "ko": "핑복",
            "ja": "ピンプク"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/440.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/440.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 441,
        "names": {
            "en": "chatot",
            "ko": "페라페",
            "ja": "ペラップ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/441.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/441.png"
        },
        "types": [
            "1",
            "3"
        ]
    },
    {
        "id": 442,
        "names": {
            "en": "spiritomb",
            "ko": "화강돌",
            "ja": "ミカルゲ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/442.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/442.png"
        },
        "types": [
            "8",
            "17"
        ]
    },
    {
        "id": 443,
        "names": {
            "en": "gible",
            "ko": "딥상어동",
            "ja": "フカマル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/443.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/443.png"
        },
        "types": [
            "16",
            "5"
        ]
    },
    {
        "id": 444,
        "names": {
            "en": "gabite",
            "ko": "한바이트",
            "ja": "ガバイト"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/444.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/444.png"
        },
        "types": [
            "16",
            "5"
        ]
    },
    {
        "id": 445,
        "names": {
            "en": "garchomp",
            "ko": "한카리아스",
            "ja": "ガブリアス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/445.png"
        },
        "types": [
            "16",
            "5"
        ]
    },
    {
        "id": 446,
        "names": {
            "en": "munchlax",
            "ko": "먹고자",
            "ja": "ゴンベ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/446.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/446.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 447,
        "names": {
            "en": "riolu",
            "ko": "리오르",
            "ja": "リオル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/447.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/447.png"
        },
        "types": [
            "2"
        ]
    },
    {
        "id": 448,
        "names": {
            "en": "lucario",
            "ko": "루카리오",
            "ja": "ルカリオ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png"
        },
        "types": [
            "2",
            "9"
        ]
    },
    {
        "id": 449,
        "names": {
            "en": "hippopotas",
            "ko": "히포포타스",
            "ja": "ヒポポタス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/449.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/449.png"
        },
        "types": [
            "5"
        ]
    },
    {
        "id": 450,
        "names": {
            "en": "hippowdon",
            "ko": "하마돈",
            "ja": "カバルドン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/450.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/450.png"
        },
        "types": [
            "5"
        ]
    },
    {
        "id": 451,
        "names": {
            "en": "skorupi",
            "ko": "스콜피",
            "ja": "スコルピ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/451.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/451.png"
        },
        "types": [
            "4",
            "7"
        ]
    },
    {
        "id": 452,
        "names": {
            "en": "drapion",
            "ko": "드래피온",
            "ja": "ドラピオン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/452.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/452.png"
        },
        "types": [
            "4",
            "17"
        ]
    },
    {
        "id": 453,
        "names": {
            "en": "croagunk",
            "ko": "삐딱구리",
            "ja": "グレッグル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/453.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/453.png"
        },
        "types": [
            "4",
            "2"
        ]
    },
    {
        "id": 454,
        "names": {
            "en": "toxicroak",
            "ko": "독개굴",
            "ja": "ドクロッグ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/454.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/454.png"
        },
        "types": [
            "4",
            "2"
        ]
    },
    {
        "id": 455,
        "names": {
            "en": "carnivine",
            "ko": "무스틈니",
            "ja": "マスキッパ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/455.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/455.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 456,
        "names": {
            "en": "finneon",
            "ko": "형광어",
            "ja": "ケイコウオ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/456.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/456.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 457,
        "names": {
            "en": "lumineon",
            "ko": "네오라이트",
            "ja": "ネオラント"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/457.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/457.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 458,
        "names": {
            "en": "mantyke",
            "ko": "타만타",
            "ja": "タマンタ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/458.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/458.png"
        },
        "types": [
            "11",
            "3"
        ]
    },
    {
        "id": 459,
        "names": {
            "en": "snover",
            "ko": "눈쓰개",
            "ja": "ユキカブリ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/459.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/459.png"
        },
        "types": [
            "12",
            "15"
        ]
    },
    {
        "id": 460,
        "names": {
            "en": "abomasnow",
            "ko": "눈설왕",
            "ja": "ユキノオー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/460.png"
        },
        "types": [
            "12",
            "15"
        ]
    },
    {
        "id": 461,
        "names": {
            "en": "weavile",
            "ko": "포푸니라",
            "ja": "マニューラ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/461.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/461.png"
        },
        "types": [
            "17",
            "15"
        ]
    },
    {
        "id": 462,
        "names": {
            "en": "magnezone",
            "ko": "자포코일",
            "ja": "ジバコイル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/462.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/462.png"
        },
        "types": [
            "13",
            "9"
        ]
    },
    {
        "id": 463,
        "names": {
            "en": "lickilicky",
            "ko": "내룸벨트",
            "ja": "ベロベルト"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/463.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/463.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 464,
        "names": {
            "en": "rhyperior",
            "ko": "거대코뿌리",
            "ja": "ドサイドン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/464.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/464.png"
        },
        "types": [
            "5",
            "6"
        ]
    },
    {
        "id": 465,
        "names": {
            "en": "tangrowth",
            "ko": "덩쿠림보",
            "ja": "モジャンボ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/465.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/465.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 466,
        "names": {
            "en": "electivire",
            "ko": "에레키블",
            "ja": "エレキブル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/466.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/466.png"
        },
        "types": [
            "13"
        ]
    },
    {
        "id": 467,
        "names": {
            "en": "magmortar",
            "ko": "마그마번",
            "ja": "ブーバーン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/467.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/467.png"
        },
        "types": [
            "10"
        ]
    },
    {
        "id": 468,
        "names": {
            "en": "togekiss",
            "ko": "토게키스",
            "ja": "トゲキッス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/468.png"
        },
        "types": [
            "18",
            "3"
        ]
    },
    {
        "id": 469,
        "names": {
            "en": "yanmega",
            "ko": "메가자리",
            "ja": "メガヤンマ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/469.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/469.png"
        },
        "types": [
            "7",
            "3"
        ]
    },
    {
        "id": 470,
        "names": {
            "en": "leafeon",
            "ko": "리피아",
            "ja": "リーフィア"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/470.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 471,
        "names": {
            "en": "glaceon",
            "ko": "글레이시아",
            "ja": "グレイシア"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/471.png"
        },
        "types": [
            "15"
        ]
    },
    {
        "id": 472,
        "names": {
            "en": "gliscor",
            "ko": "글라이온",
            "ja": "グライオン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/472.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/472.png"
        },
        "types": [
            "5",
            "3"
        ]
    },
    {
        "id": 473,
        "names": {
            "en": "mamoswine",
            "ko": "맘모꾸리",
            "ja": "マンムー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/473.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/473.png"
        },
        "types": [
            "15",
            "5"
        ]
    },
    {
        "id": 474,
        "names": {
            "en": "porygon-z",
            "ko": "폴리곤Z",
            "ja": "ポリゴンＺ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/474.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/474.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 475,
        "names": {
            "en": "gallade",
            "ko": "엘레이드",
            "ja": "エルレイド"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/475.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/475.png"
        },
        "types": [
            "14",
            "2"
        ]
    },
    {
        "id": 476,
        "names": {
            "en": "probopass",
            "ko": "대코파스",
            "ja": "ダイノーズ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/476.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/476.png"
        },
        "types": [
            "6",
            "9"
        ]
    },
    {
        "id": 477,
        "names": {
            "en": "dusknoir",
            "ko": "야느와르몽",
            "ja": "ヨノワール"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/477.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/477.png"
        },
        "types": [
            "8"
        ]
    },
    {
        "id": 478,
        "names": {
            "en": "froslass",
            "ko": "눈여아",
            "ja": "ユキメノコ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/478.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/478.png"
        },
        "types": [
            "15",
            "8"
        ]
    },
    {
        "id": 479,
        "names": {
            "en": "rotom",
            "ko": "로토무",
            "ja": "ロトム"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/479.png"
        },
        "types": [
            "13",
            "8"
        ]
    },
    {
        "id": 480,
        "names": {
            "en": "uxie",
            "ko": "유크시",
            "ja": "ユクシー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/480.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/480.png"
        },
        "types": [
            "14"
        ]
    },
    {
        "id": 481,
        "names": {
            "en": "mesprit",
            "ko": "엠라이트",
            "ja": "エムリット"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/481.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/481.png"
        },
        "types": [
            "14"
        ]
    },
    {
        "id": 482,
        "names": {
            "en": "azelf",
            "ko": "아그놈",
            "ja": "アグノム"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/482.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/482.png"
        },
        "types": [
            "14"
        ]
    },
    {
        "id": 483,
        "names": {
            "en": "dialga",
            "ko": "디아루가",
            "ja": "ディアルガ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/483.png"
        },
        "types": [
            "9",
            "16"
        ]
    },
    {
        "id": 484,
        "names": {
            "en": "palkia",
            "ko": "펄기아",
            "ja": "パルキア"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/484.png"
        },
        "types": [
            "11",
            "16"
        ]
    },
    {
        "id": 485,
        "names": {
            "en": "heatran",
            "ko": "히드런",
            "ja": "ヒードラン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/485.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/485.png"
        },
        "types": [
            "10",
            "9"
        ]
    },
    {
        "id": 486,
        "names": {
            "en": "regigigas",
            "ko": "레지기가스",
            "ja": "レジギガス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/486.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/486.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 487,
        "names": {
            "en": "giratina",
            "ko": "기라티나",
            "ja": "ギラティナ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/487.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/487.png"
        },
        "types": [
            "8",
            "16"
        ]
    },
    {
        "id": 488,
        "names": {
            "en": "cresselia",
            "ko": "크레세리아",
            "ja": "クレセリア"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/488.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/488.png"
        },
        "types": [
            "14"
        ]
    },
    {
        "id": 489,
        "names": {
            "en": "phione",
            "ko": "피오네",
            "ja": "フィオネ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/489.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/489.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 490,
        "names": {
            "en": "manaphy",
            "ko": "마나피",
            "ja": "マナフィ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/490.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/490.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 491,
        "names": {
            "en": "darkrai",
            "ko": "다크라이",
            "ja": "ダークライ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/491.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/491.png"
        },
        "types": [
            "17"
        ]
    },
    {
        "id": 492,
        "names": {
            "en": "shaymin",
            "ko": "쉐이미",
            "ja": "シェイミ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/492.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/492.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 493,
        "names": {
            "en": "arceus",
            "ko": "아르세우스",
            "ja": "アルセウス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/493.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 494,
        "names": {
            "en": "victini",
            "ko": "비크티니",
            "ja": "ビクティニ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/494.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/494.png"
        },
        "types": [
            "14",
            "10"
        ]
    },
    {
        "id": 495,
        "names": {
            "en": "snivy",
            "ko": "주리비얀",
            "ja": "ツタージャ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/495.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 496,
        "names": {
            "en": "servine",
            "ko": "샤비",
            "ja": "ジャノビー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/496.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/496.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 497,
        "names": {
            "en": "serperior",
            "ko": "샤로다",
            "ja": "ジャローダ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/497.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/497.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 498,
        "names": {
            "en": "tepig",
            "ko": "뚜꾸리",
            "ja": "ポカブ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/498.png"
        },
        "types": [
            "10"
        ]
    },
    {
        "id": 499,
        "names": {
            "en": "pignite",
            "ko": "차오꿀",
            "ja": "チャオブー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/499.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/499.png"
        },
        "types": [
            "10",
            "2"
        ]
    },
    {
        "id": 500,
        "names": {
            "en": "emboar",
            "ko": "염무왕",
            "ja": "エンブオー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/500.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/500.png"
        },
        "types": [
            "10",
            "2"
        ]
    },
    {
        "id": 501,
        "names": {
            "en": "oshawott",
            "ko": "수댕이",
            "ja": "ミジュマル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/501.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 502,
        "names": {
            "en": "dewott",
            "ko": "쌍검자비",
            "ja": "フタチマル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/502.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/502.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 503,
        "names": {
            "en": "samurott",
            "ko": "대검귀",
            "ja": "ダイケンキ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/503.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/503.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 504,
        "names": {
            "en": "patrat",
            "ko": "보르쥐",
            "ja": "ミネズミ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/504.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/504.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 505,
        "names": {
            "en": "watchog",
            "ko": "보르그",
            "ja": "ミルホッグ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/505.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/505.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 506,
        "names": {
            "en": "lillipup",
            "ko": "요테리",
            "ja": "ヨーテリー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/506.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/506.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 507,
        "names": {
            "en": "herdier",
            "ko": "하데리어",
            "ja": "ハーデリア"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/507.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/507.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 508,
        "names": {
            "en": "stoutland",
            "ko": "바랜드",
            "ja": "ムーランド"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/508.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/508.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 509,
        "names": {
            "en": "purrloin",
            "ko": "쌔비냥",
            "ja": "チョロネコ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/509.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/509.png"
        },
        "types": [
            "17"
        ]
    },
    {
        "id": 510,
        "names": {
            "en": "liepard",
            "ko": "레파르다스",
            "ja": "レパルダス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/510.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/510.png"
        },
        "types": [
            "17"
        ]
    },
    {
        "id": 511,
        "names": {
            "en": "pansage",
            "ko": "야나프",
            "ja": "ヤナップ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/511.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/511.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 512,
        "names": {
            "en": "simisage",
            "ko": "야나키",
            "ja": "ヤナッキー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/512.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/512.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 513,
        "names": {
            "en": "pansear",
            "ko": "바오프",
            "ja": "バオップ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/513.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/513.png"
        },
        "types": [
            "10"
        ]
    },
    {
        "id": 514,
        "names": {
            "en": "simisear",
            "ko": "바오키",
            "ja": "バオッキー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/514.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/514.png"
        },
        "types": [
            "10"
        ]
    },
    {
        "id": 515,
        "names": {
            "en": "panpour",
            "ko": "앗차프",
            "ja": "ヒヤップ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/515.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/515.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 516,
        "names": {
            "en": "simipour",
            "ko": "앗차키",
            "ja": "ヒヤッキー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/516.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/516.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 517,
        "names": {
            "en": "munna",
            "ko": "몽나",
            "ja": "ムンナ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/517.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/517.png"
        },
        "types": [
            "14"
        ]
    },
    {
        "id": 518,
        "names": {
            "en": "musharna",
            "ko": "몽얌나",
            "ja": "ムシャーナ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/518.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/518.png"
        },
        "types": [
            "14"
        ]
    },
    {
        "id": 519,
        "names": {
            "en": "pidove",
            "ko": "콩둘기",
            "ja": "マメパト"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/519.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/519.png"
        },
        "types": [
            "1",
            "3"
        ]
    },
    {
        "id": 520,
        "names": {
            "en": "tranquill",
            "ko": "유토브",
            "ja": "ハトーボー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/520.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/520.png"
        },
        "types": [
            "1",
            "3"
        ]
    },
    {
        "id": 521,
        "names": {
            "en": "unfezant",
            "ko": "켄호로우",
            "ja": "ケンホロウ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/521.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/521.png"
        },
        "types": [
            "1",
            "3"
        ]
    },
    {
        "id": 522,
        "names": {
            "en": "blitzle",
            "ko": "줄뮤마",
            "ja": "シママ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/522.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/522.png"
        },
        "types": [
            "13"
        ]
    },
    {
        "id": 523,
        "names": {
            "en": "zebstrika",
            "ko": "제브라이카",
            "ja": "ゼブライカ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/523.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/523.png"
        },
        "types": [
            "13"
        ]
    },
    {
        "id": 524,
        "names": {
            "en": "roggenrola",
            "ko": "단굴",
            "ja": "ダンゴロ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/524.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/524.png"
        },
        "types": [
            "6"
        ]
    },
    {
        "id": 525,
        "names": {
            "en": "boldore",
            "ko": "암트르",
            "ja": "ガントル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/525.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/525.png"
        },
        "types": [
            "6"
        ]
    },
    {
        "id": 526,
        "names": {
            "en": "gigalith",
            "ko": "기가이어스",
            "ja": "ギガイアス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/526.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/526.png"
        },
        "types": [
            "6"
        ]
    },
    {
        "id": 527,
        "names": {
            "en": "woobat",
            "ko": "또르박쥐",
            "ja": "コロモリ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/527.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/527.png"
        },
        "types": [
            "14",
            "3"
        ]
    },
    {
        "id": 528,
        "names": {
            "en": "swoobat",
            "ko": "맘박쥐",
            "ja": "ココロモリ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/528.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/528.png"
        },
        "types": [
            "14",
            "3"
        ]
    },
    {
        "id": 529,
        "names": {
            "en": "drilbur",
            "ko": "두더류",
            "ja": "モグリュー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/529.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/529.png"
        },
        "types": [
            "5"
        ]
    },
    {
        "id": 530,
        "names": {
            "en": "excadrill",
            "ko": "몰드류",
            "ja": "ドリュウズ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/530.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/530.png"
        },
        "types": [
            "5",
            "9"
        ]
    },
    {
        "id": 531,
        "names": {
            "en": "audino",
            "ko": "다부니",
            "ja": "タブンネ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/531.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/531.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 532,
        "names": {
            "en": "timburr",
            "ko": "으랏차",
            "ja": "ドッコラー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/532.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/532.png"
        },
        "types": [
            "2"
        ]
    },
    {
        "id": 533,
        "names": {
            "en": "gurdurr",
            "ko": "토쇠골",
            "ja": "ドテッコツ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/533.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/533.png"
        },
        "types": [
            "2"
        ]
    },
    {
        "id": 534,
        "names": {
            "en": "conkeldurr",
            "ko": "노보청",
            "ja": "ローブシン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/534.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/534.png"
        },
        "types": [
            "2"
        ]
    },
    {
        "id": 535,
        "names": {
            "en": "tympole",
            "ko": "동챙이",
            "ja": "オタマロ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/535.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/535.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 536,
        "names": {
            "en": "palpitoad",
            "ko": "두까비",
            "ja": "ガマガル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/536.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/536.png"
        },
        "types": [
            "11",
            "5"
        ]
    },
    {
        "id": 537,
        "names": {
            "en": "seismitoad",
            "ko": "두빅굴",
            "ja": "ガマゲロゲ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/537.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/537.png"
        },
        "types": [
            "11",
            "5"
        ]
    },
    {
        "id": 538,
        "names": {
            "en": "throh",
            "ko": "던지미",
            "ja": "ナゲキ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/538.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/538.png"
        },
        "types": [
            "2"
        ]
    },
    {
        "id": 539,
        "names": {
            "en": "sawk",
            "ko": "타격귀",
            "ja": "ダゲキ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/539.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/539.png"
        },
        "types": [
            "2"
        ]
    },
    {
        "id": 540,
        "names": {
            "en": "sewaddle",
            "ko": "두르보",
            "ja": "クルミル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/540.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/540.png"
        },
        "types": [
            "7",
            "12"
        ]
    },
    {
        "id": 541,
        "names": {
            "en": "swadloon",
            "ko": "두르쿤",
            "ja": "クルマユ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/541.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/541.png"
        },
        "types": [
            "7",
            "12"
        ]
    },
    {
        "id": 542,
        "names": {
            "en": "leavanny",
            "ko": "모아머",
            "ja": "ハハコモリ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/542.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/542.png"
        },
        "types": [
            "7",
            "12"
        ]
    },
    {
        "id": 543,
        "names": {
            "en": "venipede",
            "ko": "마디네",
            "ja": "フシデ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/543.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/543.png"
        },
        "types": [
            "7",
            "4"
        ]
    },
    {
        "id": 544,
        "names": {
            "en": "whirlipede",
            "ko": "휠구",
            "ja": "ホイーガ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/544.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/544.png"
        },
        "types": [
            "7",
            "4"
        ]
    },
    {
        "id": 545,
        "names": {
            "en": "scolipede",
            "ko": "펜드라",
            "ja": "ペンドラー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/545.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/545.png"
        },
        "types": [
            "7",
            "4"
        ]
    },
    {
        "id": 546,
        "names": {
            "en": "cottonee",
            "ko": "소미안",
            "ja": "モンメン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/546.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/546.png"
        },
        "types": [
            "12",
            "18"
        ]
    },
    {
        "id": 547,
        "names": {
            "en": "whimsicott",
            "ko": "엘풍",
            "ja": "エルフーン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/547.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/547.png"
        },
        "types": [
            "12",
            "18"
        ]
    },
    {
        "id": 548,
        "names": {
            "en": "petilil",
            "ko": "치릴리",
            "ja": "チュリネ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/548.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/548.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 549,
        "names": {
            "en": "lilligant",
            "ko": "드레디어",
            "ja": "ドレディア"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/549.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/549.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 550,
        "names": {
            "en": "basculin",
            "ko": "배쓰나이",
            "ja": "バスラオ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/550.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/550.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 551,
        "names": {
            "en": "sandile",
            "ko": "깜눈크",
            "ja": "メグロコ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/551.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/551.png"
        },
        "types": [
            "5",
            "17"
        ]
    },
    {
        "id": 552,
        "names": {
            "en": "krokorok",
            "ko": "악비르",
            "ja": "ワルビル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/552.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/552.png"
        },
        "types": [
            "5",
            "17"
        ]
    },
    {
        "id": 553,
        "names": {
            "en": "krookodile",
            "ko": "악비아르",
            "ja": "ワルビアル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/553.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/553.png"
        },
        "types": [
            "5",
            "17"
        ]
    },
    {
        "id": 554,
        "names": {
            "en": "darumaka",
            "ko": "달막화",
            "ja": "ダルマッカ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/554.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/554.png"
        },
        "types": [
            "10"
        ]
    },
    {
        "id": 555,
        "names": {
            "en": "darmanitan",
            "ko": "불비달마",
            "ja": "ヒヒダルマ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/555.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/555.png"
        },
        "types": [
            "10"
        ]
    },
    {
        "id": 556,
        "names": {
            "en": "maractus",
            "ko": "마라카치",
            "ja": "マラカッチ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/556.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/556.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 557,
        "names": {
            "en": "dwebble",
            "ko": "돌살이",
            "ja": "イシズマイ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/557.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/557.png"
        },
        "types": [
            "7",
            "6"
        ]
    },
    {
        "id": 558,
        "names": {
            "en": "crustle",
            "ko": "암팰리스",
            "ja": "イワパレス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/558.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/558.png"
        },
        "types": [
            "7",
            "6"
        ]
    },
    {
        "id": 559,
        "names": {
            "en": "scraggy",
            "ko": "곤율랭",
            "ja": "ズルッグ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/559.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/559.png"
        },
        "types": [
            "17",
            "2"
        ]
    },
    {
        "id": 560,
        "names": {
            "en": "scrafty",
            "ko": "곤율거니",
            "ja": "ズルズキン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/560.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/560.png"
        },
        "types": [
            "17",
            "2"
        ]
    },
    {
        "id": 561,
        "names": {
            "en": "sigilyph",
            "ko": "심보러",
            "ja": "シンボラー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/561.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/561.png"
        },
        "types": [
            "14",
            "3"
        ]
    },
    {
        "id": 562,
        "names": {
            "en": "yamask",
            "ko": "데스마스",
            "ja": "デスマス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/562.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/562.png"
        },
        "types": [
            "8"
        ]
    },
    {
        "id": 563,
        "names": {
            "en": "cofagrigus",
            "ko": "데스니칸",
            "ja": "デスカーン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/563.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/563.png"
        },
        "types": [
            "8"
        ]
    },
    {
        "id": 564,
        "names": {
            "en": "tirtouga",
            "ko": "프로토가",
            "ja": "プロトーガ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/564.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/564.png"
        },
        "types": [
            "11",
            "6"
        ]
    },
    {
        "id": 565,
        "names": {
            "en": "carracosta",
            "ko": "늑골라",
            "ja": "アバゴーラ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/565.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/565.png"
        },
        "types": [
            "11",
            "6"
        ]
    },
    {
        "id": 566,
        "names": {
            "en": "archen",
            "ko": "아켄",
            "ja": "アーケン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/566.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/566.png"
        },
        "types": [
            "6",
            "3"
        ]
    },
    {
        "id": 567,
        "names": {
            "en": "archeops",
            "ko": "아케오스",
            "ja": "アーケオス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/567.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/567.png"
        },
        "types": [
            "6",
            "3"
        ]
    },
    {
        "id": 568,
        "names": {
            "en": "trubbish",
            "ko": "깨봉이",
            "ja": "ヤブクロン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/568.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/568.png"
        },
        "types": [
            "4"
        ]
    },
    {
        "id": 569,
        "names": {
            "en": "garbodor",
            "ko": "더스트나",
            "ja": "ダストダス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/569.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/569.png"
        },
        "types": [
            "4"
        ]
    },
    {
        "id": 570,
        "names": {
            "en": "zorua",
            "ko": "조로아",
            "ja": "ゾロア"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/570.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/570.png"
        },
        "types": [
            "17"
        ]
    },
    {
        "id": 571,
        "names": {
            "en": "zoroark",
            "ko": "조로아크",
            "ja": "ゾロアーク"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/571.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/571.png"
        },
        "types": [
            "17"
        ]
    },
    {
        "id": 572,
        "names": {
            "en": "minccino",
            "ko": "치라미",
            "ja": "チラーミィ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/572.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/572.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 573,
        "names": {
            "en": "cinccino",
            "ko": "치라치노",
            "ja": "チラチーノ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/573.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/573.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 574,
        "names": {
            "en": "gothita",
            "ko": "고디탱",
            "ja": "ゴチム"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/574.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/574.png"
        },
        "types": [
            "14"
        ]
    },
    {
        "id": 575,
        "names": {
            "en": "gothorita",
            "ko": "고디보미",
            "ja": "ゴチミル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/575.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/575.png"
        },
        "types": [
            "14"
        ]
    },
    {
        "id": 576,
        "names": {
            "en": "gothitelle",
            "ko": "고디모아젤",
            "ja": "ゴチルゼル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/576.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/576.png"
        },
        "types": [
            "14"
        ]
    },
    {
        "id": 577,
        "names": {
            "en": "solosis",
            "ko": "유니란",
            "ja": "ユニラン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/577.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/577.png"
        },
        "types": [
            "14"
        ]
    },
    {
        "id": 578,
        "names": {
            "en": "duosion",
            "ko": "듀란",
            "ja": "ダブラン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/578.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/578.png"
        },
        "types": [
            "14"
        ]
    },
    {
        "id": 579,
        "names": {
            "en": "reuniclus",
            "ko": "란쿨루스",
            "ja": "ランクルス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/579.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/579.png"
        },
        "types": [
            "14"
        ]
    },
    {
        "id": 580,
        "names": {
            "en": "ducklett",
            "ko": "꼬지보리",
            "ja": "コアルヒー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/580.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/580.png"
        },
        "types": [
            "11",
            "3"
        ]
    },
    {
        "id": 581,
        "names": {
            "en": "swanna",
            "ko": "스완나",
            "ja": "スワンナ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/581.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/581.png"
        },
        "types": [
            "11",
            "3"
        ]
    },
    {
        "id": 582,
        "names": {
            "en": "vanillite",
            "ko": "바닐프티",
            "ja": "バニプッチ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/582.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/582.png"
        },
        "types": [
            "15"
        ]
    },
    {
        "id": 583,
        "names": {
            "en": "vanillish",
            "ko": "바닐리치",
            "ja": "バニリッチ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/583.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/583.png"
        },
        "types": [
            "15"
        ]
    },
    {
        "id": 584,
        "names": {
            "en": "vanilluxe",
            "ko": "배바닐라",
            "ja": "バイバニラ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/584.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/584.png"
        },
        "types": [
            "15"
        ]
    },
    {
        "id": 585,
        "names": {
            "en": "deerling",
            "ko": "사철록",
            "ja": "シキジカ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/585.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/585.png"
        },
        "types": [
            "1",
            "12"
        ]
    },
    {
        "id": 586,
        "names": {
            "en": "sawsbuck",
            "ko": "바라철록",
            "ja": "メブキジカ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/586.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/586.png"
        },
        "types": [
            "1",
            "12"
        ]
    },
    {
        "id": 587,
        "names": {
            "en": "emolga",
            "ko": "에몽가",
            "ja": "エモンガ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/587.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/587.png"
        },
        "types": [
            "13",
            "3"
        ]
    },
    {
        "id": 588,
        "names": {
            "en": "karrablast",
            "ko": "딱정곤",
            "ja": "カブルモ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/588.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/588.png"
        },
        "types": [
            "7"
        ]
    },
    {
        "id": 589,
        "names": {
            "en": "escavalier",
            "ko": "슈바르고",
            "ja": "シュバルゴ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/589.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/589.png"
        },
        "types": [
            "7",
            "9"
        ]
    },
    {
        "id": 590,
        "names": {
            "en": "foongus",
            "ko": "깜놀버슬",
            "ja": "タマゲタケ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/590.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/590.png"
        },
        "types": [
            "12",
            "4"
        ]
    },
    {
        "id": 591,
        "names": {
            "en": "amoonguss",
            "ko": "뽀록나",
            "ja": "モロバレル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/591.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/591.png"
        },
        "types": [
            "12",
            "4"
        ]
    },
    {
        "id": 592,
        "names": {
            "en": "frillish",
            "ko": "탱그릴",
            "ja": "プルリル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/592.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/592.png"
        },
        "types": [
            "11",
            "8"
        ]
    },
    {
        "id": 593,
        "names": {
            "en": "jellicent",
            "ko": "탱탱겔",
            "ja": "ブルンゲル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/593.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/593.png"
        },
        "types": [
            "11",
            "8"
        ]
    },
    {
        "id": 594,
        "names": {
            "en": "alomomola",
            "ko": "맘복치",
            "ja": "ママンボウ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/594.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/594.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 595,
        "names": {
            "en": "joltik",
            "ko": "파쪼옥",
            "ja": "バチュル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/595.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/595.png"
        },
        "types": [
            "7",
            "13"
        ]
    },
    {
        "id": 596,
        "names": {
            "en": "galvantula",
            "ko": "전툴라",
            "ja": "デンチュラ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/596.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/596.png"
        },
        "types": [
            "7",
            "13"
        ]
    },
    {
        "id": 597,
        "names": {
            "en": "ferroseed",
            "ko": "철시드",
            "ja": "テッシード"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/597.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/597.png"
        },
        "types": [
            "12",
            "9"
        ]
    },
    {
        "id": 598,
        "names": {
            "en": "ferrothorn",
            "ko": "너트령",
            "ja": "ナットレイ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/598.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/598.png"
        },
        "types": [
            "12",
            "9"
        ]
    },
    {
        "id": 599,
        "names": {
            "en": "klink",
            "ko": "기어르",
            "ja": "ギアル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/599.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/599.png"
        },
        "types": [
            "9"
        ]
    },
    {
        "id": 600,
        "names": {
            "en": "klang",
            "ko": "기기어르",
            "ja": "ギギアル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/600.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/600.png"
        },
        "types": [
            "9"
        ]
    },
    {
        "id": 601,
        "names": {
            "en": "klinklang",
            "ko": "기기기어르",
            "ja": "ギギギアル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/601.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/601.png"
        },
        "types": [
            "9"
        ]
    },
    {
        "id": 602,
        "names": {
            "en": "tynamo",
            "ko": "저리어",
            "ja": "シビシラス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/602.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/602.png"
        },
        "types": [
            "13"
        ]
    },
    {
        "id": 603,
        "names": {
            "en": "eelektrik",
            "ko": "저리릴",
            "ja": "シビビール"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/603.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/603.png"
        },
        "types": [
            "13"
        ]
    },
    {
        "id": 604,
        "names": {
            "en": "eelektross",
            "ko": "저리더프",
            "ja": "シビルドン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/604.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/604.png"
        },
        "types": [
            "13"
        ]
    },
    {
        "id": 605,
        "names": {
            "en": "elgyem",
            "ko": "리그레",
            "ja": "リグレー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/605.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/605.png"
        },
        "types": [
            "14"
        ]
    },
    {
        "id": 606,
        "names": {
            "en": "beheeyem",
            "ko": "벰크",
            "ja": "オーベム"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/606.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/606.png"
        },
        "types": [
            "14"
        ]
    },
    {
        "id": 607,
        "names": {
            "en": "litwick",
            "ko": "불켜미",
            "ja": "ヒトモシ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/607.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/607.png"
        },
        "types": [
            "8",
            "10"
        ]
    },
    {
        "id": 608,
        "names": {
            "en": "lampent",
            "ko": "램프라",
            "ja": "ランプラー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/608.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/608.png"
        },
        "types": [
            "8",
            "10"
        ]
    },
    {
        "id": 609,
        "names": {
            "en": "chandelure",
            "ko": "샹델라",
            "ja": "シャンデラ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/609.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/609.png"
        },
        "types": [
            "8",
            "10"
        ]
    },
    {
        "id": 610,
        "names": {
            "en": "axew",
            "ko": "터검니",
            "ja": "キバゴ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/610.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/610.png"
        },
        "types": [
            "16"
        ]
    },
    {
        "id": 611,
        "names": {
            "en": "fraxure",
            "ko": "액슨도",
            "ja": "オノンド"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/611.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/611.png"
        },
        "types": [
            "16"
        ]
    },
    {
        "id": 612,
        "names": {
            "en": "haxorus",
            "ko": "액스라이즈",
            "ja": "オノノクス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/612.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/612.png"
        },
        "types": [
            "16"
        ]
    },
    {
        "id": 613,
        "names": {
            "en": "cubchoo",
            "ko": "코고미",
            "ja": "クマシュン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/613.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/613.png"
        },
        "types": [
            "15"
        ]
    },
    {
        "id": 614,
        "names": {
            "en": "beartic",
            "ko": "툰베어",
            "ja": "ツンベアー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/614.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/614.png"
        },
        "types": [
            "15"
        ]
    },
    {
        "id": 615,
        "names": {
            "en": "cryogonal",
            "ko": "프리지오",
            "ja": "フリージオ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/615.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/615.png"
        },
        "types": [
            "15"
        ]
    },
    {
        "id": 616,
        "names": {
            "en": "shelmet",
            "ko": "쪼마리",
            "ja": "チョボマキ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/616.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/616.png"
        },
        "types": [
            "7"
        ]
    },
    {
        "id": 617,
        "names": {
            "en": "accelgor",
            "ko": "어지리더",
            "ja": "アギルダー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/617.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/617.png"
        },
        "types": [
            "7"
        ]
    },
    {
        "id": 618,
        "names": {
            "en": "stunfisk",
            "ko": "메더",
            "ja": "マッギョ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/618.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/618.png"
        },
        "types": [
            "5",
            "13"
        ]
    },
    {
        "id": 619,
        "names": {
            "en": "mienfoo",
            "ko": "비조푸",
            "ja": "コジョフー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/619.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/619.png"
        },
        "types": [
            "2"
        ]
    },
    {
        "id": 620,
        "names": {
            "en": "mienshao",
            "ko": "비조도",
            "ja": "コジョンド"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/620.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/620.png"
        },
        "types": [
            "2"
        ]
    },
    {
        "id": 621,
        "names": {
            "en": "druddigon",
            "ko": "크리만",
            "ja": "クリムガン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/621.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/621.png"
        },
        "types": [
            "16"
        ]
    },
    {
        "id": 622,
        "names": {
            "en": "golett",
            "ko": "골비람",
            "ja": "ゴビット"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/622.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/622.png"
        },
        "types": [
            "5",
            "8"
        ]
    },
    {
        "id": 623,
        "names": {
            "en": "golurk",
            "ko": "골루그",
            "ja": "ゴルーグ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/623.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/623.png"
        },
        "types": [
            "5",
            "8"
        ]
    },
    {
        "id": 624,
        "names": {
            "en": "pawniard",
            "ko": "자망칼",
            "ja": "コマタナ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/624.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/624.png"
        },
        "types": [
            "17",
            "9"
        ]
    },
    {
        "id": 625,
        "names": {
            "en": "bisharp",
            "ko": "절각참",
            "ja": "キリキザン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/625.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/625.png"
        },
        "types": [
            "17",
            "9"
        ]
    },
    {
        "id": 626,
        "names": {
            "en": "bouffalant",
            "ko": "버프론",
            "ja": "バッフロン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/626.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/626.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 627,
        "names": {
            "en": "rufflet",
            "ko": "수리둥보",
            "ja": "ワシボン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/627.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/627.png"
        },
        "types": [
            "1",
            "3"
        ]
    },
    {
        "id": 628,
        "names": {
            "en": "braviary",
            "ko": "워글",
            "ja": "ウォーグル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/628.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/628.png"
        },
        "types": [
            "1",
            "3"
        ]
    },
    {
        "id": 629,
        "names": {
            "en": "vullaby",
            "ko": "벌차이",
            "ja": "バルチャイ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/629.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/629.png"
        },
        "types": [
            "17",
            "3"
        ]
    },
    {
        "id": 630,
        "names": {
            "en": "mandibuzz",
            "ko": "버랜지나",
            "ja": "バルジーナ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/630.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/630.png"
        },
        "types": [
            "17",
            "3"
        ]
    },
    {
        "id": 631,
        "names": {
            "en": "heatmor",
            "ko": "앤티골",
            "ja": "クイタラン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/631.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/631.png"
        },
        "types": [
            "10"
        ]
    },
    {
        "id": 632,
        "names": {
            "en": "durant",
            "ko": "아이앤트",
            "ja": "アイアント"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/632.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/632.png"
        },
        "types": [
            "7",
            "9"
        ]
    },
    {
        "id": 633,
        "names": {
            "en": "deino",
            "ko": "모노두",
            "ja": "モノズ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/633.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/633.png"
        },
        "types": [
            "17",
            "16"
        ]
    },
    {
        "id": 634,
        "names": {
            "en": "zweilous",
            "ko": "디헤드",
            "ja": "ジヘッド"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/634.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/634.png"
        },
        "types": [
            "17",
            "16"
        ]
    },
    {
        "id": 635,
        "names": {
            "en": "hydreigon",
            "ko": "삼삼드래",
            "ja": "サザンドラ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/635.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/635.png"
        },
        "types": [
            "17",
            "16"
        ]
    },
    {
        "id": 636,
        "names": {
            "en": "larvesta",
            "ko": "활화르바",
            "ja": "メラルバ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/636.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/636.png"
        },
        "types": [
            "7",
            "10"
        ]
    },
    {
        "id": 637,
        "names": {
            "en": "volcarona",
            "ko": "불카모스",
            "ja": "ウルガモス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/637.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/637.png"
        },
        "types": [
            "7",
            "10"
        ]
    },
    {
        "id": 638,
        "names": {
            "en": "cobalion",
            "ko": "코바르온",
            "ja": "コバルオン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/638.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/638.png"
        },
        "types": [
            "9",
            "2"
        ]
    },
    {
        "id": 639,
        "names": {
            "en": "terrakion",
            "ko": "테라키온",
            "ja": "テラキオン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/639.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/639.png"
        },
        "types": [
            "6",
            "2"
        ]
    },
    {
        "id": 640,
        "names": {
            "en": "virizion",
            "ko": "비리디온",
            "ja": "ビリジオン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/640.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/640.png"
        },
        "types": [
            "12",
            "2"
        ]
    },
    {
        "id": 641,
        "names": {
            "en": "tornadus",
            "ko": "토네로스",
            "ja": "トルネロス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/641.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/641.png"
        },
        "types": [
            "3"
        ]
    },
    {
        "id": 642,
        "names": {
            "en": "thundurus",
            "ko": "볼트로스",
            "ja": "ボルトロス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/642.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/642.png"
        },
        "types": [
            "13",
            "3"
        ]
    },
    {
        "id": 643,
        "names": {
            "en": "reshiram",
            "ko": "레시라무",
            "ja": "レシラム"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/643.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/643.png"
        },
        "types": [
            "16",
            "10"
        ]
    },
    {
        "id": 644,
        "names": {
            "en": "zekrom",
            "ko": "제크로무",
            "ja": "ゼクロム"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/644.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/644.png"
        },
        "types": [
            "16",
            "13"
        ]
    },
    {
        "id": 645,
        "names": {
            "en": "landorus",
            "ko": "랜드로스",
            "ja": "ランドロス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/645.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/645.png"
        },
        "types": [
            "5",
            "3"
        ]
    },
    {
        "id": 646,
        "names": {
            "en": "kyurem",
            "ko": "큐레무",
            "ja": "キュレム"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/646.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/646.png"
        },
        "types": [
            "16",
            "15"
        ]
    },
    {
        "id": 647,
        "names": {
            "en": "keldeo",
            "ko": "케르디오",
            "ja": "ケルディオ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/647.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/647.png"
        },
        "types": [
            "11",
            "2"
        ]
    },
    {
        "id": 648,
        "names": {
            "en": "meloetta",
            "ko": "메로엣타",
            "ja": "メロエッタ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/648.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/648.png"
        },
        "types": [
            "1",
            "14"
        ]
    },
    {
        "id": 649,
        "names": {
            "en": "genesect",
            "ko": "게노세크트",
            "ja": "ゲノセクト"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/649.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/649.png"
        },
        "types": [
            "7",
            "9"
        ]
    },
    {
        "id": 650,
        "names": {
            "en": "chespin",
            "ko": "도치마론",
            "ja": "ハリマロン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/650.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/650.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 651,
        "names": {
            "en": "quilladin",
            "ko": "도치보구",
            "ja": "ハリボーグ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/651.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/651.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 652,
        "names": {
            "en": "chesnaught",
            "ko": "브리가론",
            "ja": "ブリガロン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/652.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/652.png"
        },
        "types": [
            "12",
            "2"
        ]
    },
    {
        "id": 653,
        "names": {
            "en": "fennekin",
            "ko": "푸호꼬",
            "ja": "フォッコ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/653.png"
        },
        "types": [
            "10"
        ]
    },
    {
        "id": 654,
        "names": {
            "en": "braixen",
            "ko": "테르나",
            "ja": "テールナー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/654.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/654.png"
        },
        "types": [
            "10"
        ]
    },
    {
        "id": 655,
        "names": {
            "en": "delphox",
            "ko": "마폭시",
            "ja": "マフォクシー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/655.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/655.png"
        },
        "types": [
            "10",
            "14"
        ]
    },
    {
        "id": 656,
        "names": {
            "en": "froakie",
            "ko": "개구마르",
            "ja": "ケロマツ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/656.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/656.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 657,
        "names": {
            "en": "frogadier",
            "ko": "개굴반장",
            "ja": "ゲコガシラ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/657.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/657.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 658,
        "names": {
            "en": "greninja",
            "ko": "개굴닌자",
            "ja": "ゲッコウガ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/658.png"
        },
        "types": [
            "11",
            "17"
        ]
    },
    {
        "id": 659,
        "names": {
            "en": "bunnelby",
            "ko": "파르빗",
            "ja": "ホルビー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/659.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/659.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 660,
        "names": {
            "en": "diggersby",
            "ko": "파르토",
            "ja": "ホルード"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/660.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/660.png"
        },
        "types": [
            "1",
            "5"
        ]
    },
    {
        "id": 661,
        "names": {
            "en": "fletchling",
            "ko": "화살꼬빈",
            "ja": "ヤヤコマ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/661.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/661.png"
        },
        "types": [
            "1",
            "3"
        ]
    },
    {
        "id": 662,
        "names": {
            "en": "fletchinder",
            "ko": "불화살빈",
            "ja": "ヒノヤコマ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/662.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/662.png"
        },
        "types": [
            "10",
            "3"
        ]
    },
    {
        "id": 663,
        "names": {
            "en": "talonflame",
            "ko": "파이어로",
            "ja": "ファイアロー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/663.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/663.png"
        },
        "types": [
            "10",
            "3"
        ]
    },
    {
        "id": 664,
        "names": {
            "en": "scatterbug",
            "ko": "분이벌레",
            "ja": "コフキムシ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/664.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/664.png"
        },
        "types": [
            "7"
        ]
    },
    {
        "id": 665,
        "names": {
            "en": "spewpa",
            "ko": "분떠도리",
            "ja": "コフーライ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/665.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/665.png"
        },
        "types": [
            "7"
        ]
    },
    {
        "id": 666,
        "names": {
            "en": "vivillon",
            "ko": "비비용",
            "ja": "ビビヨン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/666.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/666.png"
        },
        "types": [
            "7",
            "3"
        ]
    },
    {
        "id": 667,
        "names": {
            "en": "litleo",
            "ko": "레오꼬",
            "ja": "シシコ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/667.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/667.png"
        },
        "types": [
            "10",
            "1"
        ]
    },
    {
        "id": 668,
        "names": {
            "en": "pyroar",
            "ko": "화염레오",
            "ja": "カエンジシ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/668.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/668.png"
        },
        "types": [
            "10",
            "1"
        ]
    },
    {
        "id": 669,
        "names": {
            "en": "flabebe",
            "ko": "플라베베",
            "ja": "フラベベ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/669.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/669.png"
        },
        "types": [
            "18"
        ]
    },
    {
        "id": 670,
        "names": {
            "en": "floette",
            "ko": "플라엣테",
            "ja": "フラエッテ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/670.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/670.png"
        },
        "types": [
            "18"
        ]
    },
    {
        "id": 671,
        "names": {
            "en": "florges",
            "ko": "플라제스",
            "ja": "フラージェス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/671.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/671.png"
        },
        "types": [
            "18"
        ]
    },
    {
        "id": 672,
        "names": {
            "en": "skiddo",
            "ko": "메이클",
            "ja": "メェークル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/672.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/672.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 673,
        "names": {
            "en": "gogoat",
            "ko": "고고트",
            "ja": "ゴーゴート"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/673.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/673.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 674,
        "names": {
            "en": "pancham",
            "ko": "판짱",
            "ja": "ヤンチャム"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/674.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/674.png"
        },
        "types": [
            "2"
        ]
    },
    {
        "id": 675,
        "names": {
            "en": "pangoro",
            "ko": "부란다",
            "ja": "ゴロンダ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/675.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/675.png"
        },
        "types": [
            "2",
            "17"
        ]
    },
    {
        "id": 676,
        "names": {
            "en": "furfrou",
            "ko": "트리미앙",
            "ja": "トリミアン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/676.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/676.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 677,
        "names": {
            "en": "espurr",
            "ko": "냐스퍼",
            "ja": "ニャスパー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/677.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/677.png"
        },
        "types": [
            "14"
        ]
    },
    {
        "id": 678,
        "names": {
            "en": "meowstic",
            "ko": "냐오닉스",
            "ja": "ニャオニクス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/678.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/678.png"
        },
        "types": [
            "14"
        ]
    },
    {
        "id": 679,
        "names": {
            "en": "honedge",
            "ko": "단칼빙",
            "ja": "ヒトツキ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/679.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/679.png"
        },
        "types": [
            "9",
            "8"
        ]
    },
    {
        "id": 680,
        "names": {
            "en": "doublade",
            "ko": "쌍검킬",
            "ja": "ニダンギル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/680.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/680.png"
        },
        "types": [
            "9",
            "8"
        ]
    },
    {
        "id": 681,
        "names": {
            "en": "aegislash",
            "ko": "킬가르도",
            "ja": "ギルガルド"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/681.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/681.png"
        },
        "types": [
            "9",
            "8"
        ]
    },
    {
        "id": 682,
        "names": {
            "en": "spritzee",
            "ko": "슈쁘",
            "ja": "シュシュプ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/682.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/682.png"
        },
        "types": [
            "18"
        ]
    },
    {
        "id": 683,
        "names": {
            "en": "aromatisse",
            "ko": "프레프티르",
            "ja": "フレフワン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/683.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/683.png"
        },
        "types": [
            "18"
        ]
    },
    {
        "id": 684,
        "names": {
            "en": "swirlix",
            "ko": "나룸퍼프",
            "ja": "ペロッパフ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/684.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/684.png"
        },
        "types": [
            "18"
        ]
    },
    {
        "id": 685,
        "names": {
            "en": "slurpuff",
            "ko": "나루림",
            "ja": "ペロリーム"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/685.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/685.png"
        },
        "types": [
            "18"
        ]
    },
    {
        "id": 686,
        "names": {
            "en": "inkay",
            "ko": "오케이징",
            "ja": "マーイーカ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/686.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/686.png"
        },
        "types": [
            "17",
            "14"
        ]
    },
    {
        "id": 687,
        "names": {
            "en": "malamar",
            "ko": "칼라마네로",
            "ja": "カラマネロ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/687.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/687.png"
        },
        "types": [
            "17",
            "14"
        ]
    },
    {
        "id": 688,
        "names": {
            "en": "binacle",
            "ko": "거북손손",
            "ja": "カメテテ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/688.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/688.png"
        },
        "types": [
            "6",
            "11"
        ]
    },
    {
        "id": 689,
        "names": {
            "en": "barbaracle",
            "ko": "거북손데스",
            "ja": "ガメノデス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/689.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/689.png"
        },
        "types": [
            "6",
            "11"
        ]
    },
    {
        "id": 690,
        "names": {
            "en": "skrelp",
            "ko": "수레기",
            "ja": "クズモー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/690.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/690.png"
        },
        "types": [
            "4",
            "11"
        ]
    },
    {
        "id": 691,
        "names": {
            "en": "dragalge",
            "ko": "드래캄",
            "ja": "ドラミドロ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/691.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/691.png"
        },
        "types": [
            "4",
            "16"
        ]
    },
    {
        "id": 692,
        "names": {
            "en": "clauncher",
            "ko": "완철포",
            "ja": "ウデッポウ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/692.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/692.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 693,
        "names": {
            "en": "clawitzer",
            "ko": "블로스터",
            "ja": "ブロスター"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/693.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/693.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 694,
        "names": {
            "en": "helioptile",
            "ko": "목도리키텔",
            "ja": "エリキテル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/694.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/694.png"
        },
        "types": [
            "13",
            "1"
        ]
    },
    {
        "id": 695,
        "names": {
            "en": "heliolisk",
            "ko": "일레도리자드",
            "ja": "エレザード"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/695.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/695.png"
        },
        "types": [
            "13",
            "1"
        ]
    },
    {
        "id": 696,
        "names": {
            "en": "tyrunt",
            "ko": "티고라스",
            "ja": "チゴラス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/696.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/696.png"
        },
        "types": [
            "6",
            "16"
        ]
    },
    {
        "id": 697,
        "names": {
            "en": "tyrantrum",
            "ko": "견고라스",
            "ja": "ガチゴラス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/697.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/697.png"
        },
        "types": [
            "6",
            "16"
        ]
    },
    {
        "id": 698,
        "names": {
            "en": "amaura",
            "ko": "아마루스",
            "ja": "アマルス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/698.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/698.png"
        },
        "types": [
            "6",
            "15"
        ]
    },
    {
        "id": 699,
        "names": {
            "en": "aurorus",
            "ko": "아마루르가",
            "ja": "アマルルガ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/699.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/699.png"
        },
        "types": [
            "6",
            "15"
        ]
    },
    {
        "id": 700,
        "names": {
            "en": "sylveon",
            "ko": "님피아",
            "ja": "ニンフィア"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/700.png"
        },
        "types": [
            "18"
        ]
    },
    {
        "id": 701,
        "names": {
            "en": "hawlucha",
            "ko": "루차불",
            "ja": "ルチャブル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/701.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/701.png"
        },
        "types": [
            "2",
            "3"
        ]
    },
    {
        "id": 702,
        "names": {
            "en": "dedenne",
            "ko": "데덴네",
            "ja": "デデンネ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/702.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/702.png"
        },
        "types": [
            "13",
            "18"
        ]
    },
    {
        "id": 703,
        "names": {
            "en": "carbink",
            "ko": "멜리시",
            "ja": "メレシー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/703.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/703.png"
        },
        "types": [
            "6",
            "18"
        ]
    },
    {
        "id": 704,
        "names": {
            "en": "goomy",
            "ko": "미끄메라",
            "ja": "ヌメラ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/704.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/704.png"
        },
        "types": [
            "16"
        ]
    },
    {
        "id": 705,
        "names": {
            "en": "sliggoo",
            "ko": "미끄네일",
            "ja": "ヌメイル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/705.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/705.png"
        },
        "types": [
            "16"
        ]
    },
    {
        "id": 706,
        "names": {
            "en": "goodra",
            "ko": "미끄래곤",
            "ja": "ヌメルゴン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/706.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/706.png"
        },
        "types": [
            "16"
        ]
    },
    {
        "id": 707,
        "names": {
            "en": "klefki",
            "ko": "클레피",
            "ja": "クレッフィ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/707.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/707.png"
        },
        "types": [
            "9",
            "18"
        ]
    },
    {
        "id": 708,
        "names": {
            "en": "phantump",
            "ko": "나목령",
            "ja": "ボクレー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/708.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/708.png"
        },
        "types": [
            "8",
            "12"
        ]
    },
    {
        "id": 709,
        "names": {
            "en": "trevenant",
            "ko": "대로트",
            "ja": "オーロット"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/709.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/709.png"
        },
        "types": [
            "8",
            "12"
        ]
    },
    {
        "id": 710,
        "names": {
            "en": "pumpkaboo",
            "ko": "호바귀",
            "ja": "バケッチャ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/710.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/710.png"
        },
        "types": [
            "8",
            "12"
        ]
    },
    {
        "id": 711,
        "names": {
            "en": "gourgeist",
            "ko": "펌킨인",
            "ja": "パンプジン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/711.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/711.png"
        },
        "types": [
            "8",
            "12"
        ]
    },
    {
        "id": 712,
        "names": {
            "en": "bergmite",
            "ko": "꽁어름",
            "ja": "カチコール"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/712.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/712.png"
        },
        "types": [
            "15"
        ]
    },
    {
        "id": 713,
        "names": {
            "en": "avalugg",
            "ko": "크레베이스",
            "ja": "クレベース"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/713.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/713.png"
        },
        "types": [
            "15"
        ]
    },
    {
        "id": 714,
        "names": {
            "en": "noibat",
            "ko": "음뱃",
            "ja": "オンバット"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/714.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/714.png"
        },
        "types": [
            "3",
            "16"
        ]
    },
    {
        "id": 715,
        "names": {
            "en": "noivern",
            "ko": "음번",
            "ja": "オンバーン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/715.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/715.png"
        },
        "types": [
            "3",
            "16"
        ]
    },
    {
        "id": 716,
        "names": {
            "en": "xerneas",
            "ko": "제르네아스",
            "ja": "ゼルネアス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/716.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/716.png"
        },
        "types": [
            "18"
        ]
    },
    {
        "id": 717,
        "names": {
            "en": "yveltal",
            "ko": "이벨타르",
            "ja": "イベルタル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/717.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/717.png"
        },
        "types": [
            "17",
            "3"
        ]
    },
    {
        "id": 718,
        "names": {
            "en": "zygarde",
            "ko": "지가르데",
            "ja": "ジガルデ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/718.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/718.png"
        },
        "types": [
            "16",
            "5"
        ]
    },
    {
        "id": 719,
        "names": {
            "en": "diancie",
            "ko": "디안시",
            "ja": "ディアンシー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/719.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/719.png"
        },
        "types": [
            "6",
            "18"
        ]
    },
    {
        "id": 720,
        "names": {
            "en": "hoopa",
            "ko": "후파",
            "ja": "フーパ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/720.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/720.png"
        },
        "types": [
            "14",
            "8"
        ]
    },
    {
        "id": 721,
        "names": {
            "en": "volcanion",
            "ko": "볼케니온",
            "ja": "ボルケニオン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/721.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/721.png"
        },
        "types": [
            "10",
            "11"
        ]
    },
    {
        "id": 722,
        "names": {
            "en": "rowlet",
            "ko": "나몰빼미",
            "ja": "モクロー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/722.png"
        },
        "types": [
            "12",
            "3"
        ]
    },
    {
        "id": 723,
        "names": {
            "en": "dartrix",
            "ko": "빼미스로우",
            "ja": "フクスロー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/723.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/723.png"
        },
        "types": [
            "12",
            "3"
        ]
    },
    {
        "id": 724,
        "names": {
            "en": "decidueye",
            "ko": "모크나이퍼",
            "ja": "ジュナイパー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/724.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/724.png"
        },
        "types": [
            "12",
            "8"
        ]
    },
    {
        "id": 725,
        "names": {
            "en": "litten",
            "ko": "냐오불",
            "ja": "ニャビー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/725.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/725.png"
        },
        "types": [
            "10"
        ]
    },
    {
        "id": 726,
        "names": {
            "en": "torracat",
            "ko": "냐오히트",
            "ja": "ニャヒート"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/726.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/726.png"
        },
        "types": [
            "10"
        ]
    },
    {
        "id": 727,
        "names": {
            "en": "incineroar",
            "ko": "어흥염",
            "ja": "ガオガエン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/727.png"
        },
        "types": [
            "10",
            "17"
        ]
    },
    {
        "id": 728,
        "names": {
            "en": "popplio",
            "ko": "누리공",
            "ja": "アシマリ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/728.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/728.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 729,
        "names": {
            "en": "brionne",
            "ko": "키요공",
            "ja": "オシャマリ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/729.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/729.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 730,
        "names": {
            "en": "primarina",
            "ko": "누리레느",
            "ja": "アシレーヌ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/730.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/730.png"
        },
        "types": [
            "11",
            "18"
        ]
    },
    {
        "id": 731,
        "names": {
            "en": "pikipek",
            "ko": "콕코구리",
            "ja": "ツツケラ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/731.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/731.png"
        },
        "types": [
            "1",
            "3"
        ]
    },
    {
        "id": 732,
        "names": {
            "en": "trumbeak",
            "ko": "크라파",
            "ja": "ケララッパ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/732.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/732.png"
        },
        "types": [
            "1",
            "3"
        ]
    },
    {
        "id": 733,
        "names": {
            "en": "toucannon",
            "ko": "왕큰부리",
            "ja": "ドデカバシ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/733.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/733.png"
        },
        "types": [
            "1",
            "3"
        ]
    },
    {
        "id": 734,
        "names": {
            "en": "yungoos",
            "ko": "영구스",
            "ja": "ヤングース"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/734.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/734.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 735,
        "names": {
            "en": "gumshoos",
            "ko": "형사구스",
            "ja": "デカグース"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/735.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/735.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 736,
        "names": {
            "en": "grubbin",
            "ko": "턱지충이",
            "ja": "アゴジムシ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/736.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/736.png"
        },
        "types": [
            "7"
        ]
    },
    {
        "id": 737,
        "names": {
            "en": "charjabug",
            "ko": "전지충이",
            "ja": "デンヂムシ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/737.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/737.png"
        },
        "types": [
            "7",
            "13"
        ]
    },
    {
        "id": 738,
        "names": {
            "en": "vikavolt",
            "ko": "투구뿌논",
            "ja": "クワガノン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/738.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/738.png"
        },
        "types": [
            "7",
            "13"
        ]
    },
    {
        "id": 739,
        "names": {
            "en": "crabrawler",
            "ko": "오기지게",
            "ja": "マケンカニ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/739.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/739.png"
        },
        "types": [
            "2"
        ]
    },
    {
        "id": 740,
        "names": {
            "en": "crabominable",
            "ko": "모단단게",
            "ja": "ケケンカニ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/740.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/740.png"
        },
        "types": [
            "2",
            "15"
        ]
    },
    {
        "id": 741,
        "names": {
            "en": "oricorio",
            "ko": "춤추새",
            "ja": "オドリドリ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/741.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/741.png"
        },
        "types": [
            "10",
            "3"
        ]
    },
    {
        "id": 742,
        "names": {
            "en": "cutiefly",
            "ko": "에블리",
            "ja": "アブリー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/742.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/742.png"
        },
        "types": [
            "7",
            "18"
        ]
    },
    {
        "id": 743,
        "names": {
            "en": "ribombee",
            "ko": "에리본",
            "ja": "アブリボン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/743.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/743.png"
        },
        "types": [
            "7",
            "18"
        ]
    },
    {
        "id": 744,
        "names": {
            "en": "rockruff",
            "ko": "암멍이",
            "ja": "イワンコ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/744.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/744.png"
        },
        "types": [
            "6"
        ]
    },
    {
        "id": 745,
        "names": {
            "en": "lycanroc",
            "ko": "루가루암",
            "ja": "ルガルガン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/745.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/745.png"
        },
        "types": [
            "6"
        ]
    },
    {
        "id": 746,
        "names": {
            "en": "wishiwashi",
            "ko": "약어리",
            "ja": "ヨワシ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/746.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/746.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 747,
        "names": {
            "en": "mareanie",
            "ko": "시마사리",
            "ja": "ヒドイデ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/747.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/747.png"
        },
        "types": [
            "4",
            "11"
        ]
    },
    {
        "id": 748,
        "names": {
            "en": "toxapex",
            "ko": "더시마사리",
            "ja": "ドヒドイデ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/748.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/748.png"
        },
        "types": [
            "4",
            "11"
        ]
    },
    {
        "id": 749,
        "names": {
            "en": "mudbray",
            "ko": "머드나기",
            "ja": "ドロバンコ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/749.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/749.png"
        },
        "types": [
            "5"
        ]
    },
    {
        "id": 750,
        "names": {
            "en": "mudsdale",
            "ko": "만마드",
            "ja": "バンバドロ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/750.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/750.png"
        },
        "types": [
            "5"
        ]
    },
    {
        "id": 751,
        "names": {
            "en": "dewpider",
            "ko": "물거미",
            "ja": "シズクモ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/751.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/751.png"
        },
        "types": [
            "11",
            "7"
        ]
    },
    {
        "id": 752,
        "names": {
            "en": "araquanid",
            "ko": "깨비물거미",
            "ja": "オニシズクモ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/752.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/752.png"
        },
        "types": [
            "11",
            "7"
        ]
    },
    {
        "id": 753,
        "names": {
            "en": "fomantis",
            "ko": "짜랑랑",
            "ja": "カリキリ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/753.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/753.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 754,
        "names": {
            "en": "lurantis",
            "ko": "라란티스",
            "ja": "ラランテス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/754.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/754.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 755,
        "names": {
            "en": "morelull",
            "ko": "자마슈",
            "ja": "ネマシュ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/755.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/755.png"
        },
        "types": [
            "12",
            "18"
        ]
    },
    {
        "id": 756,
        "names": {
            "en": "shiinotic",
            "ko": "마셰이드",
            "ja": "マシェード"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/756.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/756.png"
        },
        "types": [
            "12",
            "18"
        ]
    },
    {
        "id": 757,
        "names": {
            "en": "salandit",
            "ko": "야도뇽",
            "ja": "ヤトウモリ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/757.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/757.png"
        },
        "types": [
            "4",
            "10"
        ]
    },
    {
        "id": 758,
        "names": {
            "en": "salazzle",
            "ko": "염뉴트",
            "ja": "エンニュート"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/758.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/758.png"
        },
        "types": [
            "4",
            "10"
        ]
    },
    {
        "id": 759,
        "names": {
            "en": "stufful",
            "ko": "포곰곰",
            "ja": "ヌイコグマ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/759.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/759.png"
        },
        "types": [
            "1",
            "2"
        ]
    },
    {
        "id": 760,
        "names": {
            "en": "bewear",
            "ko": "이븐곰",
            "ja": "キテルグマ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/760.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/760.png"
        },
        "types": [
            "1",
            "2"
        ]
    },
    {
        "id": 761,
        "names": {
            "en": "bounsweet",
            "ko": "달콤아",
            "ja": "アマカジ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/761.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/761.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 762,
        "names": {
            "en": "steenee",
            "ko": "달무리나",
            "ja": "アママイコ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/762.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/762.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 763,
        "names": {
            "en": "tsareena",
            "ko": "달코퀸",
            "ja": "アマージョ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/763.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/763.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 764,
        "names": {
            "en": "comfey",
            "ko": "큐아링",
            "ja": "キュワワー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/764.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/764.png"
        },
        "types": [
            "18"
        ]
    },
    {
        "id": 765,
        "names": {
            "en": "oranguru",
            "ko": "하랑우탄",
            "ja": "ヤレユータン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/765.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/765.png"
        },
        "types": [
            "1",
            "14"
        ]
    },
    {
        "id": 766,
        "names": {
            "en": "passimian",
            "ko": "내던숭이",
            "ja": "ナゲツケサル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/766.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/766.png"
        },
        "types": [
            "2"
        ]
    },
    {
        "id": 767,
        "names": {
            "en": "wimpod",
            "ko": "꼬시레",
            "ja": "コソクムシ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/767.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/767.png"
        },
        "types": [
            "7",
            "11"
        ]
    },
    {
        "id": 768,
        "names": {
            "en": "golisopod",
            "ko": "갑주무사",
            "ja": "グソクムシャ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/768.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/768.png"
        },
        "types": [
            "7",
            "11"
        ]
    },
    {
        "id": 769,
        "names": {
            "en": "sandygast",
            "ko": "모래꿍",
            "ja": "スナバァ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/769.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/769.png"
        },
        "types": [
            "8",
            "5"
        ]
    },
    {
        "id": 770,
        "names": {
            "en": "palossand",
            "ko": "모래성이당",
            "ja": "シロデスナ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/770.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/770.png"
        },
        "types": [
            "8",
            "5"
        ]
    },
    {
        "id": 771,
        "names": {
            "en": "pyukumuku",
            "ko": "해무기",
            "ja": "ナマコブシ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/771.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/771.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 772,
        "names": {
            "en": "type-null",
            "ko": "타입:널",
            "ja": "タイプ：ヌル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/772.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/772.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 773,
        "names": {
            "en": "silvally",
            "ko": "실버디",
            "ja": "シルヴァディ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/773.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/773.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 774,
        "names": {
            "en": "minior",
            "ko": "메테노",
            "ja": "メテノ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/774.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/774.png"
        },
        "types": [
            "6",
            "3"
        ]
    },
    {
        "id": 775,
        "names": {
            "en": "komala",
            "ko": "자말라",
            "ja": "ネッコアラ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/775.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/775.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 776,
        "names": {
            "en": "turtonator",
            "ko": "폭거북스",
            "ja": "バクガメス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/776.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/776.png"
        },
        "types": [
            "10",
            "16"
        ]
    },
    {
        "id": 777,
        "names": {
            "en": "togedemaru",
            "ko": "토게데마루",
            "ja": "トゲデマル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/777.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/777.png"
        },
        "types": [
            "13",
            "9"
        ]
    },
    {
        "id": 778,
        "names": {
            "en": "mimikyu",
            "ko": "따라큐",
            "ja": "ミミッキュ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/778.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/778.png"
        },
        "types": [
            "8",
            "18"
        ]
    },
    {
        "id": 779,
        "names": {
            "en": "bruxish",
            "ko": "치갈기",
            "ja": "ハギギシリ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/779.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/779.png"
        },
        "types": [
            "11",
            "14"
        ]
    },
    {
        "id": 780,
        "names": {
            "en": "drampa",
            "ko": "할비롱",
            "ja": "ジジーロン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/780.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/780.png"
        },
        "types": [
            "1",
            "16"
        ]
    },
    {
        "id": 781,
        "names": {
            "en": "dhelmise",
            "ko": "타타륜",
            "ja": "ダダリン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/781.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/781.png"
        },
        "types": [
            "8",
            "12"
        ]
    },
    {
        "id": 782,
        "names": {
            "en": "jangmo-o",
            "ko": "짜랑꼬",
            "ja": "ジャラコ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/782.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/782.png"
        },
        "types": [
            "16"
        ]
    },
    {
        "id": 783,
        "names": {
            "en": "hakamo-o",
            "ko": "짜랑고우",
            "ja": "ジャランゴ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/783.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/783.png"
        },
        "types": [
            "16",
            "2"
        ]
    },
    {
        "id": 784,
        "names": {
            "en": "kommo-o",
            "ko": "짜랑고우거",
            "ja": "ジャラランガ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/784.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/784.png"
        },
        "types": [
            "16",
            "2"
        ]
    },
    {
        "id": 785,
        "names": {
            "en": "tapu-koko",
            "ko": "카푸꼬꼬꼭",
            "ja": "カプ・コケコ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/785.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/785.png"
        },
        "types": [
            "13",
            "18"
        ]
    },
    {
        "id": 786,
        "names": {
            "en": "tapu-lele",
            "ko": "카푸나비나",
            "ja": "カプ・テテフ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/786.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/786.png"
        },
        "types": [
            "14",
            "18"
        ]
    },
    {
        "id": 787,
        "names": {
            "en": "tapu-bulu",
            "ko": "카푸브루루",
            "ja": "カプ・ブルル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/787.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/787.png"
        },
        "types": [
            "12",
            "18"
        ]
    },
    {
        "id": 788,
        "names": {
            "en": "tapu-fini",
            "ko": "카푸느지느",
            "ja": "カプ・レヒレ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/788.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/788.png"
        },
        "types": [
            "11",
            "18"
        ]
    },
    {
        "id": 789,
        "names": {
            "en": "cosmog",
            "ko": "코스모그",
            "ja": "コスモッグ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/789.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/789.png"
        },
        "types": [
            "14"
        ]
    },
    {
        "id": 790,
        "names": {
            "en": "cosmoem",
            "ko": "코스모움",
            "ja": "コスモウム"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/790.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/790.png"
        },
        "types": [
            "14"
        ]
    },
    {
        "id": 791,
        "names": {
            "en": "solgaleo",
            "ko": "솔가레오",
            "ja": "ソルガレオ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/791.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/791.png"
        },
        "types": [
            "14",
            "9"
        ]
    },
    {
        "id": 792,
        "names": {
            "en": "lunala",
            "ko": "루나아라",
            "ja": "ルナアーラ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/792.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/792.png"
        },
        "types": [
            "14",
            "8"
        ]
    },
    {
        "id": 793,
        "names": {
            "en": "nihilego",
            "ko": "텅비드",
            "ja": "ウツロイド"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/793.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/793.png"
        },
        "types": [
            "6",
            "4"
        ]
    },
    {
        "id": 794,
        "names": {
            "en": "buzzwole",
            "ko": "매시붕",
            "ja": "マッシブーン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/794.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/794.png"
        },
        "types": [
            "7",
            "2"
        ]
    },
    {
        "id": 795,
        "names": {
            "en": "pheromosa",
            "ko": "페로코체",
            "ja": "フェローチェ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/795.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/795.png"
        },
        "types": [
            "7",
            "2"
        ]
    },
    {
        "id": 796,
        "names": {
            "en": "xurkitree",
            "ko": "전수목",
            "ja": "デンジュモク"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/796.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/796.png"
        },
        "types": [
            "13"
        ]
    },
    {
        "id": 797,
        "names": {
            "en": "celesteela",
            "ko": "철화구야",
            "ja": "テッカグヤ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/797.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/797.png"
        },
        "types": [
            "9",
            "3"
        ]
    },
    {
        "id": 798,
        "names": {
            "en": "kartana",
            "ko": "종이신도",
            "ja": "カミツルギ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/798.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/798.png"
        },
        "types": [
            "12",
            "9"
        ]
    },
    {
        "id": 799,
        "names": {
            "en": "guzzlord",
            "ko": "악식킹",
            "ja": "アクジキング"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/799.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/799.png"
        },
        "types": [
            "17",
            "16"
        ]
    },
    {
        "id": 800,
        "names": {
            "en": "necrozma",
            "ko": "네크로즈마",
            "ja": "ネクロズマ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/800.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/800.png"
        },
        "types": [
            "14"
        ]
    },
    {
        "id": 801,
        "names": {
            "en": "magearna",
            "ko": "마기아나",
            "ja": "マギアナ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/801.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/801.png"
        },
        "types": [
            "9",
            "18"
        ]
    },
    {
        "id": 802,
        "names": {
            "en": "marshadow",
            "ko": "마샤도",
            "ja": "マーシャドー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/802.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/802.png"
        },
        "types": [
            "2",
            "8"
        ]
    },
    {
        "id": 803,
        "names": {
            "en": "poipole",
            "ko": "베베놈",
            "ja": "ベベノム"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/803.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/803.png"
        },
        "types": [
            "4"
        ]
    },
    {
        "id": 804,
        "names": {
            "en": "naganadel",
            "ko": "아고용",
            "ja": "アーゴヨン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/804.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/804.png"
        },
        "types": [
            "4",
            "16"
        ]
    },
    {
        "id": 805,
        "names": {
            "en": "stakataka",
            "ko": "차곡차곡",
            "ja": "ツンデツンデ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/805.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/805.png"
        },
        "types": [
            "6",
            "9"
        ]
    },
    {
        "id": 806,
        "names": {
            "en": "blacephalon",
            "ko": "두파팡",
            "ja": "ズガドーン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/806.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/806.png"
        },
        "types": [
            "10",
            "8"
        ]
    },
    {
        "id": 807,
        "names": {
            "en": "zeraora",
            "ko": "제라오라",
            "ja": "ゼラオラ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/807.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/807.png"
        },
        "types": [
            "13"
        ]
    },
    {
        "id": 808,
        "names": {
            "en": "meltan",
            "ko": "멜탄",
            "ja": "メルタン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/808.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/808.png"
        },
        "types": [
            "9"
        ]
    },
    {
        "id": 809,
        "names": {
            "en": "melmetal",
            "ko": "멜메탈",
            "ja": "メルメタル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/809.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/809.png"
        },
        "types": [
            "9"
        ]
    },
    {
        "id": 810,
        "names": {
            "en": "grookey",
            "ko": "흥나숭",
            "ja": "サルノリ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/810.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/810.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 811,
        "names": {
            "en": "thwackey",
            "ko": "채키몽",
            "ja": "バチンキー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/811.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/811.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 812,
        "names": {
            "en": "rillaboom",
            "ko": "고릴타",
            "ja": "ゴリランダー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/812.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/812.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 813,
        "names": {
            "en": "scorbunny",
            "ko": "염버니",
            "ja": "ヒバニー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/813.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/813.png"
        },
        "types": [
            "10"
        ]
    },
    {
        "id": 814,
        "names": {
            "en": "raboot",
            "ko": "래비풋",
            "ja": "ラビフット"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/814.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/814.png"
        },
        "types": [
            "10"
        ]
    },
    {
        "id": 815,
        "names": {
            "en": "cinderace",
            "ko": "에이스번",
            "ja": "エースバーン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/815.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/815.png"
        },
        "types": [
            "10"
        ]
    },
    {
        "id": 816,
        "names": {
            "en": "sobble",
            "ko": "울머기",
            "ja": "メッソン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/816.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/816.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 817,
        "names": {
            "en": "drizzile",
            "ko": "누겔레온",
            "ja": "ジメレオン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/817.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/817.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 818,
        "names": {
            "en": "inteleon",
            "ko": "인텔리레온",
            "ja": "インテレオン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/818.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/818.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 819,
        "names": {
            "en": "skwovet",
            "ko": "탐리스",
            "ja": "ホシガリス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/819.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/819.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 820,
        "names": {
            "en": "greedent",
            "ko": "요씽리스",
            "ja": "ヨクバリス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/820.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/820.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 821,
        "names": {
            "en": "rookidee",
            "ko": "파라꼬",
            "ja": "ココガラ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/821.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/821.png"
        },
        "types": [
            "3"
        ]
    },
    {
        "id": 822,
        "names": {
            "en": "corvisquire",
            "ko": "파크로우",
            "ja": "アオガラス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/822.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/822.png"
        },
        "types": [
            "3"
        ]
    },
    {
        "id": 823,
        "names": {
            "en": "corviknight",
            "ko": "아머까오",
            "ja": "アーマーガア"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/823.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/823.png"
        },
        "types": [
            "3",
            "9"
        ]
    },
    {
        "id": 824,
        "names": {
            "en": "blipbug",
            "ko": "두루지벌레",
            "ja": "サッチムシ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/824.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/824.png"
        },
        "types": [
            "7"
        ]
    },
    {
        "id": 825,
        "names": {
            "en": "dottler",
            "ko": "레돔벌레",
            "ja": "レドームシ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/825.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/825.png"
        },
        "types": [
            "7",
            "14"
        ]
    },
    {
        "id": 826,
        "names": {
            "en": "orbeetle",
            "ko": "이올브",
            "ja": "イオルブ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/826.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/826.png"
        },
        "types": [
            "7",
            "14"
        ]
    },
    {
        "id": 827,
        "names": {
            "en": "nickit",
            "ko": "훔처우",
            "ja": "クスネ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/827.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/827.png"
        },
        "types": [
            "17"
        ]
    },
    {
        "id": 828,
        "names": {
            "en": "thievul",
            "ko": "폭슬라이",
            "ja": "フォクスライ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/828.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/828.png"
        },
        "types": [
            "17"
        ]
    },
    {
        "id": 829,
        "names": {
            "en": "gossifleur",
            "ko": "꼬모카",
            "ja": "ヒメンカ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/829.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/829.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 830,
        "names": {
            "en": "eldegoss",
            "ko": "백솜모카",
            "ja": "ワタシラガ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/830.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/830.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 831,
        "names": {
            "en": "wooloo",
            "ko": "우르",
            "ja": "ウールー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/831.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/831.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 832,
        "names": {
            "en": "dubwool",
            "ko": "배우르",
            "ja": "バイウールー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/832.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/832.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 833,
        "names": {
            "en": "chewtle",
            "ko": "깨물부기",
            "ja": "カムカメ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/833.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/833.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 834,
        "names": {
            "en": "drednaw",
            "ko": "갈가부기",
            "ja": "カジリガメ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/834.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/834.png"
        },
        "types": [
            "11",
            "6"
        ]
    },
    {
        "id": 835,
        "names": {
            "en": "yamper",
            "ko": "멍파치",
            "ja": "ワンパチ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/835.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/835.png"
        },
        "types": [
            "13"
        ]
    },
    {
        "id": 836,
        "names": {
            "en": "boltund",
            "ko": "펄스멍",
            "ja": "パルスワン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/836.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/836.png"
        },
        "types": [
            "13"
        ]
    },
    {
        "id": 837,
        "names": {
            "en": "rolycoly",
            "ko": "탄동",
            "ja": "タンドン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/837.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/837.png"
        },
        "types": [
            "6"
        ]
    },
    {
        "id": 838,
        "names": {
            "en": "carkol",
            "ko": "탄차곤",
            "ja": "トロッゴン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/838.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/838.png"
        },
        "types": [
            "6",
            "10"
        ]
    },
    {
        "id": 839,
        "names": {
            "en": "coalossal",
            "ko": "석탄산",
            "ja": "セキタンザン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/839.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/839.png"
        },
        "types": [
            "6",
            "10"
        ]
    },
    {
        "id": 840,
        "names": {
            "en": "applin",
            "ko": "과사삭벌레",
            "ja": "カジッチュ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/840.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/840.png"
        },
        "types": [
            "12",
            "16"
        ]
    },
    {
        "id": 841,
        "names": {
            "en": "flapple",
            "ko": "애프룡",
            "ja": "アップリュー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/841.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/841.png"
        },
        "types": [
            "12",
            "16"
        ]
    },
    {
        "id": 842,
        "names": {
            "en": "appletun",
            "ko": "단지래플",
            "ja": "タルップル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/842.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/842.png"
        },
        "types": [
            "12",
            "16"
        ]
    },
    {
        "id": 843,
        "names": {
            "en": "silicobra",
            "ko": "모래뱀",
            "ja": "スナヘビ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/843.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/843.png"
        },
        "types": [
            "5"
        ]
    },
    {
        "id": 844,
        "names": {
            "en": "sandaconda",
            "ko": "사다이사",
            "ja": "サダイジャ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/844.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/844.png"
        },
        "types": [
            "5"
        ]
    },
    {
        "id": 845,
        "names": {
            "en": "cramorant",
            "ko": "윽우지",
            "ja": "ウッウ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/845.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/845.png"
        },
        "types": [
            "3",
            "11"
        ]
    },
    {
        "id": 846,
        "names": {
            "en": "arrokuda",
            "ko": "찌로꼬치",
            "ja": "サシカマス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/846.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/846.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 847,
        "names": {
            "en": "barraskewda",
            "ko": "꼬치조",
            "ja": "カマスジョー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/847.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/847.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 848,
        "names": {
            "en": "toxel",
            "ko": "일레즌",
            "ja": "エレズン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/848.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/848.png"
        },
        "types": [
            "13",
            "4"
        ]
    },
    {
        "id": 849,
        "names": {
            "en": "toxtricity",
            "ko": "스트린더",
            "ja": "ストリンダー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/849.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/849.png"
        },
        "types": [
            "13",
            "4"
        ]
    },
    {
        "id": 850,
        "names": {
            "en": "sizzlipede",
            "ko": "태우지네",
            "ja": "ヤクデ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/850.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/850.png"
        },
        "types": [
            "10",
            "7"
        ]
    },
    {
        "id": 851,
        "names": {
            "en": "centiskorch",
            "ko": "다태우지네",
            "ja": "マルヤクデ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/851.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/851.png"
        },
        "types": [
            "10",
            "7"
        ]
    },
    {
        "id": 852,
        "names": {
            "en": "clobbopus",
            "ko": "때때무노",
            "ja": "タタッコ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/852.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/852.png"
        },
        "types": [
            "2"
        ]
    },
    {
        "id": 853,
        "names": {
            "en": "grapploct",
            "ko": "케오퍼스",
            "ja": "オトスパス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/853.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/853.png"
        },
        "types": [
            "2"
        ]
    },
    {
        "id": 854,
        "names": {
            "en": "sinistea",
            "ko": "데인차",
            "ja": "ヤバチャ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/854.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/854.png"
        },
        "types": [
            "8"
        ]
    },
    {
        "id": 855,
        "names": {
            "en": "polteageist",
            "ko": "포트데스",
            "ja": "ポットデス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/855.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/855.png"
        },
        "types": [
            "8"
        ]
    },
    {
        "id": 856,
        "names": {
            "en": "hatenna",
            "ko": "몸지브림",
            "ja": "ミブリム"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/856.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/856.png"
        },
        "types": [
            "14"
        ]
    },
    {
        "id": 857,
        "names": {
            "en": "hattrem",
            "ko": "손지브림",
            "ja": "テブリム"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/857.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/857.png"
        },
        "types": [
            "14"
        ]
    },
    {
        "id": 858,
        "names": {
            "en": "hatterene",
            "ko": "브리무음",
            "ja": "ブリムオン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/858.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/858.png"
        },
        "types": [
            "14",
            "18"
        ]
    },
    {
        "id": 859,
        "names": {
            "en": "impidimp",
            "ko": "메롱꿍",
            "ja": "ベロバー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/859.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/859.png"
        },
        "types": [
            "17",
            "18"
        ]
    },
    {
        "id": 860,
        "names": {
            "en": "morgrem",
            "ko": "쏘겨모",
            "ja": "ギモー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/860.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/860.png"
        },
        "types": [
            "17",
            "18"
        ]
    },
    {
        "id": 861,
        "names": {
            "en": "grimmsnarl",
            "ko": "오롱털",
            "ja": "オーロンゲ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/861.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/861.png"
        },
        "types": [
            "17",
            "18"
        ]
    },
    {
        "id": 862,
        "names": {
            "en": "obstagoon",
            "ko": "가로막구리",
            "ja": "タチフサグマ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/862.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/862.png"
        },
        "types": [
            "17",
            "1"
        ]
    },
    {
        "id": 863,
        "names": {
            "en": "perrserker",
            "ko": "나이킹",
            "ja": "ニャイキング"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/863.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/863.png"
        },
        "types": [
            "9"
        ]
    },
    {
        "id": 864,
        "names": {
            "en": "cursola",
            "ko": "산호르곤",
            "ja": "サニゴーン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/864.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/864.png"
        },
        "types": [
            "8"
        ]
    },
    {
        "id": 865,
        "names": {
            "en": "sirfetchd",
            "ko": "창파나이트",
            "ja": "ネギガナイト"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/865.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/865.png"
        },
        "types": [
            "2"
        ]
    },
    {
        "id": 866,
        "names": {
            "en": "mr-rime",
            "ko": "마임꽁꽁",
            "ja": "バリコオル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/866.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/866.png"
        },
        "types": [
            "15",
            "14"
        ]
    },
    {
        "id": 867,
        "names": {
            "en": "runerigus",
            "ko": "데스판",
            "ja": "デスバーン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/867.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/867.png"
        },
        "types": [
            "5",
            "8"
        ]
    },
    {
        "id": 868,
        "names": {
            "en": "milcery",
            "ko": "마빌크",
            "ja": "マホミル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/868.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/868.png"
        },
        "types": [
            "18"
        ]
    },
    {
        "id": 869,
        "names": {
            "en": "alcremie",
            "ko": "마휘핑",
            "ja": "マホイップ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/869.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/869.png"
        },
        "types": [
            "18"
        ]
    },
    {
        "id": 870,
        "names": {
            "en": "falinks",
            "ko": "대여르",
            "ja": "タイレーツ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/870.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/870.png"
        },
        "types": [
            "2"
        ]
    },
    {
        "id": 871,
        "names": {
            "en": "pincurchin",
            "ko": "찌르성게",
            "ja": "バチンウニ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/871.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/871.png"
        },
        "types": [
            "13"
        ]
    },
    {
        "id": 872,
        "names": {
            "en": "snom",
            "ko": "누니머기",
            "ja": "ユキハミ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/872.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/872.png"
        },
        "types": [
            "15",
            "7"
        ]
    },
    {
        "id": 873,
        "names": {
            "en": "frosmoth",
            "ko": "모스노우",
            "ja": "モスノウ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/873.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/873.png"
        },
        "types": [
            "15",
            "7"
        ]
    },
    {
        "id": 874,
        "names": {
            "en": "stonjourner",
            "ko": "돌헨진",
            "ja": "イシヘンジン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/874.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/874.png"
        },
        "types": [
            "6"
        ]
    },
    {
        "id": 875,
        "names": {
            "en": "eiscue",
            "ko": "빙큐보",
            "ja": "コオリッポ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/875.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/875.png"
        },
        "types": [
            "15"
        ]
    },
    {
        "id": 876,
        "names": {
            "en": "indeedee",
            "ko": "에써르",
            "ja": "イエッサン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/876.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/876.png"
        },
        "types": [
            "14",
            "1"
        ]
    },
    {
        "id": 877,
        "names": {
            "en": "morpeko",
            "ko": "모르페코",
            "ja": "モルペコ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/877.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/877.png"
        },
        "types": [
            "13",
            "17"
        ]
    },
    {
        "id": 878,
        "names": {
            "en": "cufant",
            "ko": "끼리동",
            "ja": "ゾウドウ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/878.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/878.png"
        },
        "types": [
            "9"
        ]
    },
    {
        "id": 879,
        "names": {
            "en": "copperajah",
            "ko": "대왕끼리동",
            "ja": "ダイオウドウ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/879.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/879.png"
        },
        "types": [
            "9"
        ]
    },
    {
        "id": 880,
        "names": {
            "en": "dracozolt",
            "ko": "파치래곤",
            "ja": "パッチラゴン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/880.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/880.png"
        },
        "types": [
            "13",
            "16"
        ]
    },
    {
        "id": 881,
        "names": {
            "en": "arctozolt",
            "ko": "파치르돈",
            "ja": "パッチルドン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/881.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/881.png"
        },
        "types": [
            "13",
            "15"
        ]
    },
    {
        "id": 882,
        "names": {
            "en": "dracovish",
            "ko": "어래곤",
            "ja": "ウオノラゴン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/882.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/882.png"
        },
        "types": [
            "11",
            "16"
        ]
    },
    {
        "id": 883,
        "names": {
            "en": "arctovish",
            "ko": "어치르돈",
            "ja": "ウオチルドン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/883.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/883.png"
        },
        "types": [
            "11",
            "15"
        ]
    },
    {
        "id": 884,
        "names": {
            "en": "duraludon",
            "ko": "두랄루돈",
            "ja": "ジュラルドン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/884.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/884.png"
        },
        "types": [
            "9",
            "16"
        ]
    },
    {
        "id": 885,
        "names": {
            "en": "dreepy",
            "ko": "드라꼰",
            "ja": "ドラメシヤ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/885.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/885.png"
        },
        "types": [
            "16",
            "8"
        ]
    },
    {
        "id": 886,
        "names": {
            "en": "drakloak",
            "ko": "드래런치",
            "ja": "ドロンチ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/886.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/886.png"
        },
        "types": [
            "16",
            "8"
        ]
    },
    {
        "id": 887,
        "names": {
            "en": "dragapult",
            "ko": "드래펄트",
            "ja": "ドラパルト"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/887.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/887.png"
        },
        "types": [
            "16",
            "8"
        ]
    },
    {
        "id": 888,
        "names": {
            "en": "zacian",
            "ko": "자시안",
            "ja": "ザシアン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/888.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/888.png"
        },
        "types": [
            "18"
        ]
    },
    {
        "id": 889,
        "names": {
            "en": "zamazenta",
            "ko": "자마젠타",
            "ja": "ザマゼンタ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/889.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/889.png"
        },
        "types": [
            "2"
        ]
    },
    {
        "id": 890,
        "names": {
            "en": "eternatus",
            "ko": "무한다이노",
            "ja": "ムゲンダイナ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/890.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/890.png"
        },
        "types": [
            "4",
            "16"
        ]
    },
    {
        "id": 891,
        "names": {
            "en": "kubfu",
            "ko": "치고마",
            "ja": "ダクマ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/891.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/891.png"
        },
        "types": [
            "2"
        ]
    },
    {
        "id": 892,
        "names": {
            "en": "urshifu",
            "ko": "우라오스",
            "ja": "ウーラオス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/892.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/892.png"
        },
        "types": [
            "2",
            "17"
        ]
    },
    {
        "id": 893,
        "names": {
            "en": "zarude",
            "ko": "자루도",
            "ja": "ザルード"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/893.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/893.png"
        },
        "types": [
            "17",
            "12"
        ]
    },
    {
        "id": 894,
        "names": {
            "en": "regieleki",
            "ko": "레지에레키",
            "ja": "レジエレキ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/894.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/894.png"
        },
        "types": [
            "13"
        ]
    },
    {
        "id": 895,
        "names": {
            "en": "regidrago",
            "ko": "레지드래고",
            "ja": "レジドラゴ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/895.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/895.png"
        },
        "types": [
            "16"
        ]
    },
    {
        "id": 896,
        "names": {
            "en": "glastrier",
            "ko": "블리자포스",
            "ja": "ブリザポス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/896.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/896.png"
        },
        "types": [
            "15"
        ]
    },
    {
        "id": 897,
        "names": {
            "en": "spectrier",
            "ko": "레이스포스",
            "ja": "レイスポス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/897.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/897.png"
        },
        "types": [
            "8"
        ]
    },
    {
        "id": 898,
        "names": {
            "en": "calyrex",
            "ko": "버드렉스",
            "ja": "バドレックス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/898.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/898.png"
        },
        "types": [
            "14",
            "12"
        ]
    },
    {
        "id": 899,
        "names": {
            "en": "wyrdeer",
            "ko": "신비록",
            "ja": "アヤシシ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/899.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/899.png"
        },
        "types": [
            "1",
            "14"
        ]
    },
    {
        "id": 900,
        "names": {
            "en": "kleavor",
            "ko": "사마자르",
            "ja": "バサギリ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/900.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/900.png"
        },
        "types": [
            "7",
            "6"
        ]
    },
    {
        "id": 901,
        "names": {
            "en": "ursaluna",
            "ko": "다투곰",
            "ja": "ガチグマ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/901.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/901.png"
        },
        "types": [
            "5",
            "1"
        ]
    },
    {
        "id": 902,
        "names": {
            "en": "basculegion",
            "ko": "대쓰여너",
            "ja": "イダイトウ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/902.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/902.png"
        },
        "types": [
            "11",
            "8"
        ]
    },
    {
        "id": 903,
        "names": {
            "en": "sneasler",
            "ko": "포푸니크",
            "ja": "オオニューラ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/903.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/903.png"
        },
        "types": [
            "2",
            "4"
        ]
    },
    {
        "id": 904,
        "names": {
            "en": "overqwil",
            "ko": "장침바루",
            "ja": "ハリーマン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/904.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/904.png"
        },
        "types": [
            "17",
            "4"
        ]
    },
    {
        "id": 905,
        "names": {
            "en": "enamorus",
            "ko": "러브로스",
            "ja": "ラブトロス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/905.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/905.png"
        },
        "types": [
            "18",
            "3"
        ]
    },
    {
        "id": 906,
        "names": {
            "en": "sprigatito",
            "ko": "나오하",
            "ja": "ニャオハ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/906.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/906.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 907,
        "names": {
            "en": "floragato",
            "ko": "나로테",
            "ja": "ニャローテ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/907.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/907.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 908,
        "names": {
            "en": "meowscarada",
            "ko": "마스카나",
            "ja": "マスカーニャ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/908.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/908.png"
        },
        "types": [
            "12",
            "17"
        ]
    },
    {
        "id": 909,
        "names": {
            "en": "fuecoco",
            "ko": "뜨아거",
            "ja": "ホゲータ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/909.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/909.png"
        },
        "types": [
            "10"
        ]
    },
    {
        "id": 910,
        "names": {
            "en": "crocalor",
            "ko": "악뜨거",
            "ja": "アチゲータ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/910.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/910.png"
        },
        "types": [
            "10"
        ]
    },
    {
        "id": 911,
        "names": {
            "en": "skeledirge",
            "ko": "라우드본",
            "ja": "ラウドボーン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/911.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/911.png"
        },
        "types": [
            "10",
            "8"
        ]
    },
    {
        "id": 912,
        "names": {
            "en": "quaxly",
            "ko": "꾸왁스",
            "ja": "クワッス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/912.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/912.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 913,
        "names": {
            "en": "quaxwell",
            "ko": "아꾸왁",
            "ja": "ウェルカモ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/913.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/913.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 914,
        "names": {
            "en": "quaquaval",
            "ko": "웨이니발",
            "ja": "ウェーニバル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/914.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/914.png"
        },
        "types": [
            "11",
            "2"
        ]
    },
    {
        "id": 915,
        "names": {
            "en": "lechonk",
            "ko": "맛보돈",
            "ja": "グルトン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/915.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/915.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 916,
        "names": {
            "en": "oinkologne",
            "ko": "퍼퓨돈",
            "ja": "パフュートン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/916.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/916.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 917,
        "names": {
            "en": "tarountula",
            "ko": "타랜툴라",
            "ja": "タマンチュラ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/917.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/917.png"
        },
        "types": [
            "7"
        ]
    },
    {
        "id": 918,
        "names": {
            "en": "spidops",
            "ko": "트래피더",
            "ja": "ワナイダー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/918.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/918.png"
        },
        "types": [
            "7"
        ]
    },
    {
        "id": 919,
        "names": {
            "en": "nymble",
            "ko": "콩알뚜기",
            "ja": "マメバッタ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/919.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/919.png"
        },
        "types": [
            "7"
        ]
    },
    {
        "id": 920,
        "names": {
            "en": "lokix",
            "ko": "엑스레그",
            "ja": "エクスレッグ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/920.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/920.png"
        },
        "types": [
            "7",
            "17"
        ]
    },
    {
        "id": 921,
        "names": {
            "en": "pawmi",
            "ko": "빠모",
            "ja": "パモ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/921.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/921.png"
        },
        "types": [
            "13"
        ]
    },
    {
        "id": 922,
        "names": {
            "en": "pawmo",
            "ko": "빠모트",
            "ja": "パモット"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/922.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/922.png"
        },
        "types": [
            "13",
            "2"
        ]
    },
    {
        "id": 923,
        "names": {
            "en": "pawmot",
            "ko": "빠르모트",
            "ja": "パーモット"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/923.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/923.png"
        },
        "types": [
            "13",
            "2"
        ]
    },
    {
        "id": 924,
        "names": {
            "en": "tandemaus",
            "ko": "두리쥐",
            "ja": "ワッカネズミ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/924.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/924.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 925,
        "names": {
            "en": "maushold",
            "ko": "파밀리쥐",
            "ja": "イッカネズミ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/925.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/925.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 926,
        "names": {
            "en": "fidough",
            "ko": "쫀도기",
            "ja": "パピモッチ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/926.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/926.png"
        },
        "types": [
            "18"
        ]
    },
    {
        "id": 927,
        "names": {
            "en": "dachsbun",
            "ko": "바우첼",
            "ja": "バウッツェル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/927.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/927.png"
        },
        "types": [
            "18"
        ]
    },
    {
        "id": 928,
        "names": {
            "en": "smoliv",
            "ko": "미니브",
            "ja": "ミニーブ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/928.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/928.png"
        },
        "types": [
            "12",
            "1"
        ]
    },
    {
        "id": 929,
        "names": {
            "en": "dolliv",
            "ko": "올리뇨",
            "ja": "オリーニョ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/929.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/929.png"
        },
        "types": [
            "12",
            "1"
        ]
    },
    {
        "id": 930,
        "names": {
            "en": "arboliva",
            "ko": "올리르바",
            "ja": "オリーヴァ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/930.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/930.png"
        },
        "types": [
            "12",
            "1"
        ]
    },
    {
        "id": 931,
        "names": {
            "en": "squawkabilly",
            "ko": "시비꼬",
            "ja": "イキリンコ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/931.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/931.png"
        },
        "types": [
            "1",
            "3"
        ]
    },
    {
        "id": 932,
        "names": {
            "en": "nacli",
            "ko": "베베솔트",
            "ja": "コジオ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/932.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/932.png"
        },
        "types": [
            "6"
        ]
    },
    {
        "id": 933,
        "names": {
            "en": "naclstack",
            "ko": "스태솔트",
            "ja": "ジオヅム"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/933.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/933.png"
        },
        "types": [
            "6"
        ]
    },
    {
        "id": 934,
        "names": {
            "en": "garganacl",
            "ko": "콜로솔트",
            "ja": "キョジオーン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/934.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/934.png"
        },
        "types": [
            "6"
        ]
    },
    {
        "id": 935,
        "names": {
            "en": "charcadet",
            "ko": "카르본",
            "ja": "カルボウ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/935.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/935.png"
        },
        "types": [
            "10"
        ]
    },
    {
        "id": 936,
        "names": {
            "en": "armarouge",
            "ko": "카디나르마",
            "ja": "グレンアルマ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/936.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/936.png"
        },
        "types": [
            "10",
            "14"
        ]
    },
    {
        "id": 937,
        "names": {
            "en": "ceruledge",
            "ko": "파라블레이즈",
            "ja": "ソウブレイズ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/937.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/937.png"
        },
        "types": [
            "10",
            "8"
        ]
    },
    {
        "id": 938,
        "names": {
            "en": "tadbulb",
            "ko": "빈나두",
            "ja": "ズピカ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/938.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/938.png"
        },
        "types": [
            "13"
        ]
    },
    {
        "id": 939,
        "names": {
            "en": "bellibolt",
            "ko": "찌리배리",
            "ja": "ハラバリー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/939.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/939.png"
        },
        "types": [
            "13"
        ]
    },
    {
        "id": 940,
        "names": {
            "en": "wattrel",
            "ko": "찌리비",
            "ja": "カイデン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/940.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/940.png"
        },
        "types": [
            "13",
            "3"
        ]
    },
    {
        "id": 941,
        "names": {
            "en": "kilowattrel",
            "ko": "찌리비크",
            "ja": "タイカイデン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/941.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/941.png"
        },
        "types": [
            "13",
            "3"
        ]
    },
    {
        "id": 942,
        "names": {
            "en": "maschiff",
            "ko": "오라티프",
            "ja": "オラチフ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/942.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/942.png"
        },
        "types": [
            "17"
        ]
    },
    {
        "id": 943,
        "names": {
            "en": "mabosstiff",
            "ko": "마피티프",
            "ja": "マフィティフ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/943.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/943.png"
        },
        "types": [
            "17"
        ]
    },
    {
        "id": 944,
        "names": {
            "en": "shroodle",
            "ko": "땃쭈르",
            "ja": "シルシュルー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/944.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/944.png"
        },
        "types": [
            "4",
            "1"
        ]
    },
    {
        "id": 945,
        "names": {
            "en": "grafaiai",
            "ko": "태깅구르",
            "ja": "タギングル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/945.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/945.png"
        },
        "types": [
            "4",
            "1"
        ]
    },
    {
        "id": 946,
        "names": {
            "en": "bramblin",
            "ko": "그푸리",
            "ja": "アノクサ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/946.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/946.png"
        },
        "types": [
            "12",
            "8"
        ]
    },
    {
        "id": 947,
        "names": {
            "en": "brambleghast",
            "ko": "공푸리",
            "ja": "アノホラグサ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/947.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/947.png"
        },
        "types": [
            "12",
            "8"
        ]
    },
    {
        "id": 948,
        "names": {
            "en": "toedscool",
            "ko": "들눈해",
            "ja": "ノノクラゲ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/948.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/948.png"
        },
        "types": [
            "5",
            "12"
        ]
    },
    {
        "id": 949,
        "names": {
            "en": "toedscruel",
            "ko": "육파리",
            "ja": "リククラゲ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/949.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/949.png"
        },
        "types": [
            "5",
            "12"
        ]
    },
    {
        "id": 950,
        "names": {
            "en": "klawf",
            "ko": "절벼게",
            "ja": "ガケガニ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/950.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/950.png"
        },
        "types": [
            "6"
        ]
    },
    {
        "id": 951,
        "names": {
            "en": "capsakid",
            "ko": "캡싸이",
            "ja": "カプサイジ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/951.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/951.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 952,
        "names": {
            "en": "scovillain",
            "ko": "스코빌런",
            "ja": "スコヴィラン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/952.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/952.png"
        },
        "types": [
            "12",
            "10"
        ]
    },
    {
        "id": 953,
        "names": {
            "en": "rellor",
            "ko": "구르데",
            "ja": "シガロコ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/953.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/953.png"
        },
        "types": [
            "7"
        ]
    },
    {
        "id": 954,
        "names": {
            "en": "rabsca",
            "ko": "베라카스",
            "ja": "ベラカス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/954.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/954.png"
        },
        "types": [
            "7",
            "14"
        ]
    },
    {
        "id": 955,
        "names": {
            "en": "flittle",
            "ko": "하느라기",
            "ja": "ヒラヒナ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/955.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/955.png"
        },
        "types": [
            "14"
        ]
    },
    {
        "id": 956,
        "names": {
            "en": "espathra",
            "ko": "클레스퍼트라",
            "ja": "クエスパトラ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/956.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/956.png"
        },
        "types": [
            "14"
        ]
    },
    {
        "id": 957,
        "names": {
            "en": "tinkatink",
            "ko": "어리짱",
            "ja": "カヌチャン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/957.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/957.png"
        },
        "types": [
            "18",
            "9"
        ]
    },
    {
        "id": 958,
        "names": {
            "en": "tinkatuff",
            "ko": "벼리짱",
            "ja": "ナカヌチャン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/958.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/958.png"
        },
        "types": [
            "18",
            "9"
        ]
    },
    {
        "id": 959,
        "names": {
            "en": "tinkaton",
            "ko": "두드리짱",
            "ja": "デカヌチャン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/959.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/959.png"
        },
        "types": [
            "18",
            "9"
        ]
    },
    {
        "id": 960,
        "names": {
            "en": "wiglett",
            "ko": "바다그다",
            "ja": "ウミディグダ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/960.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/960.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 961,
        "names": {
            "en": "wugtrio",
            "ko": "바닥트리오",
            "ja": "ウミトリオ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/961.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/961.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 962,
        "names": {
            "en": "bombirdier",
            "ko": "떨구새",
            "ja": "オトシドリ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/962.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/962.png"
        },
        "types": [
            "3",
            "17"
        ]
    },
    {
        "id": 963,
        "names": {
            "en": "finizen",
            "ko": "맨돌핀",
            "ja": "ナミイルカ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/963.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/963.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 964,
        "names": {
            "en": "palafin",
            "ko": "돌핀맨",
            "ja": "イルカマン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/964.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/964.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 965,
        "names": {
            "en": "varoom",
            "ko": "부르롱",
            "ja": "ブロロン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/965.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/965.png"
        },
        "types": [
            "9",
            "4"
        ]
    },
    {
        "id": 966,
        "names": {
            "en": "revavroom",
            "ko": "부르르룸",
            "ja": "ブロロローム"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/966.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/966.png"
        },
        "types": [
            "9",
            "4"
        ]
    },
    {
        "id": 967,
        "names": {
            "en": "cyclizar",
            "ko": "모토마",
            "ja": "モトトカゲ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/967.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/967.png"
        },
        "types": [
            "16",
            "1"
        ]
    },
    {
        "id": 968,
        "names": {
            "en": "orthworm",
            "ko": "꿈트렁",
            "ja": "ミミズズ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/968.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/968.png"
        },
        "types": [
            "9"
        ]
    },
    {
        "id": 969,
        "names": {
            "en": "glimmet",
            "ko": "초롱순",
            "ja": "キラーメ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/969.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/969.png"
        },
        "types": [
            "6",
            "4"
        ]
    },
    {
        "id": 970,
        "names": {
            "en": "glimmora",
            "ko": "킬라플로르",
            "ja": "キラフロル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/970.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/970.png"
        },
        "types": [
            "6",
            "4"
        ]
    },
    {
        "id": 971,
        "names": {
            "en": "greavard",
            "ko": "망망이",
            "ja": "ボチ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/971.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/971.png"
        },
        "types": [
            "8"
        ]
    },
    {
        "id": 972,
        "names": {
            "en": "houndstone",
            "ko": "묘두기",
            "ja": "ハカドッグ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/972.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/972.png"
        },
        "types": [
            "8"
        ]
    },
    {
        "id": 973,
        "names": {
            "en": "flamigo",
            "ko": "꼬이밍고",
            "ja": "カラミンゴ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/973.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/973.png"
        },
        "types": [
            "3",
            "2"
        ]
    },
    {
        "id": 974,
        "names": {
            "en": "cetoddle",
            "ko": "터벅고래",
            "ja": "アルクジラ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/974.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/974.png"
        },
        "types": [
            "15"
        ]
    },
    {
        "id": 975,
        "names": {
            "en": "cetitan",
            "ko": "우락고래",
            "ja": "ハルクジラ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/975.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/975.png"
        },
        "types": [
            "15"
        ]
    },
    {
        "id": 976,
        "names": {
            "en": "veluza",
            "ko": "가비루사",
            "ja": "ミガルーサ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/976.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/976.png"
        },
        "types": [
            "11",
            "14"
        ]
    },
    {
        "id": 977,
        "names": {
            "en": "dondozo",
            "ko": "어써러셔",
            "ja": "ヘイラッシャ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/977.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/977.png"
        },
        "types": [
            "11"
        ]
    },
    {
        "id": 978,
        "names": {
            "en": "tatsugiri",
            "ko": "싸리용",
            "ja": "シャリタツ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/978.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/978.png"
        },
        "types": [
            "16",
            "11"
        ]
    },
    {
        "id": 979,
        "names": {
            "en": "annihilape",
            "ko": "저승갓숭",
            "ja": "コノヨザル"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/979.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/979.png"
        },
        "types": [
            "2",
            "8"
        ]
    },
    {
        "id": 980,
        "names": {
            "en": "clodsire",
            "ko": "토오",
            "ja": "ドオー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/980.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/980.png"
        },
        "types": [
            "4",
            "5"
        ]
    },
    {
        "id": 981,
        "names": {
            "en": "farigiraf",
            "ko": "키키링",
            "ja": "リキキリン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/981.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/981.png"
        },
        "types": [
            "1",
            "14"
        ]
    },
    {
        "id": 982,
        "names": {
            "en": "dudunsparce",
            "ko": "노고고치",
            "ja": "ノココッチ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/982.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/982.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 983,
        "names": {
            "en": "kingambit",
            "ko": "대도각참",
            "ja": "ドドゲザン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/983.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/983.png"
        },
        "types": [
            "17",
            "9"
        ]
    },
    {
        "id": 984,
        "names": {
            "en": "great-tusk",
            "ko": "위대한엄니",
            "ja": "イダイナキバ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/984.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/984.png"
        },
        "types": [
            "5",
            "2"
        ]
    },
    {
        "id": 985,
        "names": {
            "en": "scream-tail",
            "ko": "우렁찬꼬리",
            "ja": "サケブシッポ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/985.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/985.png"
        },
        "types": [
            "18",
            "14"
        ]
    },
    {
        "id": 986,
        "names": {
            "en": "brute-bonnet",
            "ko": "사나운버섯",
            "ja": "アラブルタケ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/986.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/986.png"
        },
        "types": [
            "12",
            "17"
        ]
    },
    {
        "id": 987,
        "names": {
            "en": "flutter-mane",
            "ko": "날개치는머리",
            "ja": "ハバタクカミ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/987.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/987.png"
        },
        "types": [
            "8",
            "18"
        ]
    },
    {
        "id": 988,
        "names": {
            "en": "slither-wing",
            "ko": "땅을기는날개",
            "ja": "チヲハウハネ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/988.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/988.png"
        },
        "types": [
            "7",
            "2"
        ]
    },
    {
        "id": 989,
        "names": {
            "en": "sandy-shocks",
            "ko": "모래털가죽",
            "ja": "スナノケガワ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/989.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/989.png"
        },
        "types": [
            "13",
            "5"
        ]
    },
    {
        "id": 990,
        "names": {
            "en": "iron-treads",
            "ko": "무쇠바퀴",
            "ja": "テツノワダチ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/990.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/990.png"
        },
        "types": [
            "5",
            "9"
        ]
    },
    {
        "id": 991,
        "names": {
            "en": "iron-bundle",
            "ko": "무쇠보따리",
            "ja": "テツノツツミ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/991.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/991.png"
        },
        "types": [
            "15",
            "11"
        ]
    },
    {
        "id": 992,
        "names": {
            "en": "iron-hands",
            "ko": "무쇠손",
            "ja": "テツノカイナ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/992.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/992.png"
        },
        "types": [
            "2",
            "13"
        ]
    },
    {
        "id": 993,
        "names": {
            "en": "iron-jugulis",
            "ko": "무쇠머리",
            "ja": "テツノコウベ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/993.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/993.png"
        },
        "types": [
            "17",
            "3"
        ]
    },
    {
        "id": 994,
        "names": {
            "en": "iron-moth",
            "ko": "무쇠독나방",
            "ja": "テツノドクガ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/994.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/994.png"
        },
        "types": [
            "10",
            "4"
        ]
    },
    {
        "id": 995,
        "names": {
            "en": "iron-thorns",
            "ko": "무쇠가시",
            "ja": "テツノイバラ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/995.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/995.png"
        },
        "types": [
            "6",
            "13"
        ]
    },
    {
        "id": 996,
        "names": {
            "en": "frigibax",
            "ko": "드니차",
            "ja": "セビエ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/996.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/996.png"
        },
        "types": [
            "16",
            "15"
        ]
    },
    {
        "id": 997,
        "names": {
            "en": "arctibax",
            "ko": "드니꽁",
            "ja": "セゴール"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/997.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/997.png"
        },
        "types": [
            "16",
            "15"
        ]
    },
    {
        "id": 998,
        "names": {
            "en": "baxcalibur",
            "ko": "드닐레이브",
            "ja": "セグレイブ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/998.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/998.png"
        },
        "types": [
            "16",
            "15"
        ]
    },
    {
        "id": 999,
        "names": {
            "en": "gimmighoul",
            "ko": "모으령",
            "ja": "コレクレー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/999.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/999.png"
        },
        "types": [
            "8"
        ]
    },
    {
        "id": 1000,
        "names": {
            "en": "gholdengo",
            "ko": "타부자고",
            "ja": "サーフゴー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1000.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1000.png"
        },
        "types": [
            "9",
            "8"
        ]
    },
    {
        "id": 1001,
        "names": {
            "en": "wo-chien",
            "ko": "총지엔",
            "ja": "チオンジェン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1001.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1001.png"
        },
        "types": [
            "17",
            "12"
        ]
    },
    {
        "id": 1002,
        "names": {
            "en": "chien-pao",
            "ko": "파오젠",
            "ja": "パオジアン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1002.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1002.png"
        },
        "types": [
            "17",
            "15"
        ]
    },
    {
        "id": 1003,
        "names": {
            "en": "ting-lu",
            "ko": "딩루",
            "ja": "ディンルー"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1003.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1003.png"
        },
        "types": [
            "17",
            "5"
        ]
    },
    {
        "id": 1004,
        "names": {
            "en": "chi-yu",
            "ko": "위유이",
            "ja": "イーユイ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1004.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1004.png"
        },
        "types": [
            "17",
            "10"
        ]
    },
    {
        "id": 1005,
        "names": {
            "en": "roaring-moon",
            "ko": "고동치는달",
            "ja": "トドロクツキ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1005.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1005.png"
        },
        "types": [
            "16",
            "17"
        ]
    },
    {
        "id": 1006,
        "names": {
            "en": "iron-valiant",
            "ko": "무쇠무인",
            "ja": "テツノブジン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1006.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1006.png"
        },
        "types": [
            "18",
            "2"
        ]
    },
    {
        "id": 1007,
        "names": {
            "en": "koraidon",
            "ko": "코라이돈",
            "ja": "コライドン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1007.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1007.png"
        },
        "types": [
            "2",
            "16"
        ]
    },
    {
        "id": 1008,
        "names": {
            "en": "miraidon",
            "ko": "미라이돈",
            "ja": "ミライドン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1008.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1008.png"
        },
        "types": [
            "13",
            "16"
        ]
    },
    {
        "id": 1009,
        "names": {
            "en": "walking-wake",
            "ko": "굽이치는물결",
            "ja": "ウネルミナモ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1009.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1009.png"
        },
        "types": [
            "11",
            "16"
        ]
    },
    {
        "id": 1010,
        "names": {
            "en": "iron-leaves",
            "ko": "무쇠잎새",
            "ja": "テツノイサハ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1010.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1010.png"
        },
        "types": [
            "12",
            "14"
        ]
    },
    {
        "id": 1011,
        "names": {
            "en": "dipplin",
            "ko": "과미르",
            "ja": "カミッチュ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1011.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1011.png"
        },
        "types": [
            "12",
            "16"
        ]
    },
    {
        "id": 1012,
        "names": {
            "en": "poltchageist",
            "ko": "차데스",
            "ja": "チャデス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1012.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1012.png"
        },
        "types": [
            "12",
            "8"
        ]
    },
    {
        "id": 1013,
        "names": {
            "en": "sinistcha",
            "ko": "그우린차",
            "ja": "ヤバソチャ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1013.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1013.png"
        },
        "types": [
            "12",
            "8"
        ]
    },
    {
        "id": 1014,
        "names": {
            "en": "okidogi",
            "ko": "조타구",
            "ja": "イイネイヌ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1014.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1014.png"
        },
        "types": [
            "4",
            "2"
        ]
    },
    {
        "id": 1015,
        "names": {
            "en": "munkidori",
            "ko": "이야후",
            "ja": "マシマシラ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1015.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1015.png"
        },
        "types": [
            "4",
            "14"
        ]
    },
    {
        "id": 1016,
        "names": {
            "en": "fezandipiti",
            "ko": "기로치",
            "ja": "キチキギス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1016.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1016.png"
        },
        "types": [
            "4",
            "18"
        ]
    },
    {
        "id": 1017,
        "names": {
            "en": "ogerpon",
            "ko": "오거폰",
            "ja": "オーガポン"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1017.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1017.png"
        },
        "types": [
            "12"
        ]
    },
    {
        "id": 1018,
        "names": {
            "en": "archaludon",
            "ko": "브리두라스",
            "ja": "ブリジュラス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1018.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1018.png"
        },
        "types": [
            "9",
            "16"
        ]
    },
    {
        "id": 1019,
        "names": {
            "en": "hydrapple",
            "ko": "과미드라",
            "ja": "カミツオロチ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1019.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1019.png"
        },
        "types": [
            "12",
            "16"
        ]
    },
    {
        "id": 1020,
        "names": {
            "en": "gouging-fire",
            "ko": "꿰뚫는화염",
            "ja": "ウガツホムラ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1020.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1020.png"
        },
        "types": [
            "10",
            "16"
        ]
    },
    {
        "id": 1021,
        "names": {
            "en": "raging-bolt",
            "ko": "날뛰는우레",
            "ja": "タケルライコ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1021.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1021.png"
        },
        "types": [
            "13",
            "16"
        ]
    },
    {
        "id": 1022,
        "names": {
            "en": "iron-boulder",
            "ko": "무쇠암석",
            "ja": "テツノイワオ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1022.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1022.png"
        },
        "types": [
            "6",
            "14"
        ]
    },
    {
        "id": 1023,
        "names": {
            "en": "iron-crown",
            "ko": "무쇠감투",
            "ja": "テツノカシラ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1023.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1023.png"
        },
        "types": [
            "9",
            "14"
        ]
    },
    {
        "id": 1024,
        "names": {
            "en": "terapagos",
            "ko": "테라파고스",
            "ja": "テラパゴス"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1024.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1024.png"
        },
        "types": [
            "1"
        ]
    },
    {
        "id": 1025,
        "names": {
            "en": "pecharunt",
            "ko": "복숭악동",
            "ja": "モモワロウ"
        },
        "img": {
            "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1025.png",
            "official": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1025.png"
        },
        "types": [
            "4",
            "8"
        ]
    }
]

export default allPokemonData;