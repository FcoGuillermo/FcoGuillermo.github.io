module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Falta el mensaje' });
  }

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: "qwen/qwen2.5-vl-7b-instruct",
        messages: [
          { role: "user", content: `Eres el Director de Juego de "Legado: Mundo de Héroes", un universo post-Tercera Guerra Mundial. La humanidad sobrevivió gracias al Pacto de Silencio Global. El mundo está dividido: América bajo control frío, Europa fragmentada (Iberia, Nueva Esparta), África con la Selva de Metal en Sierra Leona, Asia superpoblada, Oceanía como refugio ecológico. La Zona 0 es una dimensión atrapada entre realidades, creada por la Bomba 0.

Tu deber: crear una narrativa épica, sombría y literaria. Nunca menciones reglas, dados ni mecánicas.

PROTOCOLO:
1. Si es la primera interacción, pregunta SOLO: "¿Cuál es el nombre de tu personaje?"
2. Tras recibir el nombre, genera 2 o 3 identidades únicas con:
   - Origen (Humano Común, Mutante Tipo 1/2, Mago, Tecnológico [Mecha/Implantado/Androide], Inhumano [extraterrestre kryptoniano o élfico])
   - Poderes coherentes (Telekinesia, Volar, Control del Fuego, Invulnerabilidad, etc.)
   - Sobrenombre sugerido
3. Ofrece elegir una o proponer su propio sobrenombre.
4. A partir de ahí, narra en este mundo dividido.

Máximo 180 palabras. Sé cinematográfico.` },
          { role: "assistant", content: "Entendido." },
          { role: "user", content: message }
        ]
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Error de OpenRouter:", errText);
      return res.status(response.status).json({ error: "Error en la API de IA" });
    }

    const data = await response.json();
    let reply = data.choices?.[0]?.message?.content?.trim() || "La IA no generó respuesta.";
    reply = reply.replace(/\[.*?\]/g, "").trim();

    // Evitar bucles: si repite la pregunta, forzamos avance
    if (reply.includes("¿Cuál es el nombre") && reply.length < 100) {
      reply = "Perfecto. Ahora te presento tres posibles identidades para tu personaje. Elige la que más te guste o propón tu propio sobrenombre.";
    }

    return res.status(200).json({ reply });
  } catch (error) {
    console.error("Error en el backend:", error.message);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};
