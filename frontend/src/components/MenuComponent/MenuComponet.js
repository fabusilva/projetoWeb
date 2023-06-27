import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./MenuComponent.module.css";
import logo from "../../img/pageLogo.png";
export default function MenuComponent() {
  const logoClick = () => {
    // Lógica para redirecionar para a home
    // Exemplo:
    window.location.href = "/"; // Redireciona para a página inicial
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
                      id="username"
                      name="username"
                      placeholder="email@address.com"
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
                      required
                    />
                  </div>
                  <div className={style.conteinerLogin}>
                    <button className={style.btLogin} type="submit">Entrar</button>
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
