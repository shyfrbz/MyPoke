import youngsterImg from "../assets/images/Youngster.png";
import hikerImg from "../assets/images/Hiker.png";
import blackBeltImg from "../assets/images/Black_Belt.png";
import aceTrainerImg from "../assets/images/Ace_Trainer.png";

const rank = [
    {
        names: {
            ko : "반바지 꼬마",
            en : "Youngster",
            ja : "たんパンこぞう"
        },
        min: 0,
        max: 20,
        img: youngsterImg
    },
    {
        names: {
            ko : "등산가",
            en : "Hiker",
            ja : "やまおとこ"
        },
        min: 20,
        max: 40,
        img: hikerImg
    },
    {
        names: {
            ko : "태권왕",
            en : "Black Belt",
            ja : "からておう"
        },
        min: 40,
        max: 60,
        img: blackBeltImg
    },
    {
        names: {
            ko : "엘리트 트레이너",
            en : "Ace Trainer",
            ja : "エリートトレーナー"
        },
        min: 60,
        max: 75,
        img: aceTrainerImg
    },
    {
        names: {
            ko : "체육관 관장",
            en : "Gym Leader",
            ja : "ジムリーダー"
        },
        min: 75,
        max: 90,
        img: ""
    },
    {
        names: {
            ko : "사천왕",
            en : "Elite Four",
            ja : "四天王"
        },
        min: 90,
        max: 99,
        img: ""
    },
    {
        names: {
            ko : "챔피언",
            en : "Champion",
            ja : "チャンピオン"
        },
        min: 100,
        max: 100,
        img: ""
    },

];

export default rank;