# MyPoké

**포켓몬 트레이너를 위한 직관적인 포켓몬 도감과 퀴즈를 제공하는 웹 애플리케이션입니다.**

<div>
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/intellijidea-000000?style=for-the-badge&logo=intellijidea&logoColor=white">
<img src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white">
</div>

## 🔗 배포 링크
- https://shyfrbz.github.io/MyPoke

## 💁프로젝트 소개
포켓몬스터 게임을 플레이하며 느꼈던 **정보 확인의 불편함**을 해소하기 위해 시작한 프로젝트입니다.
게임 플레이에 꼭 필요한 핵심 정보(타입, 상성, 특성, 종족값)만을 빠르게 확인할 수 있도록 직관적인 UI를 구성했습니다.

또한, **포켓몬 퀴즈** 기능을 구현하여, 사이트 이용 시 체류 시간을 높이고 재미를 주고자 하였습니다.

## 주요 기능

### 1. 📖 포켓몬 도감 (Pokedex)
- 무한 스크롤(Infinite Scroll)을 적용하여 자연스럽게 많은 포켓몬의 정보를 확인할 수 있습니다.
- 검색창에 포켓몬 이름 혹은 도감번호 입력 시 자동 완성 기능을 지원합니다.
- 한국어, 영어, 일본어 3개 국어 간 언어 변경이 가능합니다.
- 타입 버튼 클릭 시 해당 타입의 포켓몬만 모아볼 수 있습니다.
- **상세정보**
  - 기본 모습 외에 색이 다른 포켓몬, 성별에 따른 모습을 버튼을 클릭해 확인할 수 있습니다.
  - 포켓몬의 울음소리 또한 버튼으로 재생할 수 있습니다.
  - 진화 정보에서 진화체 포켓몬 클릭 시 진화체 포켓몬의 정보를 확인할 수 있습니다.
  - 방어 상성을 표로 정리하여 한눈에 보기 쉽게 정리했습니다.
  - 종족치를 막대 그래프로 표기하였고, 기준치(70)에 따라 색상을 달리 하여 한눈에 파악할 수 있도록 작업하였습니다.

### 2. 🎮 포켓몬 퀴즈 (Quiz)
- 포켓몬의 모습이나 실루엣을 보고 포켓몬의 이름을 맞추는 퀴즈 기능을 제공합니다.
- 세대, 퀴즈 개수, 그림자 모드 등을 선택하여 플레이할 수 있습니다.
- 퀴즈 정답 수에 따라 결과 페이지에 "챔피언급", "사천왕급", "체육관 관장급" 등의 등급과 일러스트가 출력됩니다.

## 🛠 기술 스택 (Tech Stack)
- **Frontend:** React, Bootstrap
- **API:** [PokeAPI](https://pokeapi.co/)
- **Deployment:** Github Pages

## 🧑‍💻 개발 배경 (Dev Story)

이전까지 Java/Spring Boot 기반의 백엔드 개발을 주로 해왔습니다. 협업 과정에서 프론트엔드 동료들과 더 원활하게 소통하고, 전체적인 프로젝트의 구조를 잘 이해하기 위해서는 프론트엔드 개발 경험이 필수적이라고 느꼈습니다.

이에 React를 독학하며 프로젝트를 기획했습니다. 초기에는 Spring Boot 백엔드까지 포함된 풀스택 구조를 설계했으나, 최근 새 포켓몬 게임이 출시되어 직접 사용해보고 장단점을 파악하여 반영하기 위해 우선 프론트엔드만 배포하였습니다.

## 🚀 추후 계획 (Roadmap)
향후 백엔드 기능을 도입하여 서비스를 확장할 예정입니다.

- [ ] Backend 환경 구축
- [ ] 소셜 로그인을 통한 사용자 계정 연동 및 데이터 저장
- [ ] 퀴즈 점수에 따른 포켓몬 수집 기능
- [ ] 퀴즈 랭킹 시스템 도입
- [ ] 포켓몬 게임에 필요하다고 생각되는 기능 등

## 📁 참고 자료 
- 대부분의 포켓몬 정보 : PokéAPI (https://pokeapi.co/)
- 포켓몬 타입 아이콘 : https://github.com/duiker101/pokemon-type-svg-icons
- 인물 이미지 : Bulbapedia (https://bulbapedia.bulbagarden.net/wiki/Main_Page)
- 사이트 메인 로고 : https://www.streamlinehq.com/icons/download/pokeball--29169

---
*본 프로젝트는 상업적 목적이 아닌 개인 포트폴리오용으로 제작되었으며, 모든 포켓몬 관련 이미지와 데이터의 저작권은 Nintendo, Game Freak, Pokémon Company에 있습니다.*
