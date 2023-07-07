import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/User/UserRegister";
import Ong from "./pages/ONG/OngRegister";
import Causa from "./pages/Causa/Causa";
import Trabalho from "./pages/Trabalho/Trabalho";
import User from "./pages/User/User";
import OngProfile from "./pages/ONG/OngProfile";
import OngRegister from "./pages/ONG/OngRegister";

export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        {/* rotas publicas */}
        <Route path="/" exact element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Ongs" element={<Ong />} />
        <Route path="/Tabalho" element={<Trabalho />} />
        <Route path="/Causas" element={<Causa />} />
        <Route path="/OngRegister" element={<OngRegister />} />
        {/* rotas privadas */}
        <Route path="/User" element={<User />} />
        <Route path="/OngPrifile" element={<OngProfile />} />
      </Routes>
    </BrowserRouter>
  );
}
