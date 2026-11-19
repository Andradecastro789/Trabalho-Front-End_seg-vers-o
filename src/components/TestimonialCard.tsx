interface ITestimonialCardProps {
    name: string;
    occupation: string;
    testimony: string;
    rating: number;
    image: string;
}

export default function TestimonialCard({
    name,
    occupation,
    testimony,
    rating,
    image
}: ITestimonialCardProps) {

    return (
        <article className="carousel-card">

            <div className="profile-placeholder">
                <img
                    src={image}
                    alt={`Foto de ${name}`}
                    onError={(event) => {
                        console.error("Erro ao carregar imagem:", image);
                        event.currentTarget.style.display = "none";
                    }}
                />
            </div>

            <span className="testimony">
                <p>{testimony}</p>
            </span>

            <div className="rating" aria-label={`${rating} de 5 estrelas`}>
                {Array.from({ length: 5 }, (_, index) => (
                    <span key={index}>
                        {index < rating ? "★" : "☆"}
                    </span>
                ))}
            </div>

            <div className="names">
                <p>{name}</p>
                <p>{occupation}</p>
            </div>

        </article>
    );
}
