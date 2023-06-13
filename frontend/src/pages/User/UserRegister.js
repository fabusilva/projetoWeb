import Menu from "../../components/MenuComponent/MenuComponet";
import Header from "../../components/HeaderComponent/HeaderComponent";
import style from "./UserRegister.module.css";
import React, { useState } from "react";
export default function UserRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para lidar com o envio do formulário
    // e fazer as validações necessárias antes de enviar os dados.
  };
  return (
    <>
      <Menu />
      <Header />
      <form className={style.formConteiner} onSubmit={handleSubmit}>
        <div className={style.divConteiner}>
          <label className={style.labelConteiner} htmlFor="name">
            Seu nome
          </label>
          <input
            className={style.inputConteiner}
            type="text"
            id="name"
            placeholder="Digite seu primeiro nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={style.divConteiner}>
          <label className={style.labelConteiner} htmlFor="email">
            Endereço de E-mail
          </label>
          <input
            className={style.inputConteiner}
            type="email"
            id="email"
            placeholder="email@address.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={style.divConteiner}>
          <label className={style.labelConteiner} htmlFor="password">
            Sua senha
          </label>
          <input
            className={style.inputConteiner}
            type="password"
            id="password"
            placeholder="************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input
            type="checkbox"
            id="terms"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
          />
          <label htmlFor="terms">Li e estou de acordo com o Termo de Uso e <br></br>Politica de privacidade</label>
        </div>
        <button className={style.btEntrar} type="submit">Entrar</button>
      </form>
    </>
  );
}
