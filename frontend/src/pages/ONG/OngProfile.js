import MenuComponent from "../../components/MenuComponent/MenuComponet";
import { useState } from "react";
import "./OngProfile.css"

export default function OngProfile(){
    const [user, setUser] = useState({
        name: "Ong exemplo",
        email: "ong@example.com",
        description: "Dado mokado",
        cnpj: "1213213214",
        address: "Rua dos bobos",
        password: "********",
      });
    
      
      const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
    
      
      const handleNameChange = (e) => {
        setUser({ ...user, name: e.target.value });
      };
    
      const handleEmailChange = (e) => {
        setUser({ ...user, email: e.target.value });
      };

      const handleDescriptionChange = (e) => {
        setUser({ ...user, description: e.target.value });
      };

      const handleCnpjChange = (e) => {
        setUser({ ...user, cnpj: e.target.value });
      };

      const handleAddressChange = (e) => {
        setUser({ ...user, cnpj: e.target.value });
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
          <MenuComponent />
          <div className="container">
            <h2>Perfil da Ong</h2>
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
              Descrição:
              <input type="text" value={user.description} onChange={handleDescriptionChange} />
            </label>
            <br />

            <label>
              Cnpj:
              <input type="text" value={user.cnpj} onChange={handleCnpjChange} />
            </label>
            <br />

            <label>
              Endereço:
              <input type="text" value={user.address} onChange={handleAddressChange} />
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
            <div className="carousel-container">
  <div className="carousel">
    {items.map((item, index) => (
      <div className="carousel-item" key={index}>
        {item}
        <button>Editar</button>
        <button>Deletar</button>
      </div>
    ))}
  </div>
</div>

          </div>
        </>
      );
}