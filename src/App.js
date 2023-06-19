import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {setUser} from "./redux/users"
import { afterLogin } from "./redux/users";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import PerfilUser from './components/perfilUser/PerfilUser';
import ViewsHomeless from './components/homeless/viewsHomeless/ViewsHomeless';
import StepsHomeless from "./common/homeless/StepsHomeless";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(afterLogin());
  }, []);
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MiPerfil" element={<PerfilUser />} />
        <Route path="/AddHomeless" element={<StepsHomeless />} />
        <Route path="/ViewsHomeless" element={<ViewsHomeless />} />
      </Routes>
    </div>
  );
}

export default App;
