import React, { useState } from "react";
import Menu from "../../components/MenuComponent/MenuComponet";
export default function User() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    password: "********",
  });

  
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  
  const handleNameChange = (e) => {
    setUser({ ...user, name: e.target.value });
  };

  const handleEmailChange = (e) => {
    setUser({ ...user, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setUser({ ...user, password: e.target.value });
  };

  const handleUpdateProfile = () => {
    // Lógica para atualizar o perfil no servidor
    console.log("Perfil atualizado:", user);
  };

  const handleDeleteAccount = () => {
    // Lógica para excluir a conta no servidor
    console.log("Conta excluída");
  };
  return (
    <>
      <Menu />
      <div>
        <h2>Perfil do Usuário</h2>
        <label>
          Nome:
          <input type="text" value={user.name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={user.email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Senha:
          <input
            type="password"
            value={user.password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button onClick={handleUpdateProfile}>Atualizar Perfil</button>
        <button onClick={handleDeleteAccount}>Deletar Conta</button>

        <h3>Causas:</h3>
          {items.map((item, index) => (
            <div key={index}>
                {item}
                <button>Certificado</button>
                <button>Desinscrever</button>
            </div>
          ))}

      <h3>Trabalhos:</h3>
          {items.map((item, index) => (
            <div key={index}>
                {item}
                <button>Certificado</button>
                <button>Desinscrever</button>
            </div>
          ))}
      </div>
    </>
  );
}
