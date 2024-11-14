import React, { useState } from 'react';
import './Header.css';
import logo from '../../Images/LogoNutriNews.png';

const Header = ({ today }) => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false);

    const date = new Date(today);
    const formatMonths = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    const day = date.getDate();
    const month = formatMonths[date.getMonth()];
    const year = date.getFullYear();

    // Funções para abrir e fechar os modais
    const handleOpenLoginModal = () => setIsLoginModalOpen(true);
    const handleCloseLoginModal = () => setIsLoginModalOpen(false);

    const handleOpenRegisterModal = () => {
        setIsRegisterModalOpen(true);
        setIsSubscribeModalOpen(false);
    };
    const handleCloseRegisterModal = () => setIsRegisterModalOpen(false);

    const handleOpenSubscribeModal = () => setIsSubscribeModalOpen(true);
    const handleCloseSubscribeModal = () => setIsSubscribeModalOpen(false);

    // Função para fechar o modal ao clicar fora dele
    const handleOverlayClick = (e, closeModal) => {
        if (e.target.classList.contains('login-container')) {
            closeModal();
        }
    };

    return (
        <>
            <header className="header">
                <div className="button-container">
                    <button className="header-button" onClick={handleOpenLoginModal}>Login</button>
                    <button className="header-button register" onClick={handleOpenRegisterModal}>Cadastro</button>
                    <button className="header-button subscribe" onClick={handleOpenSubscribeModal}>Assine Agora</button>
                </div>
                <img src={logo} alt="Nutri News Logo" className="logo" />
                <p>Principais notícias de nutrição para hoje, {`${day} de ${month} de ${year}`}</p>
            </header>

            {/* Modal de Login */}
            {isLoginModalOpen && (
                <div className="login-container" onClick={(e) => handleOverlayClick(e, handleCloseLoginModal)}>
                    <div className="login-box" onClick={(e) => e.stopPropagation()}>
                        <h2>Entrar</h2>
                        <div className="input-container">
                            <input type="email" placeholder="E-mail" className="modal-input" />
                        </div>
                        <div className="input-container">
                            <input type="password" placeholder="Senha" className="modal-input" />
                        </div>
                        <button onClick={handleCloseLoginModal} className="buttonmodal">Entrar</button>
                    </div>
                </div>
            )}

            {/* Modal de Cadastro */}
            {isRegisterModalOpen && (
                <div className="login-container" onClick={(e) => handleOverlayClick(e, handleCloseRegisterModal)}>
                    <div className="login-box" onClick={(e) => e.stopPropagation()}>
                        <h2>Cadastro</h2>
                        <div className="input-container">
                            <input type="text" placeholder="Nome" className="modal-input" />
                        </div>
                        <div className="input-container">
                            <input type="email" placeholder="E-mail" className="modal-input" />
                        </div>
                        <div className="input-container">
                            <input type="password" placeholder="Senha" className="modal-input" />
                        </div>
                        <button onClick={handleCloseRegisterModal} className="buttonmodal">Cadastrar</button>
                    </div>
                </div>
            )}

            {/* Modal de Assinatura */}
            {isSubscribeModalOpen && (
                <div className="login-container" onClick={(e) => handleOverlayClick(e, handleCloseSubscribeModal)}>
                    <div className="login-box" onClick={(e) => e.stopPropagation()}>
                        <h2>Assine Agora</h2>
                        <p>Desfrute de acesso exclusivo a conteúdos de alta qualidade sobre nutrição.</p>
                        <p>Com a nossa assinatura, você terá:</p>
                        <ul>
                            <li>Acesso ilimitado a artigos e publicações</li>
                            <li>Notícias atualizadas sobre o mais alto nível da nutrição moderna</li>
                        </ul>
                        <button className="buttonmodal" onClick={handleOpenRegisterModal}>
                            Já possui uma conta? Cadastre-se
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
