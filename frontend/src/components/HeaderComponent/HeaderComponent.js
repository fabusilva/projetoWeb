import style from './HeaderComponent.module.css';
import logo from '../../img/pageLogo.png';

export default function HeaderComponent(){
    return(
        <div className={style.divHeader}>
            <div className={style.flexContainer}>
                <img className={style.image} src={logo} alt='Logo da pagina'/>
            </div>
            <p className={style.textoHeader}>Sua ajuda pode fazer a diferença</p>
        </div>
    )
}