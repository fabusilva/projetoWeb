import style from "./CardComponet.module.css";

export default function CardComponet() {
    
      const cadastradoClick = () => {
        window.location.href = "/Register";
      };

      const trabalhoClick = () => {
        window.location.href = "/Tabalho";
      };

      const causaClick = () => {
        window.location.href = "/Causas";
      };
      
  
  return (
    <>
      <div className={style.infoHome}>
        <div className={style.info1}>
          <button className={style.bt1} onClick={trabalhoClick}>Buscar Trabalhos</button>
          <p className={style.textoInfo}>
            Entre em projetos criado<br></br>
            por outras pessoas<br></br>e junte-se a eles de forma indepedente.
          </p>
        </div>

        <div className={style.info2}>
          <button onClick={cadastradoClick}>Criar Conta</button>
          <p className={style.textoInfo}>
            Tenha a iniciativa e ajude de forma idependente.<br></br>
            Crie projetos sociais e reuna-se<br></br>
            com pessoas<br></br>
            que tem os mesmos interesses que os seu
          </p>
        </div>

        <div className={style.info3}>
          <button onClick={causaClick}>Buscar Causas</button>
          <p className={style.textoInfo}>
            Ajude uma ONG em sua causa. Uma causa de ONG é uma iniciativa
            <br></br>
            que visa resolver ou minimizar <br></br>
            um problema social ou ambiental específico.
          </p>
        </div>
      </div>
      
    </>
  );
}
