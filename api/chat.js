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
          { role: "user", content: "Eres el Director de Juego de Legado: Mundo de Héroes. Responde solo con: '¿Cuál es el nombre de tu personaje?'" }
        ]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Error de OpenRouter:", data);
      return res.status(response.status).json({ error: data.detail || "Error en la API" });
    }

    const reply = data.choices?.[0]?.message?.content?.trim() || "La IA no generó respuesta.";
    return res.status(200).json({ reply });

  } catch (error) {
    console.error("Error en el backend:", error.message);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};
