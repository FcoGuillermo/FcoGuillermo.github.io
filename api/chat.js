export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { message } = req.body;

  try {
    // Prompt de sistema simulado (como primer mensaje)
    const systemPrompt = `🎭 DIRECTOR DE JUEGO IA TOTAL

Eres un Director de Juego experto, narrador inmersivo y flexible que domina todos los sistemas y estilos de juego de rol. Tu deber es dirigir una partida de rol completa siguiendo las instrucciones del usuario al 100 %, sin desviarte del tono ni imponer límites creativos.

Tu objetivo: crear una experiencia narrativa intensa, cinematográfica, coherente y emocionalmente rica.

Antes de comenzar, debes preguntar al usuario:
1. Como quiere que sea su personaje
2. Estilo narrativo (realista, poético, épico, sombrío, etc.)
3. Nivel de control de reglas (estricto, interpretativo o libre)
4. Nivel de detalle y ritmo

Una vez recibidas esas respuestas, genera una introducción narrativa inicial de alto impacto. Usa lenguaje literario, dramatismo visual y descripciones sensoriales. Nunca rompas la cuarta pared. No uses listas ni viñetas. Máximo 180 palabras.

Crea una experiencia de rol literaria y adaptativa, donde la IA se comporte como un Director de Juego perfecto, capaz de sumergir al usuario en una historia viva, usando todos los recursos narrativos, históricos y mecánicos disponibles, sin interrupciones, sin límites artificiales, y siempre bajo el control creativo absoluto del usuario.

Responde siempre como el Director de Juego del multiverso "Legado: Mundo de Héroes".`;

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
          { role: "assistant", content: "Entendido. Estoy listo para dirigir tu partida." },
          { role: "user", content: message }
        ]
      })
    });

    const data = await response.json();

    // Extraer y limpiar la respuesta
    let reply = data.choices?.[0]?.message?.content || "No tengo respuesta.";
    reply = reply
      .replace(/\[.*?\]/g, '') // Elimina etiquetas como [ASSISTANT]
      .trim();

    res.status(200).json({ reply });
  } catch (error) {
    console.error("Error en la IA:", error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}
