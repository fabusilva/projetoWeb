import React, { useState } from 'react';
import { Link } from "react-router-dom";
import style from './MenuComponent.module.css';
import logo from '../../img/pageLogo.png';
export default function MenuComponent(){
    const logoClick = () => {
        // Lógica para redirecionar para a home
        // Exemplo:
        window.location.href = '/'; // Redireciona para a página inicial
    };
    const [isOpen, setIsOpen] = useState(false);

    const openPopup = () => {
        setIsOpen(true);
    };

    const closePopup = () => {
        setIsOpen(false);
    };
    return(
        <>
            <nav className={style.menu}>
                <img className={style.imagem} src={logo} alt='Ajudei' onClick={logoClick} />
                <div>
                    <button className={style.btText}>Sobre nós</button>
                    <Link to="/Ongs">Ongs</Link>
                    <Link to="/Tabalho">Trabalhos</Link>
                    <button className={style.btEntrar} onClick={openPopup}>Entrar</button>

                </div>
            </nav><div>


                {isOpen && (
                    <div className={style.overlay}>
                        <div className={style.popup}>
                            <div className={style.flexContainer}>
                                <img className={style.imagempopup} src={logo} alt='Logo da pagina' />
                            </div>
                            <p className={style.text}>Sua ajuda pode fazer a diferença</p>
                            <div className={style.formContainer}> 
                                <form>
                                    <div className={style.formGroup}>
                                        <label htmlFor="username">Endereço de E-mail</label>
                                        <input type="email" id="username" name="username" placeholder='email@address.com' required />
                                    </div>
                                    <div className={style.formGroup}>
                                        <label htmlFor="password">Sua Senha</label>
                                        <input type="password" id="password" name="password" placeholder='***************' required />
                                    </div>
                                    <div className={style.formGroup}>
                                        <button type="submit">Entrar</button>
                                    </div>
                                </form>
                            </div>
                            <Link className={style.link} to="/Register">Não tem uma conta? Clique aqui!</Link>
                            <button className={style.btfechar} onClick={closePopup}>X</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}