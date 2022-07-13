import { Routes, Route } from "react-router-dom";
import Register from "./commons/register/Register";
import Layout from "./components/Layout";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </div>
  );
}

export default App;
