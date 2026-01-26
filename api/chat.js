export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  let body = '';
  for await (const chunk of req) {
    body += chunk;
  }

  let data;
  try {
    data = JSON.parse(body);
  } catch (e) {
    return res.status(400).json({ error: 'JSON inválido' });
  }

  const { message } = data;

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
        model: "tngtech/tng-r1t2-chimera",
        messages: [
          { role: "user", content: `Eres el Director de Juego de "Legado: Mundo de Héroes". Crea narrativa épica y sombría. Nunca menciones reglas. Pregunta SOLO: "¿Cuál es el nombre de tu personaje?"` },
          { role: "assistant", content: "Entendido." },
          { role: "user", content: message }
        ],
        max_tokens: 220
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("OpenRouter error:", errText);
      return res.status(response.status).json({ error: "Error en IA" });
    }

    const json = await response.json();
    let reply = json.choices?.[0]?.message?.content?.trim() || "La IA no generó respuesta.";
    reply = reply.replace(/\[.*?\]/g, "").trim();

    return res.status(200).json({ reply });
  } catch (error) {
    console.error("Backend error:", error.message);
    return res.status(500).json({ error: "Error interno" });
  }
}
