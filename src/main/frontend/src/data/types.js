import { ReactComponent as normalIcon } from "../assets/icons/normal.svg";
import { ReactComponent as fireIcon } from "../assets/icons/fire.svg";
import { ReactComponent as waterIcon } from "../assets/icons/water.svg";
import { ReactComponent as electricIcon } from "../assets/icons/electric.svg";
import { ReactComponent as grassIcon } from "../assets/icons/grass.svg";
import { ReactComponent as iceIcon } from "../assets/icons/ice.svg";
import { ReactComponent as fightingIcon } from "../assets/icons/fighting.svg";
import { ReactComponent as poisonIcon } from "../assets/icons/poison.svg";
import { ReactComponent as groundIcon } from "../assets/icons/ground.svg";
import { ReactComponent as flyingIcon } from "../assets/icons/flying.svg";
import { ReactComponent as psychicIcon } from "../assets/icons/psychic.svg";
import { ReactComponent as bugIcon } from "../assets/icons/bug.svg";
import { ReactComponent as rockIcon } from "../assets/icons/rock.svg";
import { ReactComponent as ghostIcon } from "../assets/icons/ghost.svg";
import { ReactComponent as dragonIcon } from "../assets/icons/dragon.svg";
import { ReactComponent as darkIcon } from "../assets/icons/dark.svg";
import { ReactComponent as steelIcon } from "../assets/icons/steel.svg";
import { ReactComponent as fairyIcon } from "../assets/icons/fairy.svg";


const types = [
    {
        id: 1,
        names: {en: "Normal", ko: "노말", ja: "ノーマル"},
        color: {normal: "#9FA19F", bright: "#C1C2C1", dark: "#676967"},
        logo: normalIcon
    },
    {
        id: 2,
        names: {en: "Fighting", ko: "격투", ja: "かくとう"},
        color: {normal: "#FF8000", bright: "#FFAC59", dark: "#A65300"},
        logo: fightingIcon
    },
    {
        id: 3,
        names: {en: "Flying", ko: "비행", ja: "ひこう"},
        color: {normal: "#81B9EF", bright: "#ADD2F5", dark: "#54789B"},
        logo: flyingIcon
    },
    {
        id: 4,
        names: {en: "Poison", ko: "독", ja: "どく"},
        color: {normal: "#9141CB", bright: "#B884DD", dark: "#5E2A84"},
        logo: poisonIcon
    },
    {
        id: 5,
        names: {en: "Ground", ko: "땅", ja: "じめん"},
        color: {normal: "#915121", bright: "#B88E6F", dark: "#5E3515"},
        logo: groundIcon
    },
    {
        id: 6,
        names: {en: "Rock", ko: "바위", ja: "いわ"},
        color: {normal: "#AFA981", bright: "#CBC7AD", dark: "#726E54"},
        logo: rockIcon
    },
    {
        id: 7,
        names: {en: "Bug", ko: "벌레", ja: "むし"},
        color: {normal: "#91A119", bright: "#B8C26A", dark: "#5E6910"},
        logo: bugIcon
    },
    {
        id: 8,
        names: {en: "Ghost", ko: "고스트", ja: "ゴースト"},
        color: {normal: "#704170", bright: "#A284A2", dark: "#492A49"},
        logo: ghostIcon
    },
    {
        id: 9,
        names: {en: "Steel", ko: "강철", ja: "はがね"},
        color: {normal: "#60A1B8", bright: "#98C2D1", dark: "#3E6978"},
        logo: steelIcon
    },
    {
        id: 10,
        names: {en: "Fire", ko: "불꽃", ja: "ほのお"},
        color: {normal: "#E62829", bright: "#EF7374", dark: "#961A1B"},
        logo: fireIcon
    },
    {
        id: 11,
        names: {en: "Water", ko: "물", ja: "みず"},
        color: {normal: "#2980EF", bright: "#74ACF5", dark: "#1B539B"},
        logo: waterIcon
    },
    {
        id: 12,
        names: {en: "Grass", ko: "풀", ja: "くさ"},
        color: {normal: "#3FA129", bright: "#82C274", dark: "#29691B"},
        logo: grassIcon
    },
    {
        id: 13,
        names: {en: "Electric", ko: "전기", ja: "でんき"},
        color: {normal: "#FAC000", bright: "#FCD659", dark: "#A37D00"},
        logo: electricIcon
    },
    {
        id: 14,
        names: {en: "Psychic", ko: "에스퍼", ja: "エスパー"},
        color: {normal: "#EF4179", bright: "#F584A8", dark: "#9B2A4F"},
        logo: psychicIcon
    },
    {
        id: 15,
        names: {en: "Ice", ko: "얼음", ja: "こおり"},
        color: {normal: "#3DCEF3", bright: "#81DFF7", dark: "#28869E"},
        logo: iceIcon
    },
    {
        id: 16,
        names: {en: "Dragon", ko: "드래곤", ja: "ドラゴン"},
        color: {normal: "#5060E1", bright: "#8D98EC", dark: "#343E92"},
        logo: dragonIcon
    },
    {
        id: 17,
        names: {en: "Dark", ko: "악", ja: "あく"},
        color: {normal: "#624D4E", bright: "#998B8C", dark: "#403233"},
        logo: darkIcon
    },
    {
        id: 18,
        names: {en: "Fairy", ko: "페어리", ja: "フェアリー"},
        color: {normal: "#EF70EF", bright: "#F5A2F5", dark: "#9B499B"},
        logo: fairyIcon
    },
];

export default types;