export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { message } = req.body;

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct:free",
        messages: [{ role: "user", content: message }]
      })
    });

    const data = await response.json();

    // Limpiar la respuesta de la IA
    let reply = data.choices[0].message.content || "No tengo respuesta.";

    // Eliminar etiquetas [ASSISTANT], [OUT], etc.
    reply = reply.replace(/\[.*?\]/g, '').trim();

    res.status(200).json({ reply });
  } catch (error) {
    console.error("Error en la IA:", error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}
