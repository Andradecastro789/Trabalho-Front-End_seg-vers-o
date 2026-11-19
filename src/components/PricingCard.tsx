interface IPricingCardProps {
    name: string;
    description: string;
    price: string;
    period?: string;
    features: string[];
    featured?: boolean;
    badge?: string;
}

export default function PricingCard({
    name,
    description,
    price,
    period,
    features,
    featured = false,
    badge
}: IPricingCardProps) {

    return (
        <article className={`pricing-card ${featured ? "premium" : ""}`}>

            {badge && (
                <span className="bonus">
                    <p>{badge}</p>
                </span>
            )}

            <div className="plan">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>

            <div className="price">
                <h2>{price}</h2>
                {period && <p>{period}</p>}
            </div>

            <a href="#contact" className="pricing-button">
                Quero esse plano
            </a>

            <span className="hr"></span>

            <ul className="features">
                {features.map((feature, index) => (
                    <li key={index}>
                        <span className="check">✓</span>
                        <p>{feature}</p>
                    </li>
                ))}
            </ul>

        </article>
    );
}
