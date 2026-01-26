module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  const { message } = body || {};
  if (!message) return res.status(400).json({ error: "Falta 'message'." });

  const key = process.env.OPENROUTER_API_KEY;
  if (!key) return res.status(500).json({ error: "Falta OPENROUTER_API_KEY en Vercel." });

  const systemPrompt = `Eres el Director de Juego de una aventura de superhéroes llamada "Héroes en la Sombra - LEGADO". Tu misión es crear una experiencia inmersiva y narrativa donde el jugador es un joven superhéroe que descubre sus poderes y su legado familiar.

Normas:
- Responde de forma concisa y narrativa (máximo 150 palabras)
- Crea situaciones emocionantes adaptadas a las acciones del jugador
- El tono debe ser épico pero accesible para todas las edades
- Presenta decisiones con consecuencias significativas
- El jugador debe sentir que sus elecciones importan
- Introduce gradualmente el mundo de superhéroes y villanos
- Mantén el misterio sobre el legado familiar del personaje

Contexto del mundo:
- La ciudad está protegida por superhéroes veteranos
- Hay una amenaza creciente de villanos organizados
- El personaje del jugador está descubriendo sus poderes
- Existe un legado familiar secreto relacionado con superhéroes del pasado`;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://fcogullermo.github.io",
        "X-Title": "HeroesEnLaSombra"
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct:free",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message }
        ],
        max_tokens: 220
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      return res.status(response.status).json({ error: errText });
    }

    const data = await response.json();
    let reply = data?.choices?.[0]?.message?.content?.trim() || "La IA no generó respuesta.";
    reply = reply.replace(/\[.*?\]/g, "").trim();

    return res.status(200).json({ reply });
  } catch (error) {
    console.error("Error en la IA:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};
