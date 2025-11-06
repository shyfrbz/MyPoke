import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import List from "./routes/List/List";
import Detail from "./routes/Detail/Detail";
import Home from "./routes/Home/Home";
import TypeList from "./routes/TypeList/TypeList";
import SearchList from "./routes/SearchList/SearchList";
import QuizSetup from "./routes/QuizSetup/QuizSetup";
import QuizPlay from "./routes/QuizPlay/QuizPlay";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/detail/:id" element={<Detail/>}/>
                <Route path="/type/:id" element={<TypeList/>}/>
                <Route path="/search/:keyword" element={<SearchList/>}/>
                <Route path="/list" element={<List/>}/>
                <Route path="/quiz/setup" element={<QuizSetup/>}/>
                <Route path="/quiz/play" element={<QuizPlay/>}/>
                <Route path={`${process.env.PUBLIC_URL}/`} element={<Home/>}/>
            </Routes>
        </Router>
    );
}

export default App;