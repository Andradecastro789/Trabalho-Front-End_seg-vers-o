import { useState } from "react";
import "./Header.css";

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  function fecharMenu() {
    setMenuAberto(false);
  }

  return (
    <header className="site-header">
      <div className="header-container">

       
        <a href="#hero" className="logo" onClick={fecharMenu}>
          <span>Vanusa</span>
          <small>DOCES & SABORES</small>
        </a>

        
        <nav className={menuAberto ? "nav ativo" : "nav"}>
          <a href="#hero" onClick={fecharMenu}>Início</a>
          <a href="#solution" onClick={fecharMenu}>Soluções</a>
          <a href="#testimonials" onClick={fecharMenu}>Depoimentos</a>
          <a href="#pricing" onClick={fecharMenu}>Produtos</a>
          <a href="#contact" onClick={fecharMenu}>Contato</a>

         
          <div className="mobile-actions">
            <a href="/login" className="login" onClick={fecharMenu}>
              Login
            </a>

            <a href="/cadastro" className="cadastro" onClick={fecharMenu}>
              Cadastre-se
            </a>
          </div>
        </nav>

        
        <div className="header-actions">
          <a href="/login" className="login">
            Login
          </a>

          <a href="/cadastro" className="cadastro">
            Cadastre-se
          </a>
        </div>

        
        <button
          type="button"
          className="menu-hamburger"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
        >
          {menuAberto ? "✕" : "☰"}
        </button>

      </div>
    </header>
  );
}

export default Header;
