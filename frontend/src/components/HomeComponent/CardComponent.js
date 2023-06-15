import React, { useState } from "react";
import style from "./CardComponet.module.css";
import axios from "axios";

export default function CardComponet() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [endereco, setEndereco] = useState('');    

    const handleCausa = async (e) => {
        e.preventDefault();
        console.log(title, description, endereco);
        await axios.post(
          'http://localhost:3000/api/trabalho',({ title:title, description:description, address:endereco })
        );
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
      <div className={style.infoHome}>
        <div className={style.info1}>
          <button className={style.bt1}>Buscar Trabalhos</button>
          <p className={style.textoInfo}>
            Entre em projetos criado<br></br>
            por outras pessoas<br></br>e junte-se a eles de forma indepedente.
          </p>
        </div>

        <div className={style.info2}>
          <button onClick={openPopup}>Criar Trabalhos</button>
          <p className={style.textoInfo}>
            Tenha a iniciativa e ajude de forma idependente.<br></br>
            Crie projetos sociais e reuna-se<br></br>
            com pessoas<br></br>
            que tem os mesmos interesses que os seu
          </p>
        </div>

        <div className={style.info3}>
          <button>Buscar Causas</button>
          <p className={style.textoInfo}>
            Ajude uma ONG em sua causa. Uma causa de ONG é uma iniciativa
            <br></br>
            que visa resolver ou minimizar <br></br>
            um problema social ou ambiental específico.
          </p>
        </div>
      </div>
      <div>
        {isOpen && (
          <div className={style.overlay}>
            <div className={style.popup}>
              <div className={style.formContainer}>
                <form>
                  <div className={style.formGroup}>
                    <label htmlFor="title">Titulo do trabalho</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Nome do trabalho voluntario"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className={style.formGroup}>
                    <label htmlFor="description">Descrição</label>
                    <input
                      type="text"
                      id="description"
                      name="description"
                      placeholder="Faça uma descrição do trabalho"
                      required
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className={style.formGroup}>
                    <label htmlFor="endereco">Endereço</label>
                    <input
                      type="text"
                      id="endereco"
                      name="endereco"
                      placeholder="Endereço do local"
                      required
                      onChange={(e) => setEndereco(e.target.value)}
                    />
                  </div>
                  <div className={style.formGroup}>
                    <button type="submit" onClick={(e) => handleCausa(e)}>
                      Criar
                    </button>
                  </div>
                </form>
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
