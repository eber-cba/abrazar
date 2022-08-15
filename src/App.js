import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {setUser} from "./redux/users"
import { afterLogin } from "./redux/users";
import Layout from "./components/Layout";
import Navbar from "./components/navbar/Navbar";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(afterLogin());
  }, []);
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
