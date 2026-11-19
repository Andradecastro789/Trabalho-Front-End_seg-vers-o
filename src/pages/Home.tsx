import { useEffect, useState } from "react";

import Button from "../components/Button";
import TestimonialCard from "../components/TestimonialCard";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import PricingCard from "../components/PricingCard";

import "../styles/utility.css";
import "../styles/header.css";
import "../styles/hero.css";
import "../styles/solution.css";
import "../styles/testimonials.css";
import "../styles/pricing.css";
import "../styles/footer.css";

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    
    const plans = [
        {
            name: "Essencial",
            description: "Para quem deseja experimentar nossos sabores.",
            price: "R$ 35,00",
            period: "por pedido",
            features: [
                "Uma caixa de docinhos",
                "Sabores tradicionais",
                "Produção artesanal"
            ]
        },
        {
            name: "Especial",
            description: "Ideal para compartilhar momentos especiais.",
            price: "R$ 89,90",
            period: "por pedido",
            featured: true,
            badge: "MAIS ESCOLHIDO",
            features: [
                "Bolo de sua preferência",
                "Docinhos variados",
                "Produtos fresquinhos",
                "Atendimento personalizado"
            ]
        },
        {
            name: "Festa",
            description: "Para comemorações e eventos especiais.",
            price: "Sob consulta",
            period: "por pedido",
            features: [
                "Bolos personalizados",
                "Docinhos para festas",
                "Salgados variados",
                "Orçamento personalizado"
            ]
        }
    ];
     const testimonials = [
        {
            name: "Cliente 1",
            occupation: "Cliente",
            testimony:
                "Produtos deliciosos, muito bem preparados e feitos com carinho!",
            rating: 5,
            image: "/images/cliente1.jpg"
        },
        {
            name: "Cliente 2",
            occupation: "Cliente",
            testimony:
                "Adorei os doces! Tudo muito gostoso e caprichado.",
            rating: 5,
            image: "/images/cliente2.jpg"
        },
        {
            name: "Cliente 3",
            occupation: "Cliente",
            testimony:
                "Ótima qualidade e atendimento. Recomendo!",
            rating: 4,
            image: "/images/cliente3.jpg"
        }
    ];

  
    useEffect(() => {
        const html = document.querySelector("html");

        if (html) {
            html.style.overflow = showMobileMenu ? "hidden" : "auto";
        }

        return () => {
            if (html) {
                html.style.overflow = "auto";
            }
        };
    }, [showMobileMenu]);

    function closeMenu() {
        setShowMobileMenu(false);
    }

    return (
        <>
           
            <div className="header-wrapper">
                <header className="container">

                    <a href="#hero" className="logo" onClick={closeMenu}>
                        <span>Vanusa</span>
                        <small>DOCES & SABORES</small>
                    </a>

                    <nav className="header-nav">
                        <div className="desktop-only">
                            <ul className="header-links">
                                <li><a href="#hero">Início</a></li>
                                <li><a href="#bolos">Nossos Bolos</a></li>
                                <li><a href="#solution">Soluções</a></li>
                                <li><a href="#testimonials">Depoimentos</a></li>
                                <li><a href="#pricing">Produtos</a></li>
                                <li><a href="#contact">Contato</a></li>
                            </ul>
                        </div>

                        <div className="header-actions desktop-only">
                            <a className="login" href="#login">Login</a>
                            <Button text="Cadastre-se" href="#contact" />
                        </div>
                    </nav>

                  
                    <div className="mobile-menu">
                        {!showMobileMenu ? (
                            <button
                                type="button"
                                onClick={() => setShowMobileMenu(true)}
                                className="btn-wrapper"
                                aria-label="Abrir menu"
                                aria-expanded={false}
                            >
                                ☰
                            </button>
                        ) : (
                            <div className="mobile-menu-content">

                                <div className="mobile-menu-header">
                                    <a
                                        href="#hero"
                                        className="logo"
                                        onClick={closeMenu}
                                    >
                                        <span>Vanusa</span>
                                        <small>DOCES & SABORES</small>
                                    </a>

                                    <button
                                        type="button"
                                        onClick={closeMenu}
                                        className="btn-wrapper"
                                        aria-label="Fechar menu"
                                    >
                                        ✕
                                    </button>
                                </div>

                                <ul>
                                    <li><a onClick={closeMenu} href="#hero">Início</a></li>
                                    <li><a onClick={closeMenu} href="#bolos">Nossos Bolos</a></li>
                                    <li><a onClick={closeMenu} href="#solution">Soluções</a></li>
                                    <li><a onClick={closeMenu} href="#testimonials">Depoimentos</a></li>
                                    <li><a onClick={closeMenu} href="#pricing">Produtos</a></li>
                                    <li><a onClick={closeMenu} href="#contact">Contato</a></li>
                                    <li><a onClick={closeMenu} className="login" href="#login">Login</a></li>
                                    <li><a onClick={closeMenu} className="cadastro" href="#contact">Cadastre-se</a></li>
                                </ul>

                            </div>
                        )}
                    </div>
                </header>
            </div>

           
            <section id="hero">
                <div className="hero-decoration">
                    <div className="hero-circle">♡</div>
                    <div className="hero-decoration-small">✿</div>
                </div>

                <div className="container content">
                    <p className="desktop-only">
                        Vanusa Doces & Sabores
                    </p>

                    <h1>
                        UMA SOLUÇÃO QUE IRÁ TE ENTREGAR DIVERSOS SABORES
                    </h1>

                    <p>
                        Você sabe que, para alcançar o sucesso, é fundamental
                        ter parceiros que te impulsionem a ir mais longe.
                    </p>

                    <div className="hero-buttons">
                        <Button text="Cadastre-se" href="#contact" />
                        <Button text="Veja mais" secondary href="#solution" />
                    </div>
                </div>
            </section>

            
            <section id="bolos" className="container bolos-section">

                <div className="bolos-header">
                    <span className="section-kicker">
                        Vanusa Doces & Sabores
                    </span>

                    <h2>Nossos Bolos</h2>

                    <p>
                        Bolos preparados artesanalmente, com muito carinho
                        para deixar seus momentos ainda mais especiais.
                    </p>
                </div>

                <div className="bolos-grid">

                    <article className="bolo-card">
                        <img
                            src="/images/bolo1.jpeg"
                            alt="Bolo artesanal 1"
                        />

                        <div className="bolo-card-content">
                            <h3>Bolo Especial</h3>
                            <p>
                                Sabor e carinho em cada pedaço.
                            </p>
                            <a href="#contact">Fazer encomenda</a>
                        </div>
                    </article>

                    <article className="bolo-card">
                        <img
                            src="/images/bolo2.jpeg"
                            alt="Bolo artesanal 2"
                        />

                        <div className="bolo-card-content">
                            <h3>Bolo Artesanal</h3>
                            <p>
                                Uma opção deliciosa para qualquer ocasião.
                            </p>
                            <a href="#contact">Fazer encomenda</a>
                        </div>
                    </article>

                    <article className="bolo-card">
                        <img
                            src="/images/bolo3.jpeg"
                            alt="Bolo artesanal 3"
                        />

                        <div className="bolo-card-content">
                            <h3>Bolo da Vanusa</h3>
                            <p>
                                Feito com ingredientes selecionados.
                            </p>
                            <a href="#contact">Fazer encomenda</a>
                        </div>
                    </article>

                </div>
            </section>

           
            <section className="container" id="solution">

                <div className="solution-showcase">

                    <div className="solution-intro">

                        <span className="section-kicker">
                            Vanusa Doces & Sabores
                        </span>

                        <h2>
                            O sabor que você procura em um só lugar
                        </h2>

                        <p>
                            Receitas preparadas com carinho, ingredientes
                            selecionados e aquele toque especial que transforma
                            qualquer momento em uma lembrança deliciosa.
                        </p>

                        <a className="solution-more" href="#pricing">
                            Saiba mais <span>›</span>
                        </a>

                    </div>

                    <div className="solution-feature-cards">

                        
                        <article className="solution-feature-card">

                            <img
                                src="/images/Bolinho2.png"
                                alt="Bolos especiais"
                                className="solution-image"
                            />

                            <h3>Bolos especiais</h3>

                            <p>
                                Sabores especiais para comemorar
                                seus melhores momentos.
                            </p>

                            <span className="feature-line"></span>

                        </article>

                        
                        <article className="solution-feature-card">

                            <img
                                src="/images/Pudim.png"
                                alt="Pudins artesanais"
                                className="solution-image"
                            />

                            <h3>Pudins artesanais</h3>

                            <p>
                                Sobremesas cremosas e deliciosas
                                para adoçar o seu dia.
                            </p>

                            <span className="feature-line"></span>

                        </article>

                    </div>
                </div>

                
                <div className="solution-detail">

                    <div className="solution-visual">

                        <div className="visual-pink-block"></div>

                        <div className="visual-sparkle sparkle-one">
                            ✦
                        </div>

                        <div className="visual-sparkle sparkle-two">
                            ✧
                        </div>

                        <div className="dessert-plate">

                            <img
                                src="/images/bolinho.png"
                                alt="Bolo artesanal"
                                className="dessert-emoji"
                            />

                        </div>

                        <div className="visual-note">
                            <span>Feito com carinho</span>
                            <strong>♡</strong>
                        </div>

                    </div>

                    <div className="solution-detail-copy">

                        <span className="section-kicker">
                            Nossas especialidades
                        </span>

                        <h2>
                            Encomendas especiais para cada ocasião
                        </h2>

                        <p>
                            Seja para uma festa, um presente ou para deixar
                            o café da tarde mais gostoso, temos opções
                            especiais para você. Escolha seus sabores
                            favoritos e faça sua encomenda.
                        </p>

                        <a className="solution-more" href="#contact">
                            Faça sua encomenda <span>›</span>
                        </a>

                    </div>
                </div>

            </section>

            <section id="testimonials">

                <header>
                    <span>
                        <p className="desktop-only">
                            Conselho de quem conhece
                        </p>

                        <h2>Cada cliente importa!</h2>
                    </span>

                    <p>
                        Quem experimenta nossos produtos conhece
                        a qualidade e o carinho presentes em cada receita.
                    </p>
                </header>

                <section className="carousel">

                    <div className="carousel-content">

                        {testimonials.map((client) => (
                            <TestimonialCard
                                key={client.name}
                                name={client.name}
                                occupation={client.occupation}
                                testimony={client.testimony}
                                rating={client.rating}
                                image={client.image}
                            />
                        ))}

                    </div>

                  
                    <div className="carousel-content" aria-hidden="true">

                        {testimonials.map((client) => (
                            <TestimonialCard
                                key={`duplicado-${client.name}`}
                                name={client.name}
                                occupation={client.occupation}
                                testimony={client.testimony}
                                rating={client.rating}
                                image={client.image}
                            />
                        ))}

                    </div>

                </section>
            </section>

           
            <section id="pricing" className="container">

                <header>
                    <p className="desktop-only">Planos e preços</p>
                    <h2>Nossos produtos</h2>
                </header>

                <section className="even-columns gap-1.5">

                    {plans.map((plan, index) => (
                        <PricingCard
                            key={index}
                            name={plan.name}
                            description={plan.description}
                            price={plan.price}
                            period={plan.period}
                            features={plan.features}
                            featured={plan.featured}
                            badge={plan.badge}
                        />
                    ))}

                </section>
            </section>

           
            <Contact />

            <Footer />

        </>
    );
}
