interface ContactData {
    email: string;
    message: string;
}

export async function sendContactEmail(data: ContactData) {

    const response = await fetch("/api/send-email", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(data)
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(
            result.error || "Erro ao enviar mensagem."
        );
    }

    return result;
}
