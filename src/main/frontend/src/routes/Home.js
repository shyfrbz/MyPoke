import {Link} from "react-router-dom";

function Home() {
    return (
        <div>
            <Link to={"/list"}>
                <span>도감</span>
            </Link>
            <Link to={"/quiz"}>
                <span>퀴즈</span>
            </Link>
            <Link to={"/myPage"}>
                <span>마이페이지</span>
            </Link>
        </div>
    )
}

export default Home;