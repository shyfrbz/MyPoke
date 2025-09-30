import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import List from "./routes/List/List";
import Detail from "./routes/Detail/Detail";
import Home from "./routes/Home";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/detail/:id" element={<Detail/>}/>
                <Route path="/list" element={<List/>}/>
                <Route path={`${process.env.PUBLIC_URL}/`} element={<Home/>}/>
            </Routes>
        </Router>
    );
}

export default App;