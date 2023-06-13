import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/User/UserRegister";
import Ong from "./pages/ONG/OngRegister";
import Causa from "./pages/Causa/Causa";
import Trabalho from "./pages/Trabalho/Trabalho";

export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Ongs" element={<Ong />} />
        <Route path="/Tabalho" element={<Trabalho />} />
        <Route path="/Causas" element={<Causa />} />
      </Routes>
    </BrowserRouter>
  );
}
