import Menu from "../../components/MenuComponent/MenuComponet";
import axios from "axios";
import React, { useState } from "react";
import style from "./OngRegister.module.css";
export default function OngRegister() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(name, email, password,cnpj,address,description)
      const post = await axios.post('http://localhost:4000/api/ong', {name:name,email:email,description:description,cnpj:cnpj,address:address,password:password});
      const response = await axios.get(`http://localhost:4000/api/login/${email}/${password}`);
      console.log(post,response);
      //window.location.href = "/";
    } catch (error) {
      console.log(error);
      alert("Ong não cadastrada!")
    }
  };
  return (
    <>
      <Menu />
      <form className={style.formConteiner} onSubmit={handleSubmit}>
        <div className={style.divConteiner}>
          <label className={style.labelConteiner} htmlFor="name">
            Nome da instituição
          </label>
          <input
            className={style.inputConteiner}
            type="text"
            id="name"
            placeholder="Digite seu nome"
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
          <label className={style.labelConteiner} htmlFor="description">
            Descrição
          </label>
          <input
            className={style.inputConteiner}
            type="text"
            id="description"
            placeholder="Fale quem é você"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className={style.divConteiner}>
          <label className={style.labelConteiner} htmlFor="cnpj">
            CNPJ/CPF
          </label>
          <input
            className={style.inputConteiner}
            type="text"
            id="cnpj"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
          />
        </div>

        <div className={style.divConteiner}>
          <label className={style.labelConteiner} htmlFor="address">
            Endereço
          </label>
          <input
            className={style.inputConteiner}
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
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
          <label htmlFor="terms">
            Li e estou de acordo com o Termo de Uso e <br></br>Politica de
            privacidade
          </label>
        </div>
        <button className={style.btEntrar} type="submit">
          Entrar
        </button>
      </form>
    </>
  );
}
