import Menu from "../../components/MenuComponent/MenuComponet";
import style from './UserRegister.module.css'
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
      <form className={style.formConteiner} onSubmit={handleSubmit}>
        <div className={style.divConteiner}>
          <label htmlFor="name">Seu nome</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={style.divConteiner}>
          <label htmlFor="email">Endereço de E-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={style.divConteiner}>
          <label htmlFor="password">sua senha:</label>
          <input
            type="password"
            id="password"
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
          <label htmlFor="terms">Aceito os termos de uso</label>
        </div>
        <button type="submit">Entrar</button>
      </form>
    </>
  );
}
