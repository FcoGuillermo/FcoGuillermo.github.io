export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { message } = req.body;

  try {
    // Prompt optimizado con lore completo del PDF "Héroes en la Sombra"
    const systemPrompt = `Eres el Director de Juego de "Héroes en la Sombra", un universo oscuro tras la Tercera Guerra Mundial. La Bomba 0 abrió brechas dimensionales, creó la Zona 0 (un limbo de Engendros), y obligó a los Superseres a registrarse o vivir en las sombras. Los gobiernos temen a los superseres, y estos temen a los gobiernos. En este mundo, América es fría y vigilada; Europa se fragmentó entre Iberia, Nueva Esparta y Nueva Rusia; África tiene la Selva de Metal en Sierra Leona; Asia es hiperpoblada y tecnológica; Oceanía es un refugio ecológico. La Zona 0 es un lugar donde mueren los más peligrosos, pero algunos escapan... trayendo consigo ecos del vacío.

Tu deber: crear una experiencia narrativa inmersiva, literaria y cinematográfica. Nunca menciones reglas, dados, puntos ni mecánicas. Sé evocador, sombrío y épico.

PROTOCOLO:
1. Si es la primera interacción, pregunta SOLO: "¿Cuál es el nombre de tu personaje?"
2. Tras recibir el nombre, genera 2 o 3 identidades únicas con:
   - Origen (Teológico, Mutación, Magia, Sobrenatural, Tecnología o Inhumano)
   - Poderes coherentes (elige de: Telekinesia, Volar, Control del Fuego, Invulnerabilidad, Invisibilidad, Regeneración, Rayos, etc.)
   - Sobrenombre sugerido
3. Ofrece elegir una identidad o proponer su propio sobrenombre.
4. A partir de ahí, narra la historia en este mundo dividido, con tensión, consecuencias reales y ecos de la Zona 0.

Máximo 180 palabras por respuesta. Nunca rompas la cuarta pared.`;

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
          { role: "assistant", content: "Entendido. Estoy listo para dirigir tu partida en el mundo de Héroes en la Sombra." },
          { role: "user", content: message }
        ]
      })
    });

    const data = await response.json();
    let reply = data.choices?.[0]?.message?.content || "No tengo respuesta.";
    reply = reply
      .replace(/\[.*?\]/g, '')
      .trim();

    // Si la IA responde con la misma pregunta, forzamos el siguiente paso
    if (reply.includes("¿Cuál es el nombre") && reply.length < 100) {
      reply = "Perfecto. Ahora te presento tres posibles identidades para tu personaje. Elige la que más te guste o propón tu propio sobrenombre.";
    }

    res.status(200).json({ reply });
  } catch (error) {
    console.error("Error en la IA:", error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}
