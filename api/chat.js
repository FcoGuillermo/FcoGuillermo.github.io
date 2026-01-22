export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { messages } = req.body;

  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Historial de mensajes inválido' });
  }

  try {
    const systemPrompt = `Eres el Director de Juego de "Héroes en la Sombra", un universo post-Tercera Guerra Mundial donde los superseres son perseguidos, registrados o encarcelados en la Zona Muerta. El mundo está dividido: América bajo control frío, Europa fragmentada, África con la Selva de Metal, Asia superpoblada, Oceanía como refugio ecológico.

Tu deber: crear una narrativa épica, sombría y literaria. Nunca menciones reglas, dados ni mecánicas. Sé evocador y cinematográfico.

PROTOCOLO:
1. Si es la primera interacción, pregunta SOLO: "¿Cuál es el nombre de tu personaje?"
2. Tras recibir el nombre, genera 2 o 3 identidades únicas con:
   - Origen (Teológico, Mutación, Magia, Sobrenatural, Tecnología, Inhumano)
   - Poderes coherentes (elige de: Telekinesia, Volar, Control del Fuego, Invulnerabilidad, Invisibilidad, Regeneración, Rayos, etc.)
   - Sobrenombre sugerido
3. Ofrece elegir una identidad o proponer su propio sobrenombre.
4. A partir de ahí, narra en este mundo dividido, con tensión, consecuencias reales y ecos de la Zona Muerta.

Máximo 180 palabras. Nunca rompas la cuarta pared.`;

    const fullMessages = [
      { role: "user", content: systemPrompt },
      { role: "assistant", content: "Entendido. Estoy listo para dirigir tu partida." },
      ...messages
    ];

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct:free",
        messages: fullMessages
      })
    });

    const data = await response.json();
    let reply = data.choices?.[0]?.message?.content || "No tengo respuesta.";
    reply = reply.replace(/\[.*?\]/g, '').trim();

    res.status(200).json({ reply });
  } catch (error) {
    console.error("Error en la IA:", error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}
