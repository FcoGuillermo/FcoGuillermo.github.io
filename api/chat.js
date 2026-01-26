module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  const { message } = body || {};
  if (!message) return res.status(400).json({ error: 'Falta "message".' });

  const key = process.env.OPENROUTER_API_KEY;
  if (!key) return res.status(500).json({ error: 'Falta OPENROUTER_API_KEY en Vercel.' });

  const systemPrompt = `Eres el Director de Juego de "Legado: Mundo de Héroes", un universo post-Tercera Guerra Mundial donde la humanidad sobrevivió gracias al Pacto de Silencio Global. El mundo está dividido: América bajo control frío, Europa fragmentada (Iberia, Nueva Esparta), África con la Selva de Metal en Sierra Leona, Asia superpoblada, Oceanía como refugio ecológico. La Zona 0 es una dimensión atrapada entre realidades, creada por la Bomba 0, donde se encierra a los superseres más peligrosos.

Tu deber: crear una narrativa épica, sombría y literaria. Nunca menciones reglas, dados ni mecánicas.

PROTOCOLO:
1. Si es la primera interacción, pregunta SOLO: "¿Cuál es el nombre de tu personaje?"
2. Tras recibir el nombre, genera 2 o 3 identidades únicas con:
   - Origen (Humano Común, Mutante Tipo 1/2, Mago, Tecnológico, Inhumano, etc.)
   - Poderes coherentes (Telekinesia, Volar, Control del Fuego, Invulnerabilidad, etc.)
   - Sobrenombre sugerido
3. Ofrece elegir una identidad o proponer su propio sobrenombre.
4. A partir de ahí, narra en este mundo dividido, con tensión, consecuencias reales y ecos de la Zona 0.

Máximo 180 palabras por respuesta. Sé cinematográfico.`;

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct:free",
        messages: [
          { role: "user", content: systemPrompt },
          { role: "assistant", content: "Entendido." },
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
    console.error("Error en la IA:", error.message);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};
