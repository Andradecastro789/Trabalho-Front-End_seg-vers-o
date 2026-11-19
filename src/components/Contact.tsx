import "../styles/contact.css";

export default function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="container">

                <header className="contact-header">
                    <p>ENVIE SUA DÚVIDA</p>

                    <h2>Entre em contato</h2>

                    <span>
                        Entre em contato, estamos dispostos a tirar qualquer
                        dúvida! Seja para solicitar um orçamento ou esclarecer
                        uma dúvida técnica sobre algum de nossos produtos,
                        estaremos à disposição para responder. 😎
                    </span>
                </header>

                <form className="contact-form">

                    <label htmlFor="email">
                        Seu melhor e-mail
                    </label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Digite seu melhor e-mail"
                        required
                    />

                    <label htmlFor="motivo">
                        Motivo do contato
                    </label>

                    <textarea
                        id="motivo"
                        name="motivo"
                        placeholder="Ex: Gostei muito do produto X. Poderia me enviar seu orçamento?"
                        rows={5}
                        required
                    />

                    <button type="submit">
                        Enviar mensagem
                    </button>

                </form>

            </div>
        </section>
    );
}
