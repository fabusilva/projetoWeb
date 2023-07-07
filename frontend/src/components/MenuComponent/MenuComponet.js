import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./MenuComponent.module.css";
import logo from "../../img/pageLogo.png";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

export default function MenuComponent() {
  const {setAuth} = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
    const response = await axios.get(`http://localhost:4000/api/login/${email}/${password}`);
    const data = response?.data;
    const roles = data?.roles;
    const token = data?.token;
    const user = data?.usuario;
    setAuth({user,roles,token});
    console.log("Tipo de usuario:",roles,"\nToken: ",token);
    } catch (error) {
      console.log(error);
      if(!error?.response){
        alert("Servidor fora do ar!!!")
      }else if(error.response?.status === 404){
        alert("Email ou senha incorretos!!!!")
      }else{
        alert("Login falhou")
      }
    }
  };
  const logoClick = () => {
    window.location.href = "/";
  };
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };
  return (
    <>
      <nav className={style.menu}>
        <img
          className={style.imagem}
          src={logo}
          alt="Ajudei"
          onClick={logoClick}
        />
        <div className={style.linkConteiner}>
          <Link className = {style.linkMenu} to= "/Causas">Causas</Link>
          <Link className = {style.linkMenu} to="/Ongs">Ongs</Link>
          <Link className = {style.linkMenu} to="/Tabalho">Trabalhos</Link>
          <button className={style.btEntrar} onClick={openPopup}>
            Entrar
          </button>
        </div>
      </nav>

      {/*popup de login*/}

      <div>
        {isOpen && (
          <div className={style.overlay}>
            <div className={style.popup}>
              <div className={style.flexContainer}>
                <img
                  className={style.imagempopup}
                  src={logo}
                  alt="Logo da pagina"
                />
              </div>
              <p className={style.text}>Sua ajuda pode fazer a diferença</p>
              <div className={style.formContainer}>
                <form>
                  <div className={style.formGroup}>
                    <label htmlFor="username">Endereço de E-mail</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="email@address.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className={style.formGroup}>
                    <label htmlFor="password">Sua Senha</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="***************"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className={style.conteinerLogin}>
                    <button className={style.btLogin} type="submit" onClick={(e) =>handleLogin(e)}>Entrar</button>
                  </div>
                </form>
              <Link className={style.link} to="/Register">
                Não tem uma conta? Clique aqui!
              </Link>
              </div>
              <button className={style.btfechar} onClick={closePopup}>
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
