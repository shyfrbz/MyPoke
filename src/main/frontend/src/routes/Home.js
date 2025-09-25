import {Link} from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Home() {
    return (
        <div className="wrapper">
            <Header/>
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
            <Footer/>
        </div>
    )
}

export default Home;