import React, { useEffect, useState } from "react";
import Menu from "../../components/MenuComponent/MenuComponet";
import axios from "axios";
import style from "./Causa.module.css";
export default function Causa() {
  const [content, receivedContent] = useState([]);
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const openAddPopup = () => {
    setIsOpenAdd(true);
  };

  const closeAddPopup = () => {
    setIsOpenAdd(false);
  };
  const getAll = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/causa");
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
  async function deletando(id) {
    console.log(id);
    try {
      await axios.delete(`http://localhost:4000/api/causa/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [endereco, setEndereco] = useState("");
  const [id, setId] = useState("");

  async function update(id) {
    console.log(id);
    const trab = await axios.get(`http://localhost:4000/api/causa/${id}`);
    const dados = trab.data;
    setId(dados._id);
    setTitle(dados.title);
    setEndereco(dados.address);
    setDescription(dados.description);
    console.log(trab.data);
    openPopup();
  }

  //const [id,setId] = setId("");
  const addCausa = async (e) =>{
    e.preventDefault();
    console.log(title, description, endereco);
    try {
      const response = await axios.post("http://localhost:4000/api/causa", {
        title: title,
        description: description,
        address: endereco,
      });
      window.location.reload();
      console.log(response)
      
    } catch (error) {
      console.log(error)
      alert("Ocorreu um erro");
    }
  }
  const handleCausa = async (e) => {
    e.preventDefault();
    console.log(title, description, endereco);
    await axios.put(`http://localhost:4000/api/causa/${id}`, {
      title: title,
      description: description,
      address: endereco,
    });
    window.location.reload();
  };

  //popup de formulario +update
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="post-wrapper">
          <h1>Causas Disponiveis</h1>
          <button onClick={openAddPopup}>Criar Causas</button>
          {content.length === 0 ? (
            <p>Carregando...</p>
          ) : (
            content.map((causa) => (
              <div className={style.post} key={causa._id}>
                <h3>{causa.title}</h3>
                <p>{causa.description}</p>
                <p>{causa.address}</p>
                <button onClick={() => update(causa._id)}>Update</button>
                <button onClick={() => deletando(causa._id)}>Delete</button>
              </div>
            ))
          )}
        </div>
      </div>
      <div>
        {isOpen && (
          <div className={style.overlay}>
            <div className={style.popup}>
              <div className={style.formContainer}>
                <form>
                  <div className={style.invisible}>
                    <label htmlFor="id">Id da causa</label>
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
                    <button type="submit" onClick={(e) => addCausa(e)}>
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
