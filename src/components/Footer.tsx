import "../styles/footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">

                <div className="footer-content">

                   
                    <div className="footer-brand">
                        <h3>Logo marca</h3>

                        <a
                            href="https://www.instagram.com/vanusa_pudimg.confeitaria?knvt=MWMxenMwY3h6OGFwMg=="
                            target="_blank"
                            rel="noreferrer"
                            className="instagram-link"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect
                                    x="3"
                                    y="3"
                                    width="18"
                                    height="18"
                                    rx="5"
                                />
                                <circle cx="12" cy="12" r="4" />
                                <circle
                                    cx="18"
                                    cy="6"
                                    r="1"
                                    fill="currentColor"
                                />
                            </svg>

                            <span>Instagram</span>
                        </a>

                    </div>

                    
                    <div className="footer-column">
                        <h3>Empresa</h3>

                        <a href="#sobre">Sobre nós</a>
                        <a href="#contato">Faça sua parte</a>
                        <a href="#blog">Blog</a>
                    </div>

                    
                    <div className="footer-column">
                        <h3>Funcionalidades</h3>

                        <a href="#marketing">Marketing</a>
                        <a href="#analise">Análise de dados</a>
                        <a href="#discord">Bot Discord</a>
                    </div>

                  
                    <div className="footer-column">
                        <h3>Recursos</h3>

                        <a href="#aplicativos">IOS e ANDROID</a>
                        <a href="#demo">Teste demo</a>
                        <a href="#clientes">Clientes</a>
                        <a href="#api">API</a>
                    </div>

                </div>

                
                <div className="footer-bottom">
                    <p>
                        Feito com amor na aula de programação web ♥
                        <span>@24024 AKTITECH</span>
                        - Todos os direitos reservados.
                    </p>
                </div>

            </div>
        </footer>
    );
}
