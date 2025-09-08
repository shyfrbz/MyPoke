import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import List from "./routes/List";
import {useEffect, useState} from "react";
import axios from "axios";

function App(){
  return <Router>
    <Routes>
      <Route path="/list" element={<List />} />
      {/*<Route path={`${process.env.PUBLIC_URL}/`} element={<Home />}/>*/}
    </Routes>
  </Router>
  // const [data, setData] = useState('');
  //
  // useEffect(()=>{
  //   axios.get("http://localhost:8090/test")
  //       .then(res => setData(res.data))
  //       .catch(err => console.log("error : " + err))
  // })
  //
  // return data;
}

export default App;