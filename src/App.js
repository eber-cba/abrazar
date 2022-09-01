import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {setUser} from "./redux/users"
import { afterLogin } from "./redux/users";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import PerfilUser from './components/perfilUser/PerfilUser';
import AddHomeless from './components/homeless/AddHomeless';
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
        <Route path="/AddHomeless" element={<AddHomeless />} />

      </Routes>
    </div>
  );
}

export default App;
