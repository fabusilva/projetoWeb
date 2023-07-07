import React,{ useEffect, useState } from "react";

import Menu from "../../components/MenuComponent/MenuComponet";
import axios from "axios";
import style from "./Trabalho.module.css";
export default function Trabalho() {
  const [content, receivedContent] = useState([]);
  const getAll = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/trabalho");
      const data = response.data;
      receivedContent(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAll();
  }, []);
  //console.log(content)
  const trabalhoAdd= async (e) => {
    e.preventDefault();
    console.log(title, description, endereco);
    await axios.post(
      'http://localhost:4000/api/trabalho',({ title:title, description:description, address:endereco })
    );
    window.location.reload();
  };
  async function deletando(id) {
    console.log(id);
    try {
      await axios.delete(`http://localhost:4000/api/trabalho/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [endereco, setEndereco] = useState("");
  const [id, setId] = useState("");
  

  async function update(id){
    console.log(id);
    const trab =await axios.get(`http://localhost:4000/api/trabalho/${id}`);
    const dados = trab.data;
    setId(dados._id);
    setTitle(dados.title);
    setEndereco(dados.address);
    setDescription(dados.description);
    console.log(trab.data);
    openPopup();
  }

  //const [id,setId] = setId("");

  const handleCausa = async (e) => {
    e.preventDefault();
    console.log(title, description, endereco);
    await axios.put(`http://localhost:4000/api/trabalho/${id}`, {
      title: title,
      description: description,
      address: endereco,
    });
    window.location.reload();
  };
  
  //popup de formulario +update
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAdd, setIsOpenAdd] = useState(false);

  const openAddPopup = () => {
    setIsOpenAdd(true);
  };

  const closeAddPopup = () => {
    setIsOpenAdd(false);
  };
  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Menu />
      <div className={style.divConteiner}>
        <h1>Trabalhos Disponiveis</h1>
        <button onClick={openAddPopup}>Criar trabalho</button>
        {content.length === 0 ? (
          <p>Carregando...</p>
        ) : (
          content.map((trabalho) => (
            <div className={style.post} key={trabalho._id}>
              <h3>{trabalho.title}</h3>
              <p>{trabalho.description}</p>
              <p>{trabalho.address}</p>
              <button className={style.btTrabalho} onClick={() => update(trabalho._id)}>Update</button>
              <button className={style.btTrabalho} onClick={() => deletando(trabalho._id)}>Delete</button>
            </div>
          ))
        )}
      </div>
      <div>
        {isOpen && (
          <div className={style.overlay}>
            <div className={style.popup}>
              <div className={style.formContainer}>
                <form>
                <div className={style.invisible}>
                    <label htmlFor="id">Id do trabalho</label>
                    <input
                      type="text"
                      id="id"
                      name="id"
                      value={id}
                      required
                      onChange={(e) => setId(e.target.value)}
                    />
                  </div>
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
                      value={description}
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
                      value={endereco}
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
      <div>
        {isOpenAdd && (
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
                    <button type="submit" onClick={(e) => trabalhoAdd(e)}>
                      Criar
                    </button>
                  </div>
                </form>
              </div>
              <button className={style.btfechar} onClick={closeAddPopup}>
                X
              </button>
            </div>
          </div>
        )}
      </div>

    </>
  );
}

