import style from './TextComponet.module.css';
export default function TextComponet(){
    return(
        <div className={style.divConteiner}>
            <p className={style.textoConteiner}>
            Se você tem vontade de fazer a diferença no mundo<br></br>
            a Ajudei é uma plataforma de voluntariado que pode te ajudar <br></br>
            a encontrar causas sociais para você apoiar.
            </p>
        </div>
    )
}