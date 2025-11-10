import youngsterImg from "../assets/images/Youngster.png";
import hikerImg from "../assets/images/Hiker.png";
import blackBeltImg from "../assets/images/Black_Belt.png";
import aceTrainerImg from "../assets/images/Ace_Trainer.png";
import g_bisang from "../assets/images/g_bisang.png";
import g_bomika from "../assets/images/g_bomika.png";
import g_chaedu from "../assets/images/g_chaedu.png";
import g_donggwan from "../assets/images/g_donggwan.png";
import g_geumrang from "../assets/images/g_geumrang.png";
import g_ggokdu from "../assets/images/g_ggokdu.png";
import g_grusha from "../assets/images/g_grusha.png";
import g_iseul from "../assets/images/g_iseul.png";
import g_mashu from "../assets/images/g_mashu.png";
import g_minji from "../assets/images/g_minji.png";
import g_moyamo from "../assets/images/g_moyamo.png";
import g_pungran from "../assets/images/g_pungran.png";
import g_ung from "../assets/images/g_ung.png";
import g_viola from "../assets/images/g_viola.png";
import g_yacon from "../assets/images/g_yacon.png";
import g_yuchae from "../assets/images/g_yuchae.png";
import f_blary from "../assets/images/f_blary.png";
import f_cheongmok from "../assets/images/f_cheongmok.png";
import f_gukhwa from "../assets/images/f_gukhwa.png";
import f_gwonsu from "../assets/images/f_gwonsu.png";
import f_oyeop from "../assets/images/f_oyeop.png";
import f_pakira from "../assets/images/f_pakira.png";
import f_raichi from "../assets/images/f_raichi.png";
import f_siba from "../assets/images/f_siba.png";
import c_dandel from "../assets/images/c_dandel.png";
import c_green from "../assets/images/c_green.png";
import c_mokho from "../assets/images/c_mokho.png";
import c_nancheon from "../assets/images/c_nancheon.png";

const rank = [
    {
        names: {
            ko: "반바지 꼬마",
            en: "Youngster",
            ja: "たんパンこぞう"
        },
        min: 0,
        max: 20,
        img: [youngsterImg]
    },
    {
        names: {
            ko: "등산가",
            en: "Hiker",
            ja: "やまおとこ"
        },
        min: 20,
        max: 40,
        img: [hikerImg]
    },
    {
        names: {
            ko: "태권왕",
            en: "Black Belt",
            ja: "からておう"
        },
        min: 40,
        max: 60,
        img: [blackBeltImg]
    },
    {
        names: {
            ko: "엘리트 트레이너",
            en: "Ace Trainer",
            ja: "エリートトレーナー"
        },
        min: 60,
        max: 75,
        img: [aceTrainerImg]
    },
    {
        names: {
            ko: "체육관 관장",
            en: "Gym Leader",
            ja: "ジムリーダー"
        },
        min: 75,
        max: 90,
        img: [g_bisang, g_bomika, g_chaedu, g_donggwan, g_geumrang, g_ggokdu, g_grusha, g_iseul, g_mashu, g_minji, g_moyamo, g_pungran, g_ung, g_viola, g_yacon, g_yuchae]
    },
    {
        names: {
            ko: "사천왕",
            en: "Elite Four",
            ja: "四天王"
        },
        min: 90,
        max: 99,
        img: [f_blary, f_cheongmok, f_gukhwa, f_gwonsu, f_oyeop, f_pakira, f_raichi, f_siba]
    },
    {
        names: {
            ko: "챔피언",
            en: "Champion",
            ja: "チャンピオン"
        },
        min: 100,
        max: 100,
        img: [c_dandel, c_green, c_mokho, c_nancheon]
    },

];

export default rank;