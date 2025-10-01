import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Loading from "./Loading/Loading";

function Layout({loading, children}) {
    if (loading) {
        return <Loading/>; // 헤더/푸터 없이 로딩만
    }

    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    );
}

export default Layout;